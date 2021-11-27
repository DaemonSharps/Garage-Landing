import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { LoginForm } from '../Forms/LoginForm'
import { BrownButton } from '../Buttons'

export const LoginModal = (props) =>{

    const [isLogin, setIsLogin] = useState(true);

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
                <BrownButton text={!isLogin ? "Входъ": "Регистрацъя"} onClick={() => setIsLogin(!isLogin)}/>
                <BrownButton light text={isLogin ? "Входъ": "Регистрацъя"} onClick={() =>{ window.location.href="/account"}}/>
            </Modal.Footer>
        </Modal>
    )
}
