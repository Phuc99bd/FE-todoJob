import React, { Component,} from "react";
import { Container, Row, Col,Alert,Spinner } from "react-bootstrap";
import { loginUser } from "../../services/auth/action";
import propAuth from "../../services/auth/seletor";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {LoginFormik} from "./formik/login";

const AuthItem = () =>{
   let authProps = propAuth().auth;
   let dispatch = useDispatch();
   
  const submitForm = (email,password) => {
    return dispatch(loginUser(email,password));
  };

  const showError = ()=>{
      if(authProps.error){
        return <Alert variant="danger">{authProps.error}</Alert>
      }
  }

  if(authProps.user && authProps.user != ''){
      return <Redirect to="/"/>
  }
  if(localStorage.getItem('tokenKey')){
    return <Redirect to="/"/> 
  }
  const loading = ()=>{
      return (authProps.loading) ? (<Spinner animation="grow" variant="primary" />) : "Login"
  } 
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Đăng nhập Todo Job</h1>
          <LoginFormik loading={()=>loading()} submitForm={(email,password)=>submitForm(email,password)} showError={()=>showError()} ></LoginFormik>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthItem;
