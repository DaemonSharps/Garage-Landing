import React from 'react';
import { Card } from 'react-bootstrap';

export const Record = ({record}) =>{

    const customer = record.customer;

    const fullName = customer.secondName + " " + customer.firstName + " " + customer.lastName;

    return(
        <Card key={record.id} className="my-2">
            <Card.Header>
                {fullName}
            </Card.Header>
            <Card.Body>
                <p>Место: {record.placeNumber}  Время: {record.time + " " + record.date.substr(0,10)}</p>
            </Card.Body>
        </Card>
    )
}