import React, { useContext } from 'react'
import { Col } from 'react-bootstrap';
import { PageSection } from './PageSection';
import { Record } from './Record';
import { recordsContext } from '../context/Records/recordsContext';
import { Loader } from './Loader';


export const RecordsForToday = () => {

    const { recordsToday, loading } = useContext(recordsContext);

        return(
            <PageSection>
                <Col md="12">
                <h2 className="headerText"><div>Сегодня придут</div></h2>
                    {loading
                    ?<Loader/>
                    :recordsToday.filter(record => record.recordStateId === 1).map(rec => (
                      <Record record = {rec}/>
                    ))}
                    {recordsToday.length === 0 && !loading
                    ?<h3>Записей на сегодня нет. Будте первым!</h3>
                    :''}
                </Col>
            </PageSection>
        )
    
}