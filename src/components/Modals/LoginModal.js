import React, { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { LoginForm } from '../Forms/LoginForm'
import { BrownButton } from '../Buttons'
import { userContext } from '../../context/User/userContext'

export const LoginModal = (props) =>{

    const [isLogin, setIsLogin] = useState(true);
    const { login, register } = useContext(userContext);
    const [loginData, setLoginData] = useState({
        email:"",
        password:"",
        firstName:"",
        lastName:"",
        secondName:""
    });

    const onLogin = () =>{
        if(isLogin){
            login(loginData.email, loginData.password);
        }
        else{
            register(loginData);
        }
    }
    
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
                <LoginForm isLogin={isLogin} setFormData={setLoginData}/>
            </Modal.Body>
            <Modal.Footer>
                <BrownButton text={!isLogin ? "Входъ": "Регистрацъя"} onClick={() => setIsLogin(!isLogin)}/>
                <BrownButton light text={isLogin ? "Входъ": "Регистрацъя"} onClick={onLogin}/>
            </Modal.Footer>
        </Modal>
    )
}
