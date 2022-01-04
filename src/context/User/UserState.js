import React, { useReducer } from 'react'
import { LOGIN, REGISTER, GET_CUSTOMER_RECORDS, GET_CUSTOMER } from './actionTypes'
import { userContext } from './userContext'
import { userReducer } from './userReducer'
import { getNewTokens, singIn } from '../../common/TokenAPI'
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

    const login = (email, password) =>{
        singIn(email, password)
        .then(result => {
            setTokenCookie(result.data.refreshToken, result.data.token);
            let acessPayload = parseToken(result.data.token);
            dispatch({type:LOGIN, payload:{ user: acessPayload, token: result.data.refreshToken }});
        })
        .catch(e=>{
            console.log(e);
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
            });
        }
        else{
            let payload = parseToken(token);
            dispatch({type:LOGIN, payload:{ user: payload, token: refreshToken }});
        }
    }

    const register = (formData) => dispatch({type:REGISTER, payload:formData});

    const addRecords = (filter) => dispatch({type:GET_CUSTOMER_RECORDS, payload:filter});

    const getCustomer = (email) => dispatch({type:GET_CUSTOMER, payload:email});
    
    return(
        <userContext.Provider value = 
        {{
            login, register, addRecords, getCustomer, updateTokens,
            loading: state.loading,
            customer: state.customer,
            records: state.records,
            authorized: state.authorized
        }}>
            {children}
        </userContext.Provider>
    )
}