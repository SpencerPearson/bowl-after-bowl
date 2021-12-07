import React from 'react'
import './NotFound.css'
import image from '../images/BABCartoonCrop.jpg'

export default function NotFound() {
    return (
        <div className="notFound">
            <img src={image} alt="Resource not found...you must be lost, fren!" />
            <h1>Error 420: Page Not Here, Man</h1>
            
        </div>
    )
}
