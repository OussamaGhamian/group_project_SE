import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";


export default function login() {
    return (
        <Form style={{'height':"50%",'width':"50%"}}>
            <Form.Group controlId="formBasicEmail">
                <hi>Log in</hi>
                <br></br>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="your Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
}
