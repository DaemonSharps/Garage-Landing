import React, { useContext, useEffect } from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import { recordsContext } from '../context/Records/recordsContext';

export const SiteNavbar = () =>{

    const {loading, count, getRecords} = useContext(recordsContext);

    useEffect(() =>{
        getRecords()
        // eslint-disable-next-line
    },[]);

    return(
        <Navbar className="navbarsite">
            <Container>
                <NavbarBrand href="/" className="secondaryText">Гаражъ</NavbarBrand>
                <Navbar.Text className="text-white">
                    Посетителей сегодня: {loading?
                    "...":
                    `${count}`}
                </Navbar.Text>
            </Container>
        </Navbar>
        )
    }