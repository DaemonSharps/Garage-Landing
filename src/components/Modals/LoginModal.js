import React, { Fragment, useEffect, useState } from 'react'
import { Modal, Button, Col } from 'react-bootstrap'
import { LoginForm } from '../Forms/LoginForm'
import { useHistory } from 'react-router-dom'

export const LoginModal = (props, context) =>{

    const [isLogin, setIsLogin] = useState(true);

    const history = useHistory();

    return(
        <Modal
        {...props}
        size = "sm"
        aria-labelledby="login-registration-modal"
        centered
        >
            <Modal.Header closeButton> 
                <Modal.Title id = "login-registration-modal">
                    Входъ в кабинетъ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginForm isLogin={isLogin}/>
            </Modal.Body>
            <Modal.Footer>
                <Button className="g-btn-text" onClick={() => setIsLogin(!isLogin)}>{!isLogin ? "Входъ": "Регистрацъя"}</Button>
                <a className="btn g-btn-brown-dark g-btn-text" href="/account">{isLogin ? "Входъ": "Регистрацъя"}</a>
            </Modal.Footer>
        </Modal>
    )
}
