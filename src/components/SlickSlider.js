import React, { Component } from "react";
import { Col} from "react-bootstrap";
import Slider from "react-slick";
import { PageSection } from "./PageSection";
import images from "../common/images"

export default class SlickSlider extends Component {

    constructor(){
        super();

        const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows : false,
            centerMode: true,
            centerPadding: '60px',
            swipeToSlide: true,
            adaptiveHeight: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        };

        this.state = {
            settings: settings,
            images : images
        }

    }
    render(){
        return(
            <PageSection>
                <Col className="py-5">
                    <Slider {...this.state.settings}>
                        {this.state.images
                        .map((image, id) =>
                        (
                            <img key = {id} alt="text" src = {image}/>
                        ))}
                    </Slider>
                </Col>
            </PageSection>
        )
        
    }
}