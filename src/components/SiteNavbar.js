import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'

export const SiteNavbar = () =>(
    <Navbar className="navbarsite">
        <Container>
            <NavbarBrand href="/" className="secondaryText">garage</NavbarBrand>
        </Container>
    </Navbar>
)