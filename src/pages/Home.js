import React from 'react'
import { Fragment } from 'react'
import { AboutBlock } from '../components/AboutBlock'
import { YandexMap } from '../components/MapYandex'
import { PrimaryImage } from '../components/PrimaryImage'
import { Services } from '../components/Services'
import SlickSlider from '../components/Slick'

export const Home = () =>{
    
    const images = new Array(5)
    .fill('')
    .map((_,i) => ({index:i}));

    const services = new Array(5)
    .fill('')
    .map((_,i) => ({
        key:i,
        header:"Заголовок",
        body:"Описание"
    }))
    return(
        <Fragment>
            <PrimaryImage/>
            <AboutBlock/>
            <SlickSlider images = {images}/>
            <Services serviseList = {services}/>
            <YandexMap/>
        </Fragment>
    )
}