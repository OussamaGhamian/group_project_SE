import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';
import img5 from '../../assets/img/img5.jpg';
import img6 from '../../assets/img/img6.jpg';
import img7 from '../../assets/img/img7.jpg';




export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className="h-50" activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img1}
                    style={{ 'max-height': "500px", 'width': "auto" }}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Create your project in a simple steps</h3>
                    <p>Add your organization, its teams, its members.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img2}
                    style={{ 'max-height': "500px", 'width': "auto" }}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>It gives you freedom</h3>
                    <p>Add more than one project and add more than one team to work on your projects.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img3}
                    style={{ 'max-height': "500px", 'width': "auto" }}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Get the job done efficiently</h3>
                    <p>
                        With the ability to divide the tasks and accomplish them by more than one person with ease and ease.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img4}
                    style={{ 'max-height': "500px", 'width': "auto" }}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Create your project in a simple steps</h3>
                    <p>Add your organization, its teams, its members.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img5}
                    style={{ 'max-height': "500px", 'width': "auto" }}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>It gives you freedom</h3>
                    <p>Add more than one project and add more than one team to work on your projects.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img6}
                    style={{ 'max-height': "500px", 'width': "auto" }}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Get the job done efficiently</h3>
                    <p>
                        With the ability to divide the tasks and accomplish them by more than one person with ease and ease.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img7}
                    style={{ 'max-height': "500px", 'width': "auto" }}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Create your project in a simple steps</h3>
                    <p>Add your organization, its teams, its members.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

