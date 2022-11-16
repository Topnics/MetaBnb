import React from 'react'
import "./footer.css"
import Mb from "../../Assets/images/mb.png"
import Fb from "../../Assets/images/fb.png"
import Ig from "../../Assets/images/ig.png"
import Twitter from "../../Assets/images/twitter.png"
import Copyright from "../../Assets/images/copyright.png"

const Footer = () => {
  return (
    <div className="footer">
        <div className="f-logo">
            <div className="mblogo">
                <img src={Mb} alt="" />
            </div>
           
        
            <div className="socials">
                <img src={Fb} alt="" />
                <img src={Ig} alt="" />
                <img src={Twitter} alt="" />
            </div>
            <div className="copyryt">
                <img src={Copyright} alt="" />
                <p c-para>2022 Metabnb</p>
            </div>
        </div>

        <div className="community">
            <p className="fp-head">Community</p>
            <p className='fp-sub'>NFT</p>
            <p className='fp-sub'>Tokens</p>
            <p className='fp-sub'>Landlords</p>
            <p className='fp-sub'>Discord</p>
        </div>

        <div className="places">
            <p className="fp-head">Places</p>
            <p className='fp-sub'>Castle</p>
            <p className='fp-sub'>Farms</p>
            <p className='fp-sub'>Beach</p>
            <p className='fp-sub'>Learn more</p>
        </div>

        <div className="aboutUs">
            <p className="fp-head">About us</p>
            <p className='fp-sub'>Roadmap</p>
            <p className='fp-sub'>Creators</p>
            <p className='fp-sub'>Career</p>
            <p className='fp-sub'>Contact us</p>
        </div>


    </div>
  )
}

export default Footer