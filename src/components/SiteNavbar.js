import React, { useContext, useState } from 'react'
import { Container, Nav, Navbar, NavLink} from 'react-bootstrap'
import { LoginModal } from './Modals/LoginModal'
import { BrownButton } from '../components/Buttons'
import { userContext } from '../context/User/userContext'

export const SiteNavbar = () =>{
    const [showAuthModal, setShowAuthModal] = useState(false);
    const { authorized } = useContext(userContext);
    return(
        <Navbar className="navbarsite">
            <Container>
                <Navbar.Brand href="/" className="secondaryText">Гаражъ</Navbar.Brand>
                <NavLink />
                <Navbar.Toggle aria-controls="login"/>
                <Navbar.Collapse id="login">
                    <Nav.Link href="/records">Записи</Nav.Link>
                    <Nav className="ms-auto">
                        {authorized
                        ?<BrownButton text="Аккаунт" onClick = {() => {window.location.href="/account";}}/>
                        :<BrownButton text="Войти" onClick = {() => setShowAuthModal(true)}/>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <LoginModal onHide = {setShowAuthModal} show = {showAuthModal}/>
        </Navbar>
        )
    }