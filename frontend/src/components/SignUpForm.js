import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export default function SignUpForm() {
    return (
        <div>
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Your Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Your Password </Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password Again" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
            </Button>
                </Form>
            </div>
        </div>




    );
}
