import React, { useReducer } from 'react'
import { LOGIN, REGISTER, GET_CUSTOMER_RECORDS, GET_CUSTOMER } from './actionTypes'
import { userContext } from './userContext'
import { userReducer } from './userReducer'

export const UserState = ({children}) => {

    const initialState = {
        records: [],
        customer :{
            id: 2,
            firstName: "",
            secondName: "",
            lastName: "",
            email: ""
        },
        loading: false,
        authorized:localStorage.authorized === "true"
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

    const login = (email, password) =>{
        dispatch({type:LOGIN, payload:{email,password}});
        localStorage.setItem("authorized", true);
    }

    const register = (formData) => dispatch({type:REGISTER, payload:formData});

    const addRecords = (filter) => dispatch({type:GET_CUSTOMER_RECORDS, payload:filter});

    const getCustomer = (email) => dispatch({type:GET_CUSTOMER, payload:email});
    
    return(
        <userContext.Provider value = 
        {{
            login, register, addRecords, getCustomer,
            loading: state.loading,
            customer: state.customer,
            records: state.records,
            authorized: state.authorized
        }}>
            {children}
        </userContext.Provider>
    )
}