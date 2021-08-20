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

    const services = [
        {
            key:0,
            header:"Вытрезвитель",
            body:"Описание"
        },
        {
            key:1,
            header:"Психологическая помощь",
            body:"Описание"
        },
        {
            key:3,
            header:"Банкеты",
            body:"Описание"
        },
        {
            key:4,
            header:"Совещания",
            body:"Описание"
        },
        {
            key:5,
            header:"Музей",
            body:"Описание"
        },
        {
            key:6,
            header:"Литургия",
            body:"Описание"
        }
    ]
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