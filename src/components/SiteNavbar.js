import React, { useContext, useEffect } from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import { getLocaleISOString } from '../common/helpers';
import { recordsContext } from '../context/Records/recordsContext';

export const SiteNavbar = () =>{
    return(
        <Navbar className="navbarsite">
            <Container>
                <NavbarBrand href="/" className="secondaryText">Гаражъ</NavbarBrand>
            </Container>
        </Navbar>
        )
    }