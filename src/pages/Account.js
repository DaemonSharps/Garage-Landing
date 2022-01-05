import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { BrownButton } from "../components/Buttons"
import { Loader } from "../components/Loader"
import { PageSection } from "../components/PageSection"
import { userContext } from "../context/User/userContext"
import { LoginModal } from "../components/Modals/LoginModal"

export class Account extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            records: Array(12).fill(0),
            customer:{},
            showUpdateModal: false
        }
        this.setShowUpdateModal = this.setShowUpdateModal.bind(this);
    }
    static contextType = userContext;

    componentDidMount = () => this.context.updateTokens();

    onRecordScroll = (e) =>{
        const scroll = e.target.scrollHeight - e.target.scrollTop;
        const client = e.target.clientHeight;
        if(scroll - client < 10){
            setTimeout(() => this.setState({records:[...this.state.records, ...Array(10).fill(1)]}), 1000);
        }
    };

    setShowUpdateModal = (isShow) => this.setState({showUpdateModal: isShow});

    render(){
        return(
            <Container className="py-5">
                <LoginModal mode="update" onHide = {this.setShowUpdateModal} show = {this.state.showUpdateModal}/>
                <PageSection>
                <h2 className="headerText"><div>кабинетъ</div></h2>
                    <Row className="py-3">
                        <Col md="4">
                            <Card className="py-1 my-1">
                                <Card.Body className="text-end">
                                    <p className="g-text-small">{this.context.customer.secondName} {this.context.customer.firstName}</p>
                                    <p className="g-text-small">{this.context.customer.lastName}</p>
                                    <p className="g-text-small">Почта: {this.context.customer.email}</p>
                                </Card.Body>
                                <BrownButton text="Изменить ФИО" light onClick={() => this.setShowUpdateModal(true)}/>
                                <BrownButton text="Выйти" light onClick={() =>this.context.logOut()}/>
                            </Card>
                        </Col>
                        <Col md="8">
                                <Card className="p-3 my-1">
                                    <p className="g-text-small">Мои записи</p>
                                </Card>
                                <Row onScroll={this.onRecordScroll} style={{overflow:'scroll', maxHeight:'750px'}}>
                                            <Col md="4">
                                                <Card className="my-3">
                                                    <Card.Body className="g-text-small text-center">
                                                        <BrownButton text="&#10010;"/>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            {this.state.records
                                            .map(_ => (
                                                <Col md="4">
                                                <Card className="my-3">
                                                    <Card.Body className="g-text-small">
                                                        <Col>
                                                            <Row><p>Дата 21 12 2021</p></Row>
                                                            <Row><p>Место: 1  Время: 22:00</p></Row>
                                                        </Col>
                                                        <BrownButton text="&#9998;" light/>
                                                        <BrownButton text="&#10006;"/>
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                              ))}
                                            {this.state.records.length > 11
                                            ?<Loader/>
                                            :''}
                                </Row>
                        </Col>
                    </Row>
                </PageSection>
            </Container>
        )
    }
}