import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className="about">
        <div className="about_left">
            <img src={about} className='about_img' />
            <img src={play} className='play_icon' />
        </div>

        <div className="about_right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leades Today</h2>
            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

        </div>
    </div>
  )
}

export default About