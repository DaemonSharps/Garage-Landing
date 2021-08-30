import React from 'react'
import { Fragment } from 'react'
import { AboutBlock } from '../components/AboutBlock'
import { YandexMap } from '../components/MapYandex'
import { PrimaryImage } from '../components/PrimaryImage'
import { Services } from '../components/Services'
import SlickSlider from '../components/SlickSlider'

export const Home = () =>{

    const services = [
        {
            key:0,
            header:"Вытрезвитель",
            body:"Быстро и легко избавиться он боли в голове поможет только баночка свежайшего холодного пива!"
        },
        {
            key:1,
            header:"Психологическая помощь",
            body:"Вы можете выговориться о самых гнетущих проблемах вашей жизни. " 
            +"И наши профессиональные специалисты помогут вам разобраться в тяжелом жизненном пути."
        },
        {
            key:3,
            header:"Банкеты",
            body:"Нужно провести мероприятие? Приходите в гараж и даже большой компании всегда найтется место и стол."
        },
        {
            key:4,
            header:"Совещания",
            body:"Обсудите в тишине и покое важнейшие проблемы политики, бизнеса и экономики."
        },
        {
            key:5,
            header:"Музей",
            body:"Помимо всего прочего в гараже вы найдете интереснейшие экспонаты времен 19 века."
        },
        {
            key:6,
            header:"Литургия",
            body:"Каждое воскресенье проводим богослужения. Вы можете поучавствовать в хоре наших послушников или вручить храму подаяние."
        }
    ]
    return(
        <Fragment>
            <PrimaryImage/>
            <AboutBlock/>
            <Services serviseList = {services}/>
            <SlickSlider/>
            <YandexMap/>
        </Fragment>
    )
}