import { GET_RECORDS, SHOW_LOADER } from "./actionTypes";

const handlers = {
    [GET_RECORDS]: (state, { payload }) => {

        const count = payload.length || 0;
        const nonFreePlaces = payload.map(record => record.placeNumber);
        const freePlaces = state.freePlaces.filter(place => !nonFreePlaces.includes(place));
        return({...state,
            recordsToday: payload,
            freePlaces: freePlaces,
            customersToday: count,
            loading: false
        });
    },
    [SHOW_LOADER]: state => ({...state, loading: true}),
    DEFAULT: state => state
}

export const recordsReducer = (state, action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}