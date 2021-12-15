import React from "react"
import ReactAudioPlayer from "react-audio-player"
import Marquee from 'react-fast-marquee'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCannabis } from '@fortawesome/free-solid-svg-icons'
import './LiveStream.css'

export default function LiveStream(props) {
	return (
		<div className="liveStrip">
            <Marquee gradient={false} speed={50}>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <ReactAudioPlayer
					src='http://stream.bowlafterbowl.com:8000/bowlafterbowl'
					controls
				/>
                <p className="liveMarquee">&emsp;LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
            </Marquee>
		</div>
	)
}
