import React, { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { LoginForm } from '../Forms/LoginForm'
import { BrownButton } from '../Buttons'
import { userContext } from '../../context/User/userContext'
import { isNullOrEmptyString } from '../../common/helpers'

export const LoginModal = (props) =>{

    const [mode, setMode] = useState(props.mode);
    const { login, register, customerUpdate } = useContext(userContext);
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
        let onError = (error) =>{
            setLoginData({...loginData, error});
        }
        if(mode === "login"){
            login(loginData.email, loginData.password);
        }
        else if(mode === "registration"){
            register(loginData, onError);
        }
        else if(mode === "update"){
                customerUpdate(loginData.firstName, loginData.secondName, loginData.lastName, "/account", onError);
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
                <Modal.Title className='g-btn-text' id = "login-registration-modal">
                    {mode === "update" ? "Изменить ФИО": "Входъ в кабинетъ"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isNullOrEmptyString(loginData.error.code)
                ? ''
                : <p className='invalid-feedback' style={{ display:'block'}}>{loginData.error.code + ": " + loginData.error.message}</p>}
                <LoginForm mode={mode} setFormData={setLoginData} initialData={loginData}/>
            </Modal.Body>
            <Modal.Footer>
                {mode !== "update" 
                ? <BrownButton text={mode !== "login" ? "Входъ": "Регистрацъя"} onClick={() => setMode(mode === "login" ? "registration" : "login")}/> 
                :''}
                <BrownButton light text={"Окъ"} onClick={onLogin}/> 
            </Modal.Footer> 
        </Modal>
    )
}
