import React, { useReducer } from 'react';
import { GetRecords } from '../../common/GarageAPI';
import { getLocaleISOString } from '../../common/helpers'
import { GET_RECORDS, SHOW_LOADER } from './actionTypes'
import { recordsContext } from './recordsContext';
import { recordsReducer } from './recordsReducer';

export const RecordsState = ({children}) => {

    const initialState = {
        recordsToday: [],
        freePlaces: [1,2,3,4,5],
        customersToday: 0,
        loading: false
    };

    const [state, dispatch] = useReducer(recordsReducer, initialState);

    const showLoader = () => dispatch({type:SHOW_LOADER});

    const getRecords = async () => {
        showLoader();
        try {
            var result = await GetRecords({
                date: getLocaleISOString(),
                page:1,
                perPage:10
            });
            console.log(result.data)
            dispatch({type:GET_RECORDS, payload:result.data});
        } catch (error) {
            dispatch({type:GET_RECORDS, payload:state.recordsToday});
        }
    }
    
    return(
        <recordsContext.Provider value = 
        {{
            showLoader, getRecords,
            loading: state.loading,
            count: state.customersToday,
            recordsToday: state.recordsToday,
            freePlaces: state.freePlaces
        }}>
            {children}
        </recordsContext.Provider>
    )
}