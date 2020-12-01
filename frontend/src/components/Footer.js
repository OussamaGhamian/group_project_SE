import React from "react";
import "../App.css";
import { Navbar, Nav } from 'react-bootstrap';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div >
            <Navbar bg="primary" expand="sm">
                <span > © {year} SITE NAME.  All rights reserved.</span>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light " href='./'> About </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href='/contactus'> Contact Us </a>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}