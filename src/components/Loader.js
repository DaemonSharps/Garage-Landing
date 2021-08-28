import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () =>(
    <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
)