import React, { useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Loader } from "../components/Loader";
import { PageSection } from "../components/PageSection"

export const Account = () =>{
    const [records, setRecords] = useState(Array(20).fill(0));

    const addRecords = (e) =>{
        const scroll = e.target.scrollHeight - e.target.scrollTop;
        const client = e.target.clientHeight;
        if(scroll - client < 10){
            setTimeout(() => setRecords([...records, ...Array(10).fill(1)]), 1000);
        }
    };
    return(
        <Container className="py-5">
            <PageSection>

            <h2 className="headerText"><div>кабинетъ</div></h2>
                <Row className="py-3">
                    <Col md="4">
                        <Card className="py-1 my-1">
                            <Card.Body className="text-end">
                                <p className="g-text-small">Смирнов Денис</p>
                                <p className="g-text-small">Алексеевич</p>
                                <p className="g-text-small">Почта: smirnov.god@gmail.com</p>
                            </Card.Body>
                                <Button variant="none" className="m-3 g-btn-brown-dark g-btn-text">Изменить</Button>
                        </Card>
                    </Col>
                    <Col md="8">
                            <Card className="p-3 my-1">
                                <Card.Title>Мои записи</Card.Title>
                            </Card>
                            <Row onScroll={addRecords} style={{overflow:'scroll', height:'750px'}}>
                                        <Col md="4">
                                            <Card className="my-3">
                                                <Card.Body className="g-text-small text-center">
                                                <Button variant="none" className="m-2 g-btn-brown-light g-btn-text">&#10010;</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        {records
                                        .map(_ => (
                                            <Col md="4">
                                            <Card className="my-3">
                                                <Card.Body className="g-text-small">
                                                    <p>Место: 1  Время: 22:00</p>
                                                    <Button variant="none" className="m-2 g-btn-brown-light g-btn-text">Изменить</Button>
                                                    <Button variant="none" className="m-2 g-btn-brown-dark g-btn-text">Оменить</Button>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                          ))}
                                          {records
                                        .map(_ => (
                                            <Col md="4">
                                            <Card className="my-3">
                                                <Card.Body className="g-text-small">
                                                    <p>Место: 1  Время: 22:00</p>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                          ))}
                                        <Loader/>
                            </Row>
                    </Col>
                </Row>
            </PageSection>
        </Container>
    )
}