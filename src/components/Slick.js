import React, { Component } from "react";
import { Col} from "react-bootstrap";
import Slider from "react-slick";
import garageImg from "../img/arseny.jpg";
import { PageSection } from "./PageSection";

export default class SlickSlider extends Component {

    constructor({images}){
        super()
        this.state = {
            settings : {
                dots: false,
                infinite: true,
                speed: 2000,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows : false
            },
            images : images
        }

    }
    render(){
        return(
            <PageSection>
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
        </PageSection>
        )
        
    }
}