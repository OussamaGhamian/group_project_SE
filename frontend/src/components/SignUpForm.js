import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { signUp } from "../API/UserAPI";
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

export default function SignUpForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setpassword_confirmation] = useState("");
    const [lastName, setlastName] = useState("");
    const history = useHistory();
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    function HandleLogIn(event) {
        event.preventDefault();
        const isLoggedIn = async () => {
            return signUp(email, name, password, lastName,password_confirmation);
        }
        isLoggedIn().then(function (response) {
            if (response.data.accessToken) {
                const cookies = new Cookies();
                var token = response.data.access_token;
                var userId = response.data.user.id;
                cookies.set('token', { token }, { path: '/' });
                cookies.set('userId', { userId }, { path: '/' });
                history.push("/LoggedIn");
            } else {
                alert('wrong username or password');
            }
        })
    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password_confirmation">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password_confirmation}
                        onChange={(e) => setpassword_confirmation(e.target.value)}
                    />
                </Form.Group>

                <Button block size="lg" type="submit" disabled={!validateForm()} onClick={HandleLogIn}>
                    Register
        </Button>
            </Form>

        </div>
    );
}
