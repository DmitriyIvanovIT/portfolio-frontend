import React from 'react';
import { Carousel } from 'react-bootstrap';


function Slider() {
    return(
        <Carousel>
            <Carousel.Item style={{'height': '91vh'}}>
                <a 
                    href="https://dmitriyivanovit.github.io/Batman2021/"
                    target="_blank"
                    className="d-block w-100"
                >
                    <img src="./img/Batman2021.jpg" className="d-block w-100" alt="First slide"/>
                </a>
                <Carousel.Caption>
                    <h3>Promo site Batman2021</h3>
                    <p>Promo site for Batman movie due out in 2021</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '91vh'}}>
                <a 
                    href="https://dmitriyivanovit.github.io/The_Witcher/" 
                    target="_blank" 
                    className="d-block w-100"
                >
                    <img src="./img/The_Witcher.jpg" className="d-block w-100" alt="First slide"/>
                </a>
                <Carousel.Caption>
                    <h3>Promo site The Witcher</h3>
                    <p>Promo website for the Witcher series from Netflix</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '91vh'}}>
                <a 
                    href="https://dmitriyivanovit.github.io/CinemaSearch/"
                    target="_blank"
                    className="d-block w-100"
                >
                    <img src="./img/CinemaSearch.jpg" className="d-block w-100" alt="First slide"/>
                </a>
                <Carousel.Caption>
                    <h3>Cinema Search</h3>
                    <p>Site for finding films and information about them</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
    
};

export default Slider;

