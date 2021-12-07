import React from 'react'
import Banner from '../Banner'
import './Home.css'
import image from '../../images/BABCartoon.jpg'

export default function Home() {
    return (
        <section className="home">
            <Banner
            heading ="Welcome, Bowler!"
            img={image}
            description="Bowl After Bowl logo with cartoon alien Laurien and Spencer" />

        </section>
    )
}
