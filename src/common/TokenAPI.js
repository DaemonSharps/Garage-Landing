import axios from "axios"

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