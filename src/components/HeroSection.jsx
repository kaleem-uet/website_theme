import React from 'react'
import { Button } from 'react-bootstrap'
import './HeroScetion.css'
function HeroSection() {
  return (
     <div className='hero-container' >
         <video className='video' src={require('../videos/video-2.mp4')} autoPlay loop muted />
         <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Button variant="outline-dark" style={{color:"white",borderColor:"white",fontSize:18,fontFamily:"sans-serif"}}>GET STARTED</Button>
      <Button variant="outline-dark" style={{backgroundColor:"white",color:"black",fontSize:18,fontFamily:"sans-serif"}}>WATCH TRAILER <i className='far fa-play-circle' /></Button>{' '}    
      </div>
        
    </div>
  )
}


export default HeroSection