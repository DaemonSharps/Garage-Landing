import React from "react"
import { Col, Container } from "react-bootstrap"

export const NotFound = () =>(
    <Container>
        <Col md="9" className=" mt-5">
            <h1 className="display-4">404 Not Found</h1>
            <p className="lead">Ты что-то попутал.</p>
            <a href="/" className="btn btn-warning">На главную</a>
        </Col>
    </Container>
)