import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import garJpeg from "../img/places.webp";
import { PageSection } from "./PageSection";
import { recordsContext } from "../context/Records/recordsContext";

export class RegistrationForm extends React.Component{

    static contextType = recordsContext;

    constructor(props){
        super(props);
        this.state = {
            fisrtName:'',
            secondName:'',
            lastName:'',
            eMail:'',
            placeNumber:'',
            date:'',
            time:'',
            customer:{},
            submitDisabled : false,
            submitText : "Подтвердить"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        
        const form = this;
        form.setState({submitDisabled: true, submitText:"Загрузка..."});
          
        form.context.setRecord(
        {
            date:form.state.date,
            time:form.state.time,
            placeNumber:+form.state.placeNumber
        },
        {
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            lastName: this.state.lastName,
            email: this.state.email
        });

        form.setState({submitDisabled: false, submitText:"Подтвердить"});
          
    }

    render(){
        return(
        <PageSection>
            <Form className="row my-3 d-flex justify-content-center pt-5" onSubmit={this.handleSubmit}>
                <h2 className="headerText"><div>Запись на приемъ</div></h2>
            <Col md="10 text-start">
                <Form.Control name = "email" type="email" className="mb-2 g-text-small" placeholder="your@mail.com" onChange={this.handleInputChange}/>
                <Form.Control name = "firstName" type="text" className="mb-2 g-text-small" placeholder="Имя"  onChange={this.handleInputChange}/>
                <Form.Control name = "secondName" type="text" className="mb-2 g-text-small" placeholder="Фамилия"  onChange={this.handleInputChange}/>
                <Form.Control name = "lastName" type="text" className="mb-2 g-text-small" placeholder="Отчество"  onChange={this.handleInputChange}/>
                <Row className="mb-3">
                    <Col md="4">
                        <Form.Label className="g-text-small">Дата:</Form.Label>
                        <Form.Control className="g-text-small" name = "date" type="date"  onChange={this.handleInputChange}/>
                    </Col>
                    <Col md="4">
                        <Form.Label className="g-text-small">Время:</Form.Label>
                        <Form.Control className="g-text-small" name = "time" type="time"  onChange={this.handleInputChange}/>
                    </Col>
                    <Col md="4">
                        <Form.Label className="g-text-small">Место:</Form.Label>
                        <Form.Select 
                        className="g-text-small" 
                        name = "placeNumber" 
                        defaultValue="0" 
                        onChange={this.handleInputChange} 
                        disabled = {this.context.loading}
                        >
                        <option value ="0" >{this.context.loading 
                        ? 'Загрузка мест...'
                        : 'Стоя...'}</option>
                            {this.context.freePlaces.map(place => (
                                <option key = {place} value = {place} >{place}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
                <Button 
                type="submit" 
                variant="none" 
                className="g-btn-brown-dark g-btn-text" 
                disabled = {this.state.submitDisabled}
                >
                    {this.state.submitText}
                </Button>
            </Col>
            <Col md="2">
                <img className="garageImg img-thumbnail img-fluid" alt="Responsive" src={garJpeg}/>
            </Col>
        </Form>
        </PageSection>
        )
    }
}