import React from 'react'
import { Button, Container, Nav, Navbar} from 'react-bootstrap'

export const SiteNavbar = () =>{
    return(
        <Navbar className="navbarsite">
            <Container>
                <Navbar.Brand href="/" className="secondaryText">Гаражъ</Navbar.Brand>
                <Navbar.Toggle aria-controls="login"/>
                <Navbar.Collapse id="login">
                    <Nav className="ms-auto">
                        <a className="btn g-btn-brown-light g-btn-text" href="/login">Войти</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }