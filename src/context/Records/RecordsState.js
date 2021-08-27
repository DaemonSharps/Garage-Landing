import React, { useReducer } from 'react';
import { GetRecords, SetRecord, SetCustomer } from '../../common/GarageAPI';
import { getLocaleISOString } from '../../common/helpers'
import { UPDATE_RECORDS, SHOW_LOADER } from './actionTypes'
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
        try 
        {
            var result = await GetRecords({
                date: getLocaleISOString(),
                page: 1,
                perPage: 10
            });
            dispatch({type:UPDATE_RECORDS, payload:result.data});
        } 
        catch (error) {
            dispatch({type:UPDATE_RECORDS, payload:state.recordsToday});
        }
    }

    const setRecord = async (record, customer) => {
        showLoader();
        try 
        {
            let setResult = await SetCustomer({
                firstName: customer.firstName,
                secondName: customer.secondName,
                lastName: customer.lastName,
                email: customer.email
            });

            let result = await SetRecord({
                customerId: +setResult.data.customer.id,
                date: record.date,
                time: record.time,
                placeNumber: +record.placeNumber,
                recordStateId: 1
            });
            state.recordsToday = state.recordsToday.filter( rec => rec.id !== result.data.record.id);
            state.recordsToday.push(result.data.record);
            dispatch({type:UPDATE_RECORDS, payload:state.recordsToday});
        } 
        catch (error)
        {
            dispatch({type:UPDATE_RECORDS, payload:state.recordsToday});
        }
    }
    
    return(
        <recordsContext.Provider value = 
        {{
            showLoader, getRecords, setRecord,
            loading: state.loading,
            count: state.customersToday,
            recordsToday: state.recordsToday,
            freePlaces: state.freePlaces
        }}>
            {children}
        </recordsContext.Provider>
    )
}