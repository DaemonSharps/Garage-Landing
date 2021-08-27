import React from 'react';
import { Container } from 'react-bootstrap';

export const PageSection = ({className, children}) =>(
            <section className={`page-section ${className || ''}`}>
                <Container className="text-center">
                    {children}
                </Container>
            </section>
)