import React from 'react'
import Button from '../../../components/button'
import './style.css'
import img from '../../../Assets/images/live-illustration.jpg'
const LiveStream = () => {
    return (
        <div id='live-main'>
            <div id='text-left'>
                <div className="text-inner">
                    <h1>
                        Free live, interactive tutoring sessions with your friends
                </h1>
                    <p>
                        Join live interactive classes with gamified peer learning features. Study with the best teachers and compete and socialise with your friends.
                </p>
                    <Button title='Sign Up For Free' />
                </div>
            </div>
            <div id='img-right'>
                <img src={img} alt='image' />
            </div>
        </div>
    )
}

export default LiveStream
