import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faVk } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () =>(
        <Container className="p-4">
            <Row>
                <Col md="9">
                    <span>Контакты</span>
                    <p className="text-white">Адресс: ул. Углическая, д.90 1/2</p>
                    <p className="text-white">Телефон: <a href="tel: +79065292103">+7 (906) 529-21-03</a></p>
                </Col>
                <Col md="3" className="border-start">
                    <div className="social-networks">
                        <a className="instagram" href="https://www.instagram.com/ar.senii5456/">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a className="vk" href="https://vk.com/id371432938">
                            <FontAwesomeIcon icon={faVk}/>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
)