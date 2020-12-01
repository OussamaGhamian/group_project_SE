import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Header from "../../components/Header";
import { HomePageItems } from '../../components/NavbarItems';




export default function Signup() {
        return (
        <div>
        <Header Items={HomePageItems} />
        <div className='m-5'>
        <Form>
            <div><h1>sign up</h1></div><br/>

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
