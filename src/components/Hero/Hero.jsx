import React from 'react'
import HeroOne from "../../Assets/images/hero_1.png"
import HeroTwo from "../../Assets/images/hero_2.png"
import HeroThree from "../../Assets/images/hero_3.png"
import HeroFour from "../../Assets/images/hero_4.png"
import "./hero.css"


const Hero = () => {
  return (
    <div className="hero-wrapper">
        <div className="l-hero">
            <div className="head">
                <h1 className='h-hero'>Rent a <span className='span'>Place</span> away from</h1> 
                <h1 className='h-hero'><span className='span'>Home</span> in the <span className='span'>Metaverse</span></h1>
            
            </div>
            <div className="para">
            <p className='p-hero'>we provide access to luxury and affordable houses</p> 
            <p className='p-hero'>in the metaverse, get a chance to turn your</p> 
            <p className='p-hero'>imagination to reality at your comfort zone</p>
            </div>
            
            <div className="h-search">
                
                <form>
                    <input className='input' type="text" name='' value="Search for location" disabled></input>
                </form>
                
                <div className="hero_button">
                    <button className='h_button'>Search</button>
                </div>
            </div>
        </div>
        <div className="r-hero">
            <div className="hOne">
                <img className="hero-image" src={HeroOne} alt="" />
                <img src={HeroTwo} alt="" />
            </div>
            <div className="hTwo">
                <img src={HeroThree} alt="" />
                <img src={HeroFour} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero