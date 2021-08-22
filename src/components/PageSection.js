import React from 'react';
import { Container } from 'react-bootstrap';

export class PageSection extends React.Component{

    render(){
        return(
            <section className="page-section">
                <Container className="text-center">
                    {this.props.children}
                </Container>
            </section>
        )
    }
    
}