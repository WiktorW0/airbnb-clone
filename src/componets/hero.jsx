import React from 'react'
import PhotoGrid from '../images/grid.png'

function Hero(){
  return(
    <div className='hero--main'>
      <div className='hero--photogrid'>
        <img src={PhotoGrid} alt="" className='hero--grid'/>
      </div>
      <div className='hero--info'>
        <h1>
          Online Experiences
        </h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts - all without leaving home
        </p>
      </div>
    </div>
  )
}

export default Hero