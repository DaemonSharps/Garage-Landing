import React, { useContext, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { PageSection } from './PageSection';
import { Record } from './Record';
import { recordsContext } from '../context/Records/recordsContext';
import { Loader } from './Loader';
import { RecordFilter } from './RecordFilter';
import { getLocaleISOString } from '../common/helpers';


export const RecordList = () => {

    const { recordsToday, loading } = useContext(recordsContext);
    const {getRecords} = useContext(recordsContext);

    useEffect(() =>{
        getRecords({
            dateTo: getLocaleISOString(), 
            dateFrom: null,
            page: 1,
            perPage: 10})
        // eslint-disable-next-line
    },[]);
    
        return(
            <PageSection>
                <Col md="12">
                <h2 className="headerText"><div>Поиск записей</div></h2>
                <RecordFilter/>
                <Row>
                    {loading
                    ?<Loader/>
                    :recordsToday.filter(record => record.recordStateId === 1).map(rec => (
                      <Record record = {rec}/>
                    ))}
                    {recordsToday.length === 0 && !loading
                    ?<h3>Записей по данному фильтру не обнаружено. Попробуйте другие параметры!</h3>
                    :''}
                </Row>
                </Col>
            </PageSection>
        )
    
}