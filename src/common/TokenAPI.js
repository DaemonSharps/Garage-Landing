import axios from "axios"
import { isNullOrEmptyString } from "./helpers";

const APP_URL = process.env.REACT_APP_AUTH_API_URL;

const tokenApi = axios.create({
    baseURL:APP_URL,
    responseType:'json',
    headers:{
      "Content-type": "application/json; charset=UTF-8"
    }
});

export function singIn(email, password){
    return tokenApi.post("token", null, {
        params:{
            email,
            password
        }
    });
}

export function getNewTokens(refreshToken){
    return tokenApi.put("token", null,{
        params:{
            token: refreshToken
        }});
}

export function signUp(email, password, firstName, lastName, middleName){
    return tokenApi.post("user", null,{
        params:{
            email,
            password,
            firstName,
            lastName,
            middleName
        }
    })
}

export function updateCustomer(token, firstName = null, middleName = null, lastName = null, login = null){
    let params = {
        firstName: isNullOrEmptyString(firstName) ? null : firstName,
        middleName: isNullOrEmptyString(middleName) ? null : middleName,
        lastName: isNullOrEmptyString(lastName) ? null : lastName,
        login: isNullOrEmptyString(login) ? null : login

    };
    return tokenApi.put("user", null, {
        headers:{
            Accept: "application/json",
            Authorization: "Bearer " + token
        },
        params: params
    });
}