import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { checkCredentials } from "../API/UserAPI";
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    async function HandleLogIn(event) {
        event.preventDefault();
        const isLoggedIn = async () => {
            return await checkCredentials(email, password);
        }
        isLoggedIn().then(function (response) {
            if (response.data.accessToken) {
                const cookies = new Cookies();
                var token = response.data.accessToken;
                var userId = response.data.user.id;
                cookies.set('token', { token }, { path: '/' });
                cookies.set('userId', { userId }, { path: '/' });
                history.push("/LoggedIn");
            } else {

                alert(response.data.msg);
            }
        })
    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
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
                <Button block size="lg" type="submit" disabled={!validateForm()} onClick={HandleLogIn}>
                    Login
        </Button>
            </Form>

        </div>
    );
}
