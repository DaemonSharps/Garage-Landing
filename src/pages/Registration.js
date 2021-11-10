import React from 'react'
import { Container } from 'react-bootstrap'
import { RegistrationForm } from '../components/Forms/RegistrationForm'

export const Registration = ()=>{
    return(
        <Container  className="py-5">
            <RegistrationForm/>
        </Container>
    )
}