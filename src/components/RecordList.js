import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { PageSection } from './PageSection'
import { Record } from './Record'
import { Loader } from './Loader'
import { RecordFilter } from './Forms/RecordFilter'

export const RecordList = () => {

    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);
        return(
            <PageSection>
                <Col md="12">
                <h2 className="headerText"><div>Поиск записей</div></h2>
                <RecordFilter setLoading = {setLoading} setRecords={setRecords}/>
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