import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export const LoginForm = (props) =>{

    const [formState, setProfileState] = useState(props);

    useEffect(() => {
        setProfileState(props);
    }, [props]);

        return(
            <Form>
                <Row>
                    <Col className="pt-2">
                    <Form.Group className="mb-3">
                        <Form.Label>Ваша-с почта</Form.Label>
                        <Form.Control
                        name = "email"
                        type = "email"
                        placeholder = "Введите адрессъ почтампта"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Секрътный ключъ</Form.Label>
                        <Form.Control
                        name = "password"
                        type = "password"
                        placeholder = "Секрiтный ключъ"
                        />
                    </Form.Group>
                    </Col>
                </Row>
                 <Row className={formState.isLogin? "d-none":''}>
                    <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                        name = "firstName"
                        type = "text"
                        placeholder = "Имя"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                        name = "secondName"
                        type = "text"
                        placeholder = "Фамилия"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control
                        name = "lastName"
                        type = "text"
                        placeholder = "Отчество"
                        />
                    </Form.Group>
                    </Col>
                </Row>
            </Form>
    )
}