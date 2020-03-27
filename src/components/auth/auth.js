import React, { Component } from 'react'
import {Container,Row,Col,Form, Button} from "react-bootstrap";
import {} from "react-redux";

export default class componentName extends Component {

    renderAuth(){

    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <h1>Đăng nhập TodoJob</h1>
                        <Form>
                            <Form.Group controlId="controlEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email">
                                </Form.Control>
                                <Form.Text className="text-danger">
                             
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="controlEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="email" placeholder="Enter password">
                                </Form.Control>
                                <Form.Text className="text-danger">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit">Login</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
