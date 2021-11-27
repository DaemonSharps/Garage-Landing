import React from 'react'
import { InputGroup, Form, Button, Col, Row} from 'react-bootstrap'
import { getLocaleISOString } from '../../common/helpers'
import { GetRecords } from '../../common/GarageAPI'
import { BrownButton } from '../Buttons'

export class RecordFilter extends React.Component{

    constructor(props){
        super(props);
        var initDate = getLocaleISOString().substr(0, 10);
        this.state = {
            date: initDate, 
            dateFrom: initDate,
            page: 1,
            perPage: 10,
            setRecords:props.setRecords,
            submitDisabled:false,
            loading:false,
            invalids:{}
        };
        let setLoad = (value) =>{
            this.setState({loading:value});
            props.setLoading(value);
        }
        this.state.setLoading = setLoad;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => this.searchRecords(this.state);

    searchRecords = async (filter) =>{
        try{
            this.state.setLoading(true);
            let records = await GetRecords(filter);
            this.state.setRecords(records.data);
        }
        catch{
            this.state.setRecords([]);
        }
        finally{
            this.state.setLoading(false);
        }
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
        this.setState({
            date: this.state.date,
            dateFrom : this.state.dateFrom,
            page: this.state.page,
            perPage: this.state.perPage
        });
        this.searchRecords(this.state);
    }
    
    render(){
    return(
    <Form className="align-content-center pb-5 pt-3" onSubmit={this.handleSubmit}>
        <Row>
            <Col md="5" className="my-2">
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
            <Col md="5" className="my-2">
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
            <Col md="2">
                <BrownButton 
                text="Поискъ"
                type="submit"
                light
                disabled={this.state.loading || this.state.submitDisabled}
                />
            </Col>
        </Row>
    </Form>
    )}
}