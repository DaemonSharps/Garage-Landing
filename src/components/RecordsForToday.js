import React from 'react'
import { Col, Container } from 'react-bootstrap';
import { GetRecords } from './GarageAPI';
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
            <Container className="d-flex justify-content-center">
                <Col md="9">
                <h2 className="secondaryText-black">Сегодня придут</h2>
                    {this.state.recordList.filter(record => record.recordStateId === 1).map(rec => (
                        <Record record = {rec}/>
                    ))}
                </Col>
            </Container>
        )
    }
    
}