import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/like.png';
import { useLocation } from 'react-router-dom';

export default function Header({ Items }) {
    const currentURL = useLocation().pathname;
    var expand = '';
    currentURL === '/' ? expand = 'sm' : expand = 'md';
    return (
        <div>
            <Navbar bg="primary" expand={expand}>
                <Navbar.Brand href="/"><img src={logo} width='70px' alt='logo'></img><span className="text-light">SITE NAME</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {Items.map((item) => {
                            return (
                                <li className="nav-item" key={item.title}>
                                    <a className="nav-link text-light " href={item.href}> {item.title} </a>
                                </li>
                            );
                        })}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
}
