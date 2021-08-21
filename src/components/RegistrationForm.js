import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import garJpeg from "../img/garage.jpg";
import { SetCustomer, SetRecord } from "./GarageAPI";

export class RegistrationForm extends React.Component{

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
            isClickButton : false,
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
        form.setState({isClickButton: true, submitText:"Загрузка..."});
          SetCustomer({
                firstName: this.state.firstName,
                secondName: this.state.secondName,
                lastName: this.state.lastName,
                email: this.state.email
            })
          .then(function(response) {
            console.log('Ответ сервера успешно получен!');
            console.log(response.data);
            SetRecord({
                customerId: +response.data.customer.id,
                date:form.state.date,
                time:form.state.time,
                placeNumber:+form.state.placeNumber,
                recordStateId:1
            })
            .then(function(response) {
              console.log('Ответ сервера успешно получен!');
              console.log(response.data);
              const state = response.data.action === "get" ? "обновлена" : "создана";
              alert(`Запись успешно ${state}, номер записи ${response.data.record.id} \nОдновите страницу чтобы ее увидеть.`);

              form.setState({isClickButton: false, submitText:"Подтвердить"});
            })
            .catch(function(error) {
              console.log(error);
            });
          })
          .catch(function(error) {
            console.log(error);
          });
    }

    render(){
        return(
            <Form className="row my-3 d-flex justify-content-center pt-5" onSubmit={this.handleSubmit}>
        <h2 className="text-center mb-3 secondaryText-black">Запись на приемъ</h2>
        <Col md="10">
            <Form.Control name = "email" type="email" className="mb-2" placeholder="your@mail.com" onChange={this.handleInputChange}/>
            <Form.Control name = "firstName" type="text" className="mb-2" placeholder="Имя"  onChange={this.handleInputChange}/>
            <Form.Control name = "secondName" type="text" className="mb-2" placeholder="Фамилия"  onChange={this.handleInputChange}/>
            <Form.Control name = "lastName" type="text" className="mb-2" placeholder="Отчество"  onChange={this.handleInputChange}/>
            <Row className="mb-3">
                <Col md="4">
                    <Form.Label>Дата:</Form.Label>
                    <Form.Control name = "date" type="date"  onChange={this.handleInputChange}/>
                </Col>
                <Col md="4">
                    <Form.Label>Время:</Form.Label>
                    <Form.Control name = "time" type="time"  onChange={this.handleInputChange}/>
                </Col>
                <Col md="4">
                    <Form.Label>Место:</Form.Label>
                    <Form.Select name = "placeNumber" defaultValue="Стоя..." onChange={this.handleInputChange}>
                        <option value ="0" >Стоя...</option>
                        <option value ="1" >1</option>
                        <option value ="2" >2</option>
                        <option value ="3" >3</option>
                        <option value ="4" >4</option>
                        <option value ="5" >5</option>
                    </Form.Select>
                </Col>
            </Row>
            <Button type="submit" variant="success" disabled ={this.state.isClickButton}>{this.state.submitText}</Button>
        </Col>
        <Col md="2">
            <img className="garageImg img-thumbnail img-fluid" alt="Responsive" src={garJpeg}/>
        </Col>
    </Form>
        )
    }
}