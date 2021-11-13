import React from 'react'
import Button from '../../../components/button/index'
import img from '../../../Assets/images/group-learning-image.jpg'

const GroupLearning = () => {
    return (
        <div id='live-main'>
            <div id='img-right'>
                <img src={img} alt='image' />
            </div>
            <div id='text-left'>
                <div className="text-inner">
                    <h1>
                    Group learning, redefined
                </h1>
                    <p>
                    Never get bored when studying again. Feel empowered, connected, curious, and excited when you learn with like-minded peers.
                </p>
                    <Button title='Sign Up For Free' />
                </div>
            </div>
        </div>
    )
}

export default GroupLearning
