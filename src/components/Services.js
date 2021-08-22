import React from 'react'
import { Accordion} from 'react-bootstrap'
import { PageSection } from './PageSection'

export const Services = ({serviseList}) =>(
    <PageSection className="section-bg-image">
        <h2 className="headerText-light"><div>Услуги</div></h2>
        <Accordion>
            {serviseList.map(service => (
                <Accordion.Item eventKey={service.key}>
                    <Accordion.Header className="g-text-small">{service.header}</Accordion.Header>
                    <Accordion.Body className="g-text-small">{service.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            
        </Accordion>
    </PageSection>
)