import React from "react";
import {useDispatch} from "react-redux";
import { getJOb, searchJob} from "../../services/job/action";
const SearchForm =({props})=>{
    let dispatch = useDispatch();
    const onChange = (e)=>{
        dispatch(searchJob(e.target.value))
        props.job.keyword= e.target.value;
        dispatch(getJOb(props));
    }
        
    return (<input type="text" className="form-control" placeholder="Search name Job...." defaultValue={props.job.keyword} onChange={(e)=>onChange(e)}/>)  
}

 export default SearchForm;