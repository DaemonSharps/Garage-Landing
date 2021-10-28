import { render } from '@testing-library/react';
import React, { useContext, useState } from 'react'
import { InputGroup, Form, Button, Col, Row} from 'react-bootstrap';
import { getLocaleISOString } from '../common/helpers';
import { recordsContext } from '../context/Records/recordsContext';

export class RecordFilter extends React.Component{

    static contextType = recordsContext;

    constructor(props){
        super(props);
        this.state = {
            dateTo: getLocaleISOString().substr(0,10),
            dateFrom: getLocaleISOString().substr(0, 10),
            page: 1,
            perPage: 10,
            invalids:{}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(name === "page" && +value < 1){
            value = 1;
            event.target.value = "1";
        }
        this.checkDates({
            [name]:value
        });
        this.setState({
          [name]: value
        });
    }

    checkDates(dates){
        var dateFrom = +new Date(dates.dateFrom) || +new Date(this.state.dateFrom);
        var dateTo = +new Date(dates.dateTo) || +new Date(this.state.dateTo);
        if(dateFrom > dateTo){
            this.setState({
                invalids:{
                    date: true
                },
                submitDisabled: true
            });
        }            
        else{
            this.setState({
                invalids:{
                    date: false
                },
                submitDisabled: false
            });
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.context.getRecords({
            dateTo: this.state.dateTo,
            dateFrom: this.state.dateFrom,
            perPage: this.state.perPage,
            page: this.state.page});
    }
    
    render(){
    return(
    <Form className="align-content-center pb-5 pt-3" onSubmit={this.handleSubmit}>
        <Row>
            <Col md="5">
            <InputGroup>
                <InputGroup.Text>Дата от:</InputGroup.Text>
                <Form.Control isInvalid={this.state.invalids.date} name="dateFrom" type="date" defaultValue={this.state.dateFrom} onChange={this.handleInputChange}/>
                <InputGroup.Text>Дата до:</InputGroup.Text>
                <Form.Control isInvalid={this.state.invalids.date} name="dateTo" type="date" defaultValue={this.state.dateTo} onChange={this.handleInputChange}/>
                <Form.Control.Feedback type="invalid">
                {this.state.invalids.date ? "Дата 'до' не может быть больше даты 'от'" : ''}
                </Form.Control.Feedback>
            </InputGroup>
            </Col>
            <Col md="5">
            <InputGroup>
                <InputGroup.Text>Записей на страницу:</InputGroup.Text>
                <Form.Select name="perPage" defaultValue={this.state.perPage} onChange={this.handleInputChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                </Form.Select>
                <InputGroup.Text>Страница:</InputGroup.Text>
                <Form.Control name="page" type="number" defaultValue={this.state.page} onChange={this.handleInputChange}/>
            </InputGroup>
            </Col>
            <Col md='2'>
                <Button 
                type="submit" 
                variant="none" 
                className="g-btn-brown-dark g-btn-text"
                disabled={this.context.loading || this.state.submitDisabled}
                >
                    Поиск
                </Button>
            </Col>
        </Row>
    </Form>
    )}
}