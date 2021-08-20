import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const PrimaryImage = () =>(
    <div className="homeImg">
            <Container className="d-flex flex-column pt-5 min-vh-100">
                <Row className="my-auto justify-content-center">
                    <Col lg="9" className="text-center">
                        <p className="secondaryText">Добро пожаловать</p>
                        <h1 className="primaryText">GARAGE</h1>
                        <p className="secondaryText">Arseny's estate</p>
                        <a className="btn  btn-success py-2 px-4" href="/register">На прием</a>
                    </Col>
                </Row>
            </Container>
        </div>
)