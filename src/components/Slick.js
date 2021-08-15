import React, { Component } from "react";
import { Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import garageImg from "../img/arseny.jpg";

export default class SlickSlider extends Component {

    constructor({images}){
        super()
        this.state = {
            settings : {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1
            },
            images : images
        }

    }
    render(){
        return(
            <Container className="text-center my-5">
            <Col>
                <Slider {...this.state.settings}>
                    {this.state.images
                    .map(image =>
                    (
                        <div className="garageImg bg-black">
                            <img src = {garageImg}/>
                        </div>
                    ))}
                </Slider>
            </Col>
        </Container>
        )
        
    }
}