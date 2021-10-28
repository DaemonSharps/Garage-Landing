import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'

export const SiteNavbar = () =>{
    return(
        <Navbar className="navbarsite">
            <Container>
                <NavbarBrand href="/" className="secondaryText">Гаражъ</NavbarBrand>
            </Container>
        </Navbar>
        )
    }