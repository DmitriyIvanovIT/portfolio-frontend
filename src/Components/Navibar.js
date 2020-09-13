import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link {
       color: #adb1b8;
       &:hover {
            color: white;
       } 
    }
`;

function Navibar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    return(
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><img src="itmo.png" with ='auto' height='60px' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/portfolio-frontend">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/works">Works</Link></Nav.Link>
                                <Nav.Link><Link to="/сontacts">Contacts</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant="primary" className="mr-2" onClick={handleShow}>Log In</Button>
                                <Button variant="primary" onClick={handleShow}>Sing In</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remeber me"></Form.Check>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
         </>
    )
    
};

export default Navibar;

