import React from 'react'
import Features from './features'
import Figures from './values'
import GroupLearning from './grouplearn'
import LiveStream from './livesessions'
import Mission from './mission'
import Footer from '../../layout/footer'


const HomeView = () => {
    return (
        <div>
          <Mission/>
          <LiveStream/>
          <Features/>
          <GroupLearning/>
          <Figures/> 
          <Footer/>
        </div>
    )
}

export default HomeView
