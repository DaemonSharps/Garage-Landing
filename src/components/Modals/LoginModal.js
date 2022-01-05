import React, { useContext, useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { LoginForm } from '../Forms/LoginForm'
import { BrownButton } from '../Buttons'
import { userContext } from '../../context/User/userContext'
import { isNullOrEmptyString } from '../../common/helpers'

export const LoginModal = (props) =>{

    const [isLogin, setIsLogin] = useState(true);
    const { login, register } = useContext(userContext);
    const [loginData, setLoginData] = useState({
        email:"",
        password:"",
        firstName:"",
        lastName:"",
        secondName:"",
        error:{
            code:"",
            message:""
        }
    });

    const onLogin = () =>{
        if(isLogin){
            login(loginData.email, loginData.password);
        }
        else{
            let onError = (error) =>{
                setLoginData({...loginData, error});
            }
            register(loginData, onError);
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
                {isNullOrEmptyString(loginData.error.code)
                ? ''
                : <p className='invalid-feedback' style={{ display:'block'}}>{loginData.error.code + ": " + loginData.error.message}</p>}
                <LoginForm isLogin={isLogin} setFormData={setLoginData} initialData={loginData}/>
            </Modal.Body>
            <Modal.Footer>
                <BrownButton text={!isLogin ? "Входъ": "Регистрацъя"} onClick={() => setIsLogin(!isLogin)}/>
                <BrownButton light text={isLogin ? "Входъ": "Регистрацъя"} onClick={onLogin}/>
            </Modal.Footer>
        </Modal>
    )
}
