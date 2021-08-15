import React from "react"
import { Col, Container } from "react-bootstrap"

export const NotFound = () =>(
    <Container>
        <Col md="9" className="pt-5">
            <h1 className="display-4 pt-5">404 Not Found</h1>
            <p className="lead">Ты что-то попутал.</p>
            <a href="/" className="btn btn-warning">На главную</a>
        </Col>
    </Container>
)