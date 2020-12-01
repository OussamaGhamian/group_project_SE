import React from "react";
import Carousel from './ControlledCarousel'
import Description from './description';

export default function Home(){
    return(
        <div className='App'>
        <Carousel></Carousel>
            <Description></Description>
        </div>
    );
}