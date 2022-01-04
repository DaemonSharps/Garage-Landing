import axios from "axios";

const API_URL = process.env.REACT_APP_GARAGE_API;

const apiInstance = axios.create({
  baseURL:API_URL,
  responseType:'json',
  headers:{
    "Content-type": "application/json; charset=UTF-8"
  }
});

export function GetRecords(params){
  let stringParams = `date=${params.date}&page=${params.page}&PerPage=${params.perPage}`;
  stringParams += params.dateFrom !== null 
  ? `&dateFrom=${params.dateFrom}`
  : '';
  return apiInstance.get("Records?" + stringParams);
}

export function SetRecord(params){
  return apiInstance.post('Records', params);
}

export function SetCustomer(params){
  return apiInstance.post('Customers', params); 
}