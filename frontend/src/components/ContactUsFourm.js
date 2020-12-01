import React from "react";
import Form from 'react-bootstrap/Form'




export default function contactus() {
    return (
        <div className='App container'>
            <h1>Contact Us</h1>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="+961 00 000000"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>The Subject</Form.Label>
                <Form.Control as="select">
                    <option>Problems And Bugs</option>
                    <option>Advertising</option>
                    <option>Payment</option>
                    <option>Suggestions</option>
                    <option>Join us</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>The Message</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>
            <Form.Group controlId="formBasicRange">
                <Form.Label>How Was The User Experience</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Include Screen Shot" />
            </Form.Group>
        </Form>
        </div>

    );
}