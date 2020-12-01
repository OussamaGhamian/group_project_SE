import React from "react";
import Form from 'react-bootstrap/Form'
import Contactus from '../components/ContactUsFourm';
import { HomePageItems } from '../components/NavbarItems';
import Header from "../components/Header";
import Home from "../components/home/home";



export default function contactus() {
    return (
        <div>
            <Header Items={HomePageItems} />
            <Contactus></Contactus>
        </div>

    );
}