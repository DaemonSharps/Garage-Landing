import React from 'react'
import { Col } from 'react-bootstrap';
import { GetRecords } from './GarageAPI';
import { PageSection } from './PageSection';
import { Record } from './Record';


export class RecordsForToday extends React.Component{
    state ={
        recordList: []
    }

    dateToday = new Date().toISOString().substr(0,10);

    componentDidMount() {
        GetRecords({
            date:this.dateToday,
            page:1,
            perPage:10
        })
          .then(res => {
            const recordList = res.data;
            this.setState({ recordList });
          })          
      }

    render(){
        return(
            <PageSection>
                <Col md="12">
                <h2 className="headerText"><div>Сегодня придут</div></h2>
                    {this.state.recordList.filter(record => record.recordStateId === 1).map(rec => (
                        <Record record = {rec}/>
                    ))}
                </Col>
            </PageSection>
        )
    }
    
}