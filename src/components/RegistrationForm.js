import React from "react";
import { Button, Col, Form} from "react-bootstrap"
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
            invalids:{},
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
                <h2 className="headerText"><div>Регистрация</div></h2>
            <Col md="12 text-start">
                <this.FormControlValidated
                 name ="email"
                 type="email" 
                 placeholder="ваша-с почта"
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
                 <this.FormControlValidated
                 name ="lastName"
                 type="password" 
                 placeholder="Секрiтный ключъ"/>
                <Button 
                type="submit" 
                variant="none" 
                className="g-btn-brown-dark g-btn-text" 
                disabled = {this.state.submitDisabled}
                >
                    {this.state.submitText}
                </Button>
            </Col>
        </Form>
        </PageSection>
        )
    }
}