import React from 'react'
import Marquee from 'react-fast-marquee'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'
import './LiveStream.css'

export default function LiveStream(props) {
  return (
    <section className='liveHeader'>
      <div className='liveStrip'>
        <Marquee gradient={false} speed={50}>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
          <p className='liveMarquee'>
            LISTEN LIVE &ensp;
            <FontAwesomeIcon icon={faCannabis} />
            &emsp;
          </p>
        </Marquee>
      </div>
      <div className='player text-center'>
        <iframe
          title='AzuraCast stream'
          src='https://stream.bowlafterbowl.com/public/bowlafterbowl/embed?theme=dark'
          frameborder='0'
          allowtransparency='true'
          style={{ maxWidth: '100%', minHeight: '150px', border: 0, margin: 'auto' }}></iframe>
      </div>
    </section>
  )
}
