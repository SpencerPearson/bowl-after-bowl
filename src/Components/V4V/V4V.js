import React from 'react'
import Banner from '../Banner'
import { Accordion, Container, Col, Row } from 'react-bootstrap'

import './V4V.css'
import image from '../../images/money-sprout-2-wide.jpg'
import backgroundImage from '../../images/money.jpg'
import AboutV4V from './AboutV4V'

export default function V4V() {
    return (
        <section className="value4Value" style={{ 
                                            backgroundImage: `url(${backgroundImage})`,
                                            width: '100%'
                                            }}>
            <Banner
                img={image}
                description="Young plant sprouting from a cup of coins"
                heading="Value 4 Value" />
            <AboutV4V />

        </section>
    )
}
