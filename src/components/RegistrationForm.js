import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap"
import garJpeg from "../img/places.webp"
import { PageSection } from "./PageSection"
import { recordsContext } from "../context/Records/recordsContext"
import { getLocaleISOString } from "../common/helpers"

export class RegistrationForm extends React.Component{

    static contextType = recordsContext;

    constructor(props){
        super(props);
        this.state = {
            placeNumber: 0,
            date:getLocaleISOString().substr(0,10),
            time:`${new Date().toLocaleTimeString().substr(0,5)}`,
            invalids:{
            },
            submitDisabled : true,
            submitText : "Подтвердить"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        const invalids = this.state.invalids;
        invalids[name] = this.checkValid(target);

        this.setState({submitDisabled: false, submitText:"Подтвердить"});
        for(var key in invalids){
            if(invalids[key] === true){
                this.setState({submitDisabled: true, submitText:"Подтвердить"});
            }
        }

        this.setState({
          [name]: value,
          invalids: invalids
        });
    }

    checkValid(target){
        switch (target.type){
            case "email":
                if(!/.+@.+\..+/i.test(target.value)){
                    return true;
                }
                break
            default:
                return target.value.length === 0;
        }
        
        return false;
    }

    handleSubmit(event){
        event.preventDefault();

        this.setState({submitDisabled: true, submitText:"Загрузка..."});
        
        this.context.setRecord(
        {
            date:this.state.date,
            time:this.state.time,
            placeNumber:+this.state.placeNumber
        },
        {
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            lastName: this.state.lastName,
            email: this.state.email
        });

        this.setState({submitDisabled: false, submitText:"Подтвердить"});
    }

    FormControlValidated = ({name, type, placeholder, errorMessage = "Вы ничего не ввели", children}) =>(
        <Form.Group>
            {children}
            <Form.Control 
            isInvalid={this.state.invalids[name]}
            name = {name}
            type = {type}
            className = "mb-2 g-text-small" 
            placeholder = {placeholder} 
            onChange={this.handleInputChange}/>
            <Form.Control.Feedback type="invalid">
                {errorMessage}
            </Form.Control.Feedback>
        </Form.Group>
    )
    render(){
        return(
        <PageSection>
            <Form className="row my-3 d-flex justify-content-center pt-5" onSubmit={this.handleSubmit} noValidate>
                <h2 className="headerText"><div>Запись на приемъ</div></h2>
            <Col md="10 text-start">
                <this.FormControlValidated
                 name ="email"
                 type="email" 
                 placeholder="ваша@почта.ру"
                 errorMessage="Почта введена некорректно"/>
                 <this.FormControlValidated
                 name ="firstName"
                 type="text" 
                 placeholder="Ваше имя"/>
                 <this.FormControlValidated
                 name ="secondName"
                 type="text" 
                 placeholder="Ваша фамилия"/>
                 <this.FormControlValidated
                 name ="lastName"
                 type="text" 
                 placeholder="Ваше отчество"/>
                <Row className="mb-3">
                    <Col md="4">
                        <Form.Label className="g-text-small">Дата:</Form.Label>
                        <Form.Control 
                        className="g-text-small"
                        name = "date" 
                        type="date" 
                        defaultValue={this.state.date} 
                        onChange={this.handleInputChange}/>
                    </Col>
                    <Col md="4">
                        <Form.Label className="g-text-small">Время:</Form.Label>
                        <Form.Control 
                        className="g-text-small"
                        name = "time" 
                        type="time" 
                        defaultValue={this.state.time}
                        onChange={this.handleInputChange}/>
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
                        <Form.Control.Feedback type="invalid">Ошибочка</Form.Control.Feedback>
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