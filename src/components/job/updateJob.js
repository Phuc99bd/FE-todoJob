import React from "react";
import { Col } from "react-bootstrap";
import { UpdateFormik } from "./fomik/updateItem";
import { useDispatch } from "react-redux";
import { updateJob,getJOb } from "../../services/job/action";
import Swal from "sweetalert2";

const UpdateJob = ({id,nameJob,active,changeSTT,props})=>{
    let dispatch = useDispatch();
    const submitForm = (id,name,active) => {
       dispatch(updateJob({id: id ,nameJob: name, active: active}))
       dispatch(getJOb(props));
       Swal.fire("Update complete!",`Update Job with Id: ${id} successfully!`,"success");
       changeSTT();
    };
      
    return (  
        <UpdateFormik id={id} nameJob={nameJob} active={active} changeSTT={()=>changeSTT()} submitForm={(id,name,active)=>submitForm(id,name,active)} changeSTT={()=>changeSTT()}></UpdateFormik>
    )
}

export default UpdateJob