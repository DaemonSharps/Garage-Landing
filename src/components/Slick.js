import React, { Component } from "react";
import { Col} from "react-bootstrap";
import Slider from "react-slick";

export default class SlickSlider extends Component {

    constructor({images}){
        super()
        this.state = {
            settings : {
                dots: true,
                infinite: true,
                speed: 2000,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows : false,
                centerPadding: "60px",
                centerMode: true,
                pauseOnHower: true,
                swipeToSlide: true
            },
            images : images
        }

    }
    render(){
        return(
            <Col className="py-5">
                <Slider {...this.state.settings}>
                    {this.state.images
                    .map(image =>
                    (
                        <div className="garageImg text-center">
                            <img className="m-auto" alt="text" src = {image}/>
                        </div>
                    ))}
                </Slider>
            </Col>
        )
        
    }
}