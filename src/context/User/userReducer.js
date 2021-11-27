import { GET_CUSTOMER_RECORDS, LOGIN, REGISTER } from "./actionTypes"
const users = [
    {
        id:1,
        email:1,
        firstName:"Тест",
        secondName:"Первый",
        lastName:"Отчество_1"
    },
    {
        id:2,
        email:2,
        firstName:"Тест",
        secondName:"Второй",
        lastName:"Отчество_2"
    }
]
const handlers = {
    [LOGIN]: (state, { payload }) =>{
        let customer = users.filter(u => u.email === payload.email)[0];
        return({
            ...state,
            authorized:true,
            customer
        });
    },
    [REGISTER]: (state, { payload }) =>{
        state.records.push(payload);
        state.authorized = true;
        return(state);
    },
    [GET_CUSTOMER_RECORDS]: (state) => {
        state.records = Array(12).fill(0);
        return(state);
    },
    DEFAULT: state => state
}

export const userReducer = (state, action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}