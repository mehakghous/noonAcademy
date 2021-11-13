import React from 'react'
import img1 from '../../../Assets/images/hero-boy1.png'
import img2 from '../../../Assets/images/hero-boy2.png'
import img3 from '../../../Assets/images/hero-girl1.png'
import img4 from '../../../Assets/images/hero-girl2.png'
import Button from '../../../components/button'
import './style.css'
const Mission = ({title,}) => {
    return (
        <div id='mission-main'>
            <div id='mission'>
               <div className='img-divs'>
                <img src={img3} alt="hero-girl1"/>
               <img src={img1} alt="hero-boy1"/>
               </div>
               <div id='mission-text'>
                   <h1>The social learning company</h1>
                   <p>Our mission is to radically change the way people learn. We empower students to learn from top teachers in groups with their friends</p>
               </div>
                <div className='img-divs'>
                <img src={img2} alt="hero-boy2"/>
                <img src={img4} alt="hero-girl2"/>
                </div>

            </div>
            <div id='sign-up'>Sign up now and study all subjects for free <Button title='sign Up for free'/></div>
        </div>
    )
}

export default Mission