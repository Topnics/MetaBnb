import React from 'react'
import "./about.css"
import AboutImage from "../../Assets/images/about.png"

const About = () => {
  return (
    <div className="about-wrapper">
        <div className="l-about">
            <h3 className='h-about'>Metabnb NFTs</h3>

            <div className="p-about">
                <p>Discover our NFT gift cards collection. Loyal</p>
                <p>customers gets amazing gift cards which are</p>
                <p>traded as NFTS. These NFTs gives our customer</p>
                <p>access to loads of our exclusive services</p>
            </div>

            <div className="b-about">
                <button className='about-button'>Learn more</button>
            </div>            
        </div>
        <div className="r-about">
            <img className="about-image" src={AboutImage} alt="" />
        </div>
    </div>

  )
}

export default About
