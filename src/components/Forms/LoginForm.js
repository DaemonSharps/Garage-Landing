import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export const LoginForm = (props) =>{

    const [isLogin, setIsLogin] = useState(props.isLogin);
    const [data, setData] = useState({});

    const onChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        data[name] = value;
        setData(data);
        props.setFormData(data);
    }
    useEffect(() => {
        setIsLogin(props.isLogin);
    }, [props.isLogin]);

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
                        onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Секрътный ключъ</Form.Label>
                        <Form.Control
                        name = "password"
                        type = "password"
                        placeholder = "Секрiтный ключъ"
                        onChange={onChange}
                        />
                    </Form.Group>
                    </Col>
                </Row>
                {isLogin
                ?''
                :<Row>
                <Col>
                <Form.Group className="mb-3">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                    name = "firstName"
                    type = "text"
                    placeholder = "Имя"
                    onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                    name = "secondName"
                    type = "text"
                    placeholder = "Фамилия"
                    onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control
                    name = "lastName"
                    type = "text"
                    placeholder = "Отчество"
                    onChange={onChange}
                    />
                </Form.Group>
                </Col>
                </Row>}
            </Form>
    )
}