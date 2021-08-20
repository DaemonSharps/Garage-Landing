import React from 'react'
import { Container } from 'react-bootstrap'
import { RecordsForToday } from '../components/RecordsForToday';
import { RegistrationForm } from '../components/RegistrationForm';

export const Registration = () =>{
    return(
        <Container className="py-5">
            <h1 className="py-5">Регистрация</h1>
            <RegistrationForm/>
            <RecordsForToday/>
        </Container>
    )
}