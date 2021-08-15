import React from 'react'
import { Fragment } from 'react'
import { YandexMap } from '../components/MapYandex'
import { PrimaryImage } from '../components/PrimaryImage'
import { Services } from '../components/Services'

export const Home = () =>{
    return(
        <Fragment>
            <PrimaryImage/>
            <Services/>
            <YandexMap/>
        </Fragment>
    )
}