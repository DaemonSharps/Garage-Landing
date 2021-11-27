import React, { useState } from 'react'
import { Container, Nav, Navbar, NavLink} from 'react-bootstrap'
import { LoginModal } from './Modals/LoginModal'
import { BrownButton } from '../components/Buttons'

export const SiteNavbar = (history) =>{
    const [showAuthModal, setShowAuthModal] = useState(false);
    return(
        <Navbar className="navbarsite">
            <Container>
                <Navbar.Brand href="/" className="secondaryText">Гаражъ</Navbar.Brand>
                <NavLink />
                <Navbar.Toggle aria-controls="login"/>
                <Navbar.Collapse id="login">
                    <Nav.Link href="/records">Записи</Nav.Link>
                    <Nav className="ms-auto">
                        <BrownButton text="Войти" onClick = {() => setShowAuthModal(true)}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <LoginModal history={history} onHide = {setShowAuthModal} show = {showAuthModal}/>
        </Navbar>
        )
    }