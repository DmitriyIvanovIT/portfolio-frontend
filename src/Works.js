import React from 'react';
import Slider from './Components/Slider';
import { Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
    .filter-block {
        display: flex;
        font-size: 2rem;
        justify-content: center;
        flew-wrap: wrap;
    }
    .filter-title {
        margin: 10px 0;
    }
    .filter-item {
        position: relative;
        margin: 10px;
        cursor: pointer;
        text-decoration: none;
        transition: 0.5s ease-in-out;

        &:hover {
            text-decoration: underline; 
        }

        &.active {
            text-decoration: underline; 
        }
    }
    .cards-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .card {
        width: 280px;
        margin: 10px;
    }
    .card-img-top {
        height: 190px; 
        object-fit: cover;
    }

    .card-text {
       height: 48px; 
    }
    .card-buttons {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .card-buttons .btn-primary {
        width: 97px;  
    } 
    .button_code {
        margin-left: auto;
    }
    
`;


export const Works = () => {

    const filterWorks = (event) => {
        const card = document.querySelectorAll('.card'),
        filterItem = document.querySelectorAll('.filter-item'),
        thisAtribut = event.target.textContent;
        
        filterItem.forEach(item => item.textContent === thisAtribut ? item.classList.add('active') 
            : item.classList.remove('active'));

        card.forEach(item => {
            if (thisAtribut !== 'All Works') {
                if (item.dataset.work === thisAtribut) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            } else {
                item.style.display = '';
            }
        });
    };

    return (<>
        <Styles>
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <div className="filter-block">
                    <strong className='filter-title'>Filter:</strong>
                    <span className="filter-item active" onClick={filterWorks}>All Works</span>
                    <span className="filter-item" onClick={filterWorks}>HTML</span>
                    <span className="filter-item" onClick={filterWorks}>Java Script</span>
                    <span className="filter-item" onClick={filterWorks}>React</span>
                </div>
                <div className="cards-block">
                    
                    <Card data-work="Java Script">
                        <Card.Img variant="top" src="img/races.jpg"/>
                        <Card.Body>
                            <Card.Title>Races</Card.Title>
                            <Card.Text>Racing Game on Java Script</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/NeedForJS/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/NeedForJS/tree/changeCar"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="Java Script">
                        <Card.Img variant="top" src="img/todolist.png"/>
                        <Card.Body>
                            <Card.Title>ToDoList</Card.Title>
                            <Card.Text>To-do list site</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/ToDoList/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/ToDoList/tree/lesson22h"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="React">
                        <Card.Img variant="top" src="img/calcMoney.jpg"/>
                        <Card.Body>
                            <Card.Title>Calc Money</Card.Title>
                            <Card.Text>Money accounting application</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/calc-money/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/reactWorkShop"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="HTML">
                        <Card.Img variant="top" src="img/spacex.jpg"/>
                        <Card.Body>
                            <Card.Title>SpaceX</Card.Title>
                            <Card.Text>Analogue of the site of the company Ilona Mask</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/SpaceX/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/SpaceX"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="Java Script">
                        <Card.Img variant="top" src="img/itunes.jpeg"/>
                        <Card.Body>
                            <Card.Title>iTunes</Card.Title>
                            <Card.Text>Site with media players in Java Script</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/iTunes/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/iTunes"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="Java Script">
                        <Card.Img variant="top" src="img/Avito_case_new_logo.jpg"/>
                        <Card.Body>
                            <Card.Title>Awito</Card.Title>
                            <Card.Text>Analogue of the site of ads "Avito"</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/awito"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="HTML">
                        <Card.Img variant="top" src="img/starWars.jpeg"/>
                        <Card.Body>
                            <Card.Title>Star Wars</Card.Title>
                            <Card.Text>Promo site for the movie "Star Wars"</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/star_wars/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/star_wars"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="HTML">
                        <Card.Img variant="top" src="img/Ghostbusters.jpg"/>
                        <Card.Body>
                            <Card.Title>Ghostbusters</Card.Title>
                            <Card.Text>Promo site for the film "Ghostbusters"</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/Ghostbusters/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/Ghostbusters"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="HTML">
                        <Card.Img variant="top" src="img/distance.jpg"/>
                        <Card.Body>
                            <Card.Title>Distance</Card.Title>
                            <Card.Text>The main page of the fictional social networks</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/distance/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/distance"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="Java Script">
                        <Card.Img variant="top" src="img/netclicks.png"/>
                        <Card.Body>
                            <Card.Title>Netclix</Card.Title>
                            <Card.Text>TV series website</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/netclicks/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/netclicks"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="Java Script">
                        <Card.Img variant="top" src="img/CinemaSearch.jpg"/>
                        <Card.Body>
                            <Card.Title>Cinema Search</Card.Title>
                            <Card.Text>Site for finding films and information about them</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/CinemaSearch/"
                                    target="blank_"
                                >
                                    View site
                                </Button>
                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/CinemaSearch"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>  
                        </Card.Body>
                    </Card>

                    <Card data-work="Java Script">
                        <Card.Img variant="top" src="img/Delivery-food.jpg"/>
                        <Card.Body>
                            <Card.Title>Delivery Food</Card.Title>
                            <Card.Text>An analogue of the "Delivery club" food delivery website</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/Delivery-Food/"
                                    target="blank_"
                                >
                                    View site
                                </Button>
                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/Delivery-Food"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>  
                        </Card.Body>
                    </Card>

                    <Card data-work="HTML">
                        <Card.Img variant="top" src="img/Batman2021.jpg"/>
                        <Card.Body>
                            <Card.Title>Batman2021</Card.Title>
                            <Card.Text>Promo site for Batman movie due out in 2021</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/Batman2021/"
                                    target="blank_"
                                >
                                    View site
                                </Button>

                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/Batman2021"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card data-work="HTML">
                        <Card.Img variant="top" src="img/The_Witcher.jpg"/>
                        <Card.Body>
                            <Card.Title>The Witcher</Card.Title>
                            <Card.Text>Promo website for the Witcher series from Netflix</Card.Text>
                            <div className="card-buttons"> 
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/The_Witcher/"
                                    target="blank_"
                                >
                                    View site
                                </Button>
                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/The_Witcher"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>  
                        </Card.Body>
                    </Card>
                    
                    <Card data-work="Java Script">
                        <Card.Img variant="top" src="img/aviasales.jpg"/>
                        <Card.Body>
                            <Card.Title>Аviasales</Card.Title>
                            <Card.Text>Analogue of the website of the company "Aviasales"</Card.Text>
                            <div className="card-buttons">
                                <Button 
                                    variant="primary" 
                                    href="https://dmitriyivanovit.github.io/aviasales/"
                                    target="blank_"
                                >
                                    View site
                                </Button>
                                <Button 
                                    variant="primary" 
                                    href="https://github.com/DmitriyIvanovIT/aviasales"
                                    target="blank_"
                                    className="button_code"
                                >
                                    View code
                                </Button>
                            </div>  
                        </Card.Body>
                    </Card>

                </div>
            </Container>
        </Styles>
    </>
)};
