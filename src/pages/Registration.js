import React from 'react'
import { Container } from 'react-bootstrap'
import { RecordList } from '../components/RecordList'
import { RegistrationForm } from '../components/RegistrationForm'

export const Registration = () =>{
    return(
        <Container className="py-5">
            <RegistrationForm/>
            <RecordList/>
        </Container>
    )
}