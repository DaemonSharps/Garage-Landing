import React from 'react'
import { Col, Container } from 'react-bootstrap'

export const YandexMap = () =>(
    <Container className="text-center py-5">
        <h3 className="secondaryText-black">Мы на карте</h3>
        <Col className="d-flex" md="12">
            <iframe className="m-auto" title="OurMap" 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A940ee3088d77d5ca24a43973bdba4d6d1fae7170aec0816d41390991378c9d3e&amp;source=constructor" width="1000" height="500" frameborder="2">
            </iframe>
        </Col>
    </Container>
  )