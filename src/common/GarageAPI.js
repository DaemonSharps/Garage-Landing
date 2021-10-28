import axios from "axios";

const API_URL = "https://garagewebapi.somee.com/api/";

const apiInstance = axios.create({
  baseURL:API_URL,
  responseType:'json',
  headers:{
    "Content-type": "application/json; charset=UTF-8"
  }
});

export async function GetRecords(params){
  let stringParams = `date=${params.date}&page=${params.page}&PerPage=${params.perPage}`;
  stringParams += params.dateFrom !== null 
  ? `&dateFrom=${params.dateFrom}`
  : '';
  return await apiInstance.get("Records?" + stringParams);
}

export async function SetRecord(params){
  return await apiInstance.post('Records',params);
}

export async function SetCustomer(params){
  return await apiInstance.post('Customers',params);
}