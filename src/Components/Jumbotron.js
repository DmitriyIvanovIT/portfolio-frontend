import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import bgimage from '../img/1533622641_85be1d0bf982000f887099fc7b15bcc1__1440x.jpg';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        background: url(${bgimage}) no-repeat fixed bottom;
        backgroun-size: cover;
        color: #efefef;
        height: 91vh;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
    }
    h1 {
        border-bottom: 1px solid rgb(104 99 99 / 50%);
    }

    p { 
        display: inline-block;
        text-align: justify;
        margin-top: 50px;
    }
    ol {
        margin-top: 20px;
    }
`;


const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Front-end developer</h1>
                <p>
                    This specialist accepts from the designer a list of layouts for the future web resource / Internet service and, on their basis, develops the client part:
                    <ol>
                        <li>
                            Does the layout of the design, i.e. on the basis of the received layouts makes templates for the pages of the site being developed using CSS and HTML. 
                        </li>
                        <li>
                            He is working on customizing buttons, sliders, forms, as well as galleries and other functionality that is supposed to be placed on the site. For this purpose, the frontend developer uses ready-made scripts from ready-made sets or makes their own.
                        </li>
                        <li>
                            Checks and tests.
                        </li>
                        <li>
                            Consults on the implementation of certain site functionality.
                        </li>
                        <li>
                            Can often optimize scripts to speed up the loading of web pages.
                        </li>
                    </ol>
                </p>
            </Container>
        </Jumbo>
    </Styles>
);

export default Jumbotron;