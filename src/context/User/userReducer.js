import { validateRefreshToken } from "../../common/authTokenHelpers";
import { GET_CUSTOMER_RECORDS, LOGIN, REGISTER } from "./actionTypes"

const handlers = {
    [LOGIN]: (state, { payload }) =>{
        let customer = {
            id: 0,
            email: payload.user.email,
            firstName: payload.user.given_name,
            secondName: payload.user.family_name,
            lastName: payload.user.middle_name
        };
        let authorized = validateRefreshToken(payload.token) || false;
        return({
            ...state,
            customer,
            authorized
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