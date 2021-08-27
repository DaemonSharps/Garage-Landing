import React from 'react'
import { Fragment } from 'react'
import { Col } from 'react-bootstrap'

export const YandexMap = () =>(
    <Fragment>
        <Col className="d-flex shadow-lg" md="12">
            <iframe className="m-auto" title="OurMap" 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A940ee3088d77d5ca24a43973bdba4d6d1fae7170aec0816d41390991378c9d3e&amp;source=constructor" 
            width="100%" 
            height="300" 
            frameBorder="2">
            </iframe>
        </Col>
    </Fragment>
  )