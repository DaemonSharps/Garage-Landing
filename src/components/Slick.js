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
                speed: 2000,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
            },
            images : images
        }

    }
    render(){
        return(
            <Container className="text-center py-5">
            <Col>
                <Slider {...this.state.settings}>
                    {this.state.images
                    .map(image =>
                    (
                        <div className="garageImg bg-white text-center">
                            <img className="m-auto" alt="text" src = {garageImg}/>
                        </div>
                    ))}
                </Slider>
            </Col>
        </Container>
        )
        
    }
}