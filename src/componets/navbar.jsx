import React from 'react'
import BnBLogo from '../images/airbnb.png'


function Navbar(){
  return(
    <div className='navbar--header'>
      <img src={BnBLogo} alt="" className='navbar--logo'/>
    </div>
  )
}

export default Navbar