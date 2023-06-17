import React from 'react'

import Star from '../images/star.png'
function Card(props){
  let badgeText
  if(props.openSpots===0){
    badgeText="SOLD OUT"
  }else if(props.location==="Online"){
    badgeText="Online"
  }


  return(
    <div className='card--main'>
      <div className='card--picture'>
        <img src={require(`../images/${props.coverImg}`)} alt="" className='card--pic'/>
        {badgeText && <div className='card--pic-ava'>{badgeText}</div>}
      </div>
      <div className='card--rating'>
        <img src={Star} alt="" className='card--star'/>
        <span className='card--rating-points'>
          {props.stats.rating}
        </span>
        <span className='card--rating-quantity'>
          ({props.stats.reviewCount}) &#183;
        </span >
        <span className='card--rating-quantity'>
          {props.location}
        </span>
      </div>
      <div className='card--info'>
        <p className='card--topic'>
          {props.title}
        </p>
        <p className='card--price'>
          <span className='bold'>From ${props.price}</span>/ person
        </p>
      </div>
    </div>
  )
}

export default Card