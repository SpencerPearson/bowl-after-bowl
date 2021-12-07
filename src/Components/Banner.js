import React from 'react'

export default function Banner(props) {
    return (
        <article className="banner">
            <img src={props.img} alt={props.description} />
            <h2 className="text-info">{props.heading}</h2>
        </article>
    )
}
