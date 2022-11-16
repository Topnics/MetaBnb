import React from 'react'
import Stars from "../../Assets/images/stars.png"
import "./card.css"


const Card = ({image}) => {
  return (
    <div className="card">
        <img src={image} alt="" />
        <div className="desert">
            <p className='p-desert'>Desert king</p>
            <p className='s-desert'>1MBT per night</p>
        </div>
        <div className="distance">
            <p className='p-distance'>2345km away</p>
            <p className='s-distance'>available for 2weeks stay</p>
        </div>
        <div className="star">
            <img src={Stars} alt="" />
        </div>
    </div>
  )
}

export default Card