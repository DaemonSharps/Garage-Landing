import React from 'react'
import { InputGroup, Form, Button, Col, Row} from 'react-bootstrap';
import { getLocaleISOString } from '../../common/helpers';

export class RecordFilter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...props.filter,
            setFilter: props.setFilter,
            loading: props.loading,
            searchRecords: props.searchRecords,
            invalids:{}
        };
        this.state.dateFrom = getLocaleISOString().substr(0, 10);
            
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
        var date = +new Date(dates.date) || +new Date(this.state.date);
        if(dateFrom > date){
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
        this.state.setFilter({
            date: this.state.date,
            dateFrom : this.state.dateFrom,
            page: this.state.page,
            perPage: this.state.perPage
        });
        this.state.searchRecords(this.state);
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
                <Form.Control isInvalid={this.state.invalids.date} name="date" type="date" defaultValue={this.state.date} onChange={this.handleInputChange}/>
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
                disabled={this.state.loading || this.state.submitDisabled}
                >
                    Поиск
                </Button>
            </Col>
        </Row>
    </Form>
    )}
}