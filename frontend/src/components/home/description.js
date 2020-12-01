import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";


export default function description() {
    return (
        <div >
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="success" href="/signup">Join Us Today </Button>
            </Card.Body>
        </div>
    );
}