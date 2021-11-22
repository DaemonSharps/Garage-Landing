import React, { useState } from 'react'
import { Button, Container, Nav, Navbar} from 'react-bootstrap'
import { LoginModal } from './Modals/LoginModal';

export const SiteNavbar = (history) =>{
    const [showAuthModal, setShowAuthModal] = useState(false);
    return(
        <Navbar className="navbarsite">
            <Container>
                <Navbar.Brand href="/" className="secondaryText">Гаражъ</Navbar.Brand>
                <Navbar.Toggle aria-controls="login"/>
                <Navbar.Collapse id="login">
                    <Nav className="ms-auto">
                        <Button className = "g-btn-brown-light g-btn-text" onClick = {() => setShowAuthModal(true)}>
                            Войти
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <LoginModal history={history} onHide = {setShowAuthModal} show = {showAuthModal}/>
        </Navbar>
        )
    }