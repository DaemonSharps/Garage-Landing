import React, { useReducer } from 'react'
import { LOGIN, REGISTER, GET_CUSTOMER_RECORDS, GET_CUSTOMER } from './actionTypes'
import { userContext } from './userContext'
import { userReducer } from './userReducer'
import { getNewTokens, signUp, singIn, updateCustomer } from '../../common/TokenAPI'
import { getCookieValue, setCookie, isNullOrEmptyString } from '../../common/helpers'
import { parseToken, validateRefreshToken } from '../../common/authTokenHelpers'

export const UserState = ({children}) => {


    const initialState = {
        records: [],
        customer :{},
        loading: false,
        authorized: validateRefreshToken(getCookieValue("refreshToken"))
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

    const setTokenCookie = (refreshToken, acessToken) =>{
        let refreshPayload = parseToken(refreshToken);
        let acessPayload = parseToken(acessToken);
        setCookie("refreshToken", refreshToken, "lax", 0, refreshPayload.exp);
        setCookie("token", acessToken, "lax", 0, acessPayload.exp);
    }

    const login = (email, password, href = "/account") =>{
        singIn(email, password)
        .then(result => {
            setTokenCookie(result.data.refreshToken, result.data.token);
            let acessPayload = parseToken(result.data.token);
            dispatch({type:LOGIN, payload:{ user: acessPayload, token: result.data.refreshToken }});
            window.location.href = href;
        })
        .catch(e=>{
            console.log(e);
            logOut();
        });

    }

    const updateTokens = () =>{
        let token = getCookieValue("token");
        let refreshToken = getCookieValue("refreshToken");

        if(isNullOrEmptyString(token)){
            getNewTokens(refreshToken)
            .then(responce => {
                setTokenCookie(responce.data.refreshToken, responce.data.token);
                let acessPayload = parseToken(responce.data.token);
                dispatch({type:LOGIN, payload:{ user: acessPayload, token: responce.data.refreshToken }});
            })
            .catch(e =>{
                console.log(e);
                logOut();
            });
        }
        else{
            let payload = parseToken(token);
            dispatch({type:LOGIN, payload:{ user: payload, token: refreshToken }});
        }
    }

    const logOut = (href = "/") => {
        setCookie("refreshToken", "", "lax", 0, 0);
        setCookie("token", "", "lax", 0, 0);
        dispatch({type:LOGIN, payload:{ user: {}, token: "" }});
        window.location.href = href;
    }

    const register = (user, onError, href = "/account") =>{
        dispatch({type:REGISTER, payload:user});
        signUp(user.email, user.password, user.firstName, user.secondName, user.lastName)
        .then(responce => {
            setTokenCookie(responce.data.refreshToken, responce.data.token);
            let acessPayload = parseToken(responce.data.token);
            dispatch({type:LOGIN, payload:{ user: acessPayload, token: responce.data.refreshToken }});
            window.location.href = href;
        })
        .catch(e =>{
            console.log(e);
            if(e.response.status === 400){
                onError(e.response.data);
            }
            else{
                onError({ code:"UNKNOWN_ERROR", message:""});
            }
        });
        
    }

    const customerUpdate = (firstName, middleName, lastName, href = "/", onError = (e) => console.log(e)) => {
        let token = getCookieValue("token");
        updateCustomer(token, firstName, middleName, lastName)
        .then(result => {
            console.log(result);
            let token = result.data;
            let payload = parseToken(token);
            setCookie("token", token, "lax", 0, payload.exp);
            dispatch({type:LOGIN, payload:{ user: payload, token: getCookieValue("refreshToken") }});
            window.location.href = href;
        })
        .catch(e => {
            console.log(e);
            if(e.response?.status === 400){
                onError(e.response.data);
            }
            else{
                onError({ code:"UNKNOWN_ERROR", message:""});
            }
        })
    }

    const addRecords = (filter) => dispatch({type:GET_CUSTOMER_RECORDS, payload:filter});

    const getCustomer = (email) => dispatch({type:GET_CUSTOMER, payload:email});
    
    return(
        <userContext.Provider value = 
        {{
            login, register, addRecords, getCustomer, updateTokens, logOut, customerUpdate,
            loading: state.loading,
            customer: state.customer,
            records: state.records,
            authorized: state.authorized
        }}>
            {children}
        </userContext.Provider>
    )
}