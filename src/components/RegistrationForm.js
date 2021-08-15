import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import garJpeg from "../img/garage.jpg";

export const RegistrationForm = () =>(
    <Form className="row my-3 d-flex justify-content-center">
        <h2 className="text-center mb-3">Запись на приемъ</h2>
        <Col md="8">
            <Form.Control type="email" className="mb-2" placeholder="your@mail.com"/>
            <Form.Control type="text" className="mb-2" placeholder="Имя"/>
            <Form.Control type="text" className="mb-2" placeholder="Фамилия"/>
            <Form.Control type="text" className="mb-2" placeholder="Отчество"/>
            <Row className="mb-3">
                <Col md="4">
                    <Form.Label>Дата:</Form.Label>
                    <Form.Control type="date"/>
                </Col>
                <Col md="4">
                    <Form.Label>Время:</Form.Label>
                    <Form.Control type="time"/>
                </Col>
                <Col md="4">
                    <Form.Label>Место:</Form.Label>
                    <Form.Select defaultValue="Стоя...">
                        <option>Стоя...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Select>
                </Col>
            </Row>
            <Button type="submit" variant="success" >Подтвердит-с</Button>{''}
        </Col>
        <Col md="4">
            <img className="garageImg img-thumbnail img-fluid" alt="Responsive" src={garJpeg}/>
        </Col>
    </Form>
)