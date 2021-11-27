import React, { useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { BrownButton } from "../components/Buttons";
import { Loader } from "../components/Loader";
import { PageSection } from "../components/PageSection"

export const Account = () =>{
    const [records, setRecords] = useState(Array(12).fill(0));

    const onRecordScroll = (e) =>{
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
                            <BrownButton text="Изменить" light/>
                        </Card>
                    </Col>
                    <Col md="8">
                            <Card className="p-3 my-1">
                                <Card.Title>Мои записи</Card.Title>
                            </Card>
                            <Row onScroll={onRecordScroll} style={{overflow:'scroll', maxHeight:'750px'}}>
                                        <Col md="4">
                                            <Card className="my-3">
                                                <Card.Body className="g-text-small text-center">
                                                    <BrownButton text="&#10010;"/>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        {records
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
                                        {records.length > 11
                                        ?<Loader/>
                                        :''}
                            </Row>
                    </Col>
                </Row>
            </PageSection>
        </Container>
    )
}