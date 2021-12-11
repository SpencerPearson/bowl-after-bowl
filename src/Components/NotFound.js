import React from 'react'
import './NotFound.css'
import image from '../images/cheech-and-chong.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
    return (
        <div className="notFound">
            <img src={image} alt="Resource not found...you must be lost as Cheech and Chong, fren!" />
            <div className='inner-text'>
                <h1 className='text-success'><FontAwesomeIcon icon={faCannabis} />&ensp;Error 420&ensp;<FontAwesomeIcon icon={faCannabis} /></h1>
                <h2 className='text-success'>Page not here, man...</h2>
                <h3><a href="/" className='text-primary'>TAKE ME BACK HOME</a></h3>
            </div>
        </div>
    )
}
