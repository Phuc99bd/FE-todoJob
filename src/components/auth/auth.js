import React, { Component,useState,useRef} from "react";
import { Container, Row, Col, Form, Button,Alert,Spinner } from "react-bootstrap";
import { loginUser } from "../../services/auth/action";
import propAuth from "../../services/auth/seletor";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";

const AuthItem = () =>{
  const [email,setEmail ]=useState(""),
   [password,setPassword] =useState(""),
   [errorEmail,setErrorEmail] = useState(""),
   [errorPassword,setErrorPassword] = useState(""),
   refEmail = useRef(),
   refPassword = useRef();
   let authProps = propAuth().auth;
   let dispatch = useDispatch();
   
  const submitForm = (e) => {
    e.preventDefault();
    if (email === "") {
        setErrorEmail("Email không hợp lệ.");
        refEmail.current.focus();
        return false;
    }else{  setErrorEmail(""); }
    if (password === "") {
        setErrorPassword("Password không được trống.");
        return false;
    }else{  setErrorPassword(""); }
    dispatch(loginUser(email,password));
  };

  const showError = ()=>{
      if(authProps.error){
        return <Alert show={true} variant="danger">{authProps.error}</Alert>
      }
  }

  if(authProps.user && authProps.user != ''){
      return <Redirect to="/"/>
  }

  if (authProps.loading) {
    return <Spinner animation="grow" variant="primary" />
  }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Đăng nhập Todo Job</h1>
          <Form>
            <Form.Group controlId="controlEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                ref={refEmail}
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)} required
              ></Form.Control>
              <Form.Text className="text-danger">{errorEmail}</Form.Text>
            </Form.Group>
            <Form.Group controlId="controlEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                ref={refPassword}
                onChange={e => setPassword(e.target.value)} required
              ></Form.Control>
              <Form.Text className="text-danger">{errorPassword}</Form.Text>
            </Form.Group>
            {showError()}
            <Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => submitForm(e)}
              >
                Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthItem;
