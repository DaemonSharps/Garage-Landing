import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { PageSection } from './PageSection';
import { Record } from './Record';
import { Loader } from './Loader';
import { RecordFilter } from './RecordFilter';
import { getLocaleISOString } from '../common/helpers';
import { GetRecords } from '../common/GarageAPI';


export const RecordList = () => {

    const [records, setRecords] = useState([]);
    const [filter, setFilter] = useState({
        date: getLocaleISOString().substr(0, 10), 
        dateFrom: null,
        page: 1,
        perPage: 10});
    const [loading, setLoading] = useState(false);
    

    const searchRecords = async (filter) =>{
            setLoading(true);
            try{
                let records = await GetRecords(filter);
                setRecords(records.data);
            }
            catch{
                setRecords([]);
            }
            finally{
                setLoading(false);
            }
    }
    useEffect(() =>{
        searchRecords(filter)
        // eslint-disable-next-line
    },[]);
    
        return(
            <PageSection>
                <Col md="12">
                <h2 className="headerText"><div>Поиск записей</div></h2>
                <RecordFilter setFilter = {setFilter} filter = {filter} loading = {loading} searchRecords = {searchRecords}/>
                <Row>
                    {loading
                    ?<Loader/>
                    :records.filter(record => record.recordStateId === 1).map(rec => (
                      <Record record = {rec}/>
                    ))}
                    {records.length === 0 && !loading
                    ?<h3>Записей по данному фильтру не обнаружено. Попробуйте другие параметры!</h3>
                    :''}
                </Row>
                </Col>
            </PageSection>
        )
    
}