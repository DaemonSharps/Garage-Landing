import React from 'react'
import { Container } from 'react-bootstrap'
import { RecordList } from '../components/RecordList'

export const Records = () =>{
    return(
        <Container className="py-5">
            <RecordList/>
        </Container>
    )
}