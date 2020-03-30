import React from "react";
import { Col } from "react-bootstrap";
import { AddFormik } from "./fomik/addItem";
import { useDispatch } from "react-redux";
import { addJob} from "../../services/job/action";

const AddJob = ({changeSTT})=>{
    let dispatch = useDispatch();
    const submitForm = (nameJob,active) => {
        dispatch(addJob(nameJob,active));
    };

    return (
        <Col md={3}>
            <AddFormik submitForm={(nameJob,active)=>submitForm(nameJob,active)} changeSTT={()=>changeSTT()}></AddFormik>
        </Col>
    )
}

export default AddJob