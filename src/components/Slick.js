import React, { Component } from "react";
import { Fragment } from "react";
import { Col} from "react-bootstrap";
import Slider from "react-slick";

export default class SlickSlider extends Component {

    getSettings(slidesToShow) {
        return {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows : false,
            centerPadding: "60px",
            centerMode: true,
            pauseOnHower: true,
            swipeToSlide: true
        }
    }
    constructor({images}){
        super();

        const settings = this.getSettings(5);

        const settingsMdBlock = this.getSettings(2);

        this.state = {
            settings : settings,
            settingsMd : settingsMdBlock,
            images : images
        }

    }
    render(){
        return(
            <Fragment>
                <Col className="py-5 d-none d-md-block">
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
                <Col className="py-5 d-md-none">
                    <Slider {...this.state.settingsMd}>
                        {this.state.images
                        .map(image =>
                        (
                            <div className="garageImg-small text-center">
                                <img className="m-auto" alt="text" src = {image}/>
                            </div>
                        ))}
                    </Slider>
                </Col>
            </Fragment>
           
        )
        
    }
}