import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";


export default function description() {
    return (
        <div >
            <Card.Body>
                <Card.Title>Best project management ever</Card.Title>
                <Card.Text>
                    Allows multiple organizations to register, add team members,
                    and create projects, tasks as well as subdivide users into roles. Provide high level summaries of
                    the data, particularly project completions.
                </Card.Text>
                <Button variant="success" href="/signup">Join Us Today </Button>
            </Card.Body>
        </div>
    );
}