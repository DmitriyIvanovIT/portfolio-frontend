import React from 'react';
import Jumbotron from './Components/Jumbotron';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import avatar from './img/avatar.jpg';
import styled from 'styled-components';

const Styles = styled.div `
    .contacts-button {
        color: white;
        margin-top: 20px; 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 38px;
        background-color: #007bff;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
            background-color: #005aff;
        }
    }
`;


export const Home = () => (
    <>
        <Styles>
            <Jumbotron/>
            <Container style={{marginBottom: '30px'}}>
                <Row style={{display: 'flex', alignItems: 'center'}}>
                    <Col md={4}>
                        <img src={avatar} alt='avatar' height={400}/>
                    </Col>
                    <Col md={8}>
                        <h2>Dmitriy Ivanovit - Front-end developer</h2>
                        <p style={{marginTop: '20px', textAlign: 'justify'}}>
                            My name is Dmitry Ivanov. I am a Frontend developer from the Northern capital of Russia. Graduated from Pskov State University with a degree in Information Systems and Technologies. Currently he is a master's student at the National Research University ITMO. On this site you can see the projects that I have done or order your own site. I work with technologies like this:
                                <ul style={{marginTop: '20px'}}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>SCSS/SASS</li>
                                    <li>Java Script</li>
                                    <li>Ajax</li>
                                    <li>React</li>
                                    <li>Wordpress</li>
                                </ul>
                            <div style={{display: 'flex', alignItems: 'center', fontWeight: 'bold'}}>
                                Social link: 
                                    <a 
                                        href="https://vk.com/ivanovdimanpsk" 
                                        target="blank_"
                                        style={{marginLeft: '10px'}}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.5 1.41667C12.4057 1.41667 15.5833 4.59425 15.5833 8.5C15.5833 12.4057 12.4057 15.5833 8.5 15.5833C4.59425 15.5833 1.41667 12.4057 1.41667 8.5C1.41667 4.59425 4.59425 1.41667 8.5 1.41667ZM8.5 0C3.80587 0 0 3.80587 0 8.5C0 13.1941 3.80587 17 8.5 17C13.1941 17 17 13.1941 17 8.5C17 3.80587 13.1941 0 8.5 0ZM8.91154 11.3312C9.12687 11.3312 9.21542 11.1867 9.21258 11.0068C9.20125 10.3282 9.46475 9.96271 9.94217 10.4387C10.4692 10.9657 10.5768 11.3312 11.2179 11.3312H12.3519C12.6374 11.3312 12.75 11.2391 12.75 11.0946C12.75 10.7886 12.2464 10.2489 11.8207 9.85362C11.2228 9.299 11.1959 9.28554 11.7102 8.61829C12.3477 7.79025 13.1828 6.72917 12.4447 6.72917H11.0344C10.7603 6.72917 10.7412 6.88287 10.6441 7.11308C10.2914 7.94396 9.622 9.02062 9.367 8.85629C9.09996 8.68417 9.2225 8.00417 9.24304 6.99337C9.24871 6.72633 9.24729 6.54287 8.83858 6.44796C8.61617 6.39625 8.39871 6.375 8.19896 6.375C7.39358 6.375 6.83754 6.71288 7.15275 6.77167C7.70879 6.87508 7.65637 8.07925 7.52604 8.59917C7.30008 9.50442 6.45079 7.88233 6.09663 7.07483C6.01163 6.88004 5.98683 6.72917 5.68154 6.72917H4.52908C4.35412 6.72917 4.25 6.78583 4.25 6.91192C4.25 7.12513 5.29763 9.29192 6.2985 10.3721C7.27529 11.4254 8.24075 11.3312 8.91154 11.3312V11.3312Z"
                                                fill="black" />
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/diman_ivanov_official" 
                                        target="blank_"
                                        style={{marginLeft: '10px'}}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.53018 16.8944H14.7425C16.1377 16.8944 17.2727 15.792 17.2727 14.4369V2.57582C17.2727 1.22079 16.1377 0.118408 14.7425 0.118408H2.53018C1.13502 0.118408 0 1.22079 0 2.57582V14.4369C0 15.792 1.13502 16.8944 2.53018 16.8944ZM1.01207 2.57582C1.01207 1.76283 1.69311 1.10137 2.53018 1.10137H14.7425C15.5796 1.10137 16.2606 1.76283 16.2606 2.57582V14.4369C16.2606 15.2499 15.5796 15.9114 14.7425 15.9114H2.53018C1.69311 15.9114 1.01207 15.2499 1.01207 14.4369V2.57582Z"
                                                fill="black" />
                                            <path
                                                d="M8.63635 12.9297C11.1476 12.9297 13.1907 10.9453 13.1907 8.50636C13.1907 6.06737 11.1476 4.08301 8.63635 4.08301C6.12515 4.08301 4.08203 6.06737 4.08203 8.50636C4.08203 10.9453 6.12515 12.9297 8.63635 12.9297ZM8.63635 5.06597C10.5896 5.06597 12.1786 6.60928 12.1786 8.50636C12.1786 10.4034 10.5896 11.9467 8.63635 11.9467C6.68311 11.9467 5.0941 10.4034 5.0941 8.50636C5.0941 6.60928 6.68311 5.06597 8.63635 5.06597Z"
                                                fill="black" />
                                            <path
                                                d="M13.4092 4.82742C14.2363 4.82742 14.9092 4.17386 14.9092 3.37056C14.9092 2.56726 14.2363 1.9137 13.4092 1.9137C12.5821 1.9137 11.9092 2.56726 11.9092 3.37056C11.9092 4.17386 12.5821 4.82742 13.4092 4.82742ZM13.4092 2.88494C13.6848 2.88494 13.9092 3.10284 13.9092 3.37056C13.9092 3.63828 13.6848 3.85618 13.4092 3.85618C13.1335 3.85618 12.9092 3.63828 12.9092 3.37056C12.9092 3.10284 13.1335 2.88494 13.4092 2.88494Z"
                                                fill="black" />
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://tlgg.ru/diman_ivanov" 
                                        target="blank_"
                                        style={{marginLeft: '10px'}}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path
                                                    d="M8.39 16.78C13.0164 16.78 16.78 13.0164 16.78 8.39C16.78 3.76361 13.0164 0 8.39 0C3.76361 0 0 3.76361 0 8.39C0 13.0164 3.76361 16.78 8.39 16.78ZM8.39 1.04875C12.4382 1.04875 15.7313 4.34183 15.7313 8.39C15.7313 12.4382 12.4382 15.7313 8.39 15.7313C4.34183 15.7313 1.04875 12.4382 1.04875 8.39C1.04875 4.34183 4.34183 1.04875 8.39 1.04875Z"
                                                    fill="black" />
                                                <path
                                                    d="M5.52062 9.89674L6.61691 9.42061L6.30928 9.72894C6.21069 9.82752 6.15546 9.96106 6.15546 10.0995V12.1516C6.15546 12.6214 6.72318 12.8493 7.05039 12.5221L8.15088 11.4216L10.549 12.6207C10.8595 12.7759 11.2349 12.592 11.2992 12.2452L12.6675 4.72151C12.7395 4.31669 12.341 3.98948 11.9599 4.1391L3.06934 7.61885C2.67081 7.77407 2.61768 8.31942 2.97845 8.54945L5.0298 9.85829C5.17663 9.95197 5.36191 9.96666 5.52062 9.89674V9.89674ZM11.4677 5.45913L10.3931 11.3706L8.28163 10.3155C8.07747 10.2135 7.83416 10.2561 7.67685 10.4141L7.20421 10.8868V10.3183L9.3066 8.21594C9.71422 7.80833 9.25557 7.13573 8.727 7.36436L5.35911 8.82562L4.41244 8.22154L11.4677 5.45913Z"
                                                    fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="16.78" height="16.78" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                            </div>
                        </p>
                        <Link className="contacts-button" to="/сontacts">Write me</Link>
                    </Col>
                </Row>
            </Container>
        </Styles>   
    </>
);

