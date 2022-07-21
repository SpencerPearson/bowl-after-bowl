import React from "react"
import ReactAudioPlayer from "react-audio-player"
import Marquee from 'react-fast-marquee'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCannabis } from '@fortawesome/free-solid-svg-icons'
import './LiveStream.css'

export default function LiveStream(props) {
	return (
		<section className='liveHeader'>
        <div className="liveStrip">
            <Marquee gradient={false} speed={50}>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
                <p className="liveMarquee">LISTEN LIVE &ensp;<FontAwesomeIcon icon={faCannabis} />&emsp;</p>
            </Marquee>
		</div>
        <div className='player'>
            <ReactAudioPlayer src='https://stream.bowlafterbowl.com/listen/bowlafterbowl/stream.mp3' controls />
        </div>
        </section>
	)
}
