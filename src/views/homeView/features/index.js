import React from 'react'
import panel2 from '../../../Assets/images/panel2.png'
import './style.css'
const Features = () => {
    return (
        <div id='features-main'>
            <div className='panels panel1' >
                <img src={panel2} />
                <h1>Ace your exams</h1>
                <p>
                    Everything you need to ace it, here to study as you need it
                </p>
            </div>
            <div className='panels panel2'>
                <img src={panel2} />
                <h1>Challenge your friends</h1>
                <p>
                Master essential concepts using fun, interactive features
                </p>
            </div>
            <div className='panels panel3'>
                <img src={panel2} />
                <h1>Your questions answered</h1>
                <p>
                    Everything you need to ace it, here to study as you need it
                </p>
            </div>

        </div>
    )
}

export default Features
