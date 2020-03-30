import React from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "react-bootstrap";
import { changePage,getJOb } from "../../services/job/action"; 

const PaginationI =({props}) => {

  let dispatch = useDispatch();
  const onChangePage=(val)=>{
     console.log(val);
     dispatch(changePage(val));
     props.job.pages = val;
     dispatch(getJOb(props));
  }
  let loadingFirst =()=>{
      return (props.job.pages !== 1 && props.job.numOfJob > 1) && (<Pagination.First onClick={()=>onChangePage(1)} />)
  }
  let loadingLast=()=>{
      return (props.job.pages !== props.job.numOfJob) && (<Pagination.Last onClick={()=>onChangePage(props.job.numOfJob)}/>)
  }
  let loadingPrev=()=>{
      return (props.job.pages > 1 && props.job.numOfJob > 1) && (<Pagination.Prev onClick={()=>onChangePage(props.job.pages - 1)} />)
  }
  let loadingNext=()=>{
    return (props.job.pages !==props.job.numOfJob && props.job.numOfJob > 1) && (<Pagination.Next onClick={()=>onChangePage(props.job.pages + 1)} />)
  }
  let loadItem =()=>{
      let arr=[];
      for(let i=1;i<=props.job.numOfJob;i++){ 
         arr.push(i);
      }
      return arr.map(i=>{
         let check = props.job.pages === i ? true :false;
        return ( <Pagination.Item key={i} onClick={()=>onChangePage(i)} active={check}>{i}</Pagination.Item>)
      })
      
  }
  return (
    <Pagination>
      {loadingFirst()}
      {loadingPrev()}
      {loadItem()}
      {loadingNext()}
      {loadingLast()}
    </Pagination>
  );
};
export default PaginationI
