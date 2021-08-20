import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

export const Services = ({serviseList}) =>(
    <Container className="text-center pt-5">
        <h2 className="secondaryText-black">Услуги</h2>
        <Accordion>
            {serviseList.map(service => (
                <Accordion.Item eventKey={service.key}>
                    <Accordion.Header>{service.header}</Accordion.Header>
                    <Accordion.Body>{service.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            
        </Accordion>
    </Container>
)