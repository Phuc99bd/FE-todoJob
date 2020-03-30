import React from "react";
import { Container, Row, Col,Alert,Spinner } from "react-bootstrap";
import { register } from "../../services/auth/action";
import propAuth from "../../services/auth/seletor";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {RegisterFormik} from "./formik/register";

const RegisterItem = () =>{
   let authProps = propAuth().auth;
   let dispatch = useDispatch();

   const submitForm = (fullname,email,password) => {
    return dispatch(register(fullname,email,password));
  };

  const showError = ()=>{
      if(authProps.error){
        return <Alert variant="danger">{authProps.error}</Alert>
      }
  }
  const showSuccess = ()=>{
    if(authProps.success){
        return <Alert variant="success">{authProps.success}</Alert>
      }
  }
  if(authProps.user && authProps.user != ''){
      return <Redirect to="/"/>
  }

  const loading = ()=>{
      return (authProps.loading) ? (<Spinner animation="grow" variant="primary" />) : "Register"
  } 

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Register Account Todo Job</h1>
          <RegisterFormik loading={()=>loading()} submitForm={(fullname,email,password)=>submitForm(fullname,email,password)} showError={()=>showError()} showSuccess={()=>showSuccess()} ></RegisterFormik>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterItem;
