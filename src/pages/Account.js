import React, { Fragment, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { PageSection } from "../components/PageSection"
import { Record } from "../components/Record"

export const Account = () =>{
    const [records, setRecords] = useState(Array(20).fill(0));

    const onRecordScroll = () =>{
            setRecords([...records, ...Array(100).fill(1)]);
    };
    return(
        <Container className="py-5">
            <PageSection>

            <h2 className="headerText"><div>кабинетъ</div></h2>
                <Row className="py-3">
                    <Col md="4">
                        <Card className="py-3">
                            <Card.Body className="text-start">
                                <p className="g-text-small">Фамилия: Смирнов</p>
                                <p className="g-text-small">Имя: Денис</p>
                                <p className="g-text-small">Отчество: Алексеевич</p>
                                <p className="g-text-small">Почта: smirnov.god@gmail.com</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="8">
                            <Card className="p-3">
                                <Card.Title>Мои записи</Card.Title>
                            </Card>
                            <Row scroll onScroll={onRecordScroll}>
                                        {records
                                        .map(_ => (
                                            <Col md="4">
                                            <Card className="my-2">
                                                <Card.Body className="g-text-small">
                                                    <p>Место: 1  Время: 22:00</p>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Button>Удалить</Button>
                                                </Card.Footer>
                                            </Card>
                                            </Col>
                                          ))}
                                        <Button onClick={onRecordScroll}>Еще записи</Button>
                            </Row>
                    </Col>
                </Row>
            </PageSection>
        </Container>
    )
}