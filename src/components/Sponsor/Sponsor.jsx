import React from 'react'
import MbToken from "../../Assets/images/token_logo.png"
import Metamask from "../../Assets/images/metamask_logo.png"
import Opensea from "../../Assets/images/opensea.png"
import "./sponsor.css"


const Sponsor = () => {
  return (
    <div className="sponsor-wrapper">
        <img className='sponsor-logo' src={MbToken} alt="" />
        <img className='sponsor-logo' src={Metamask} alt="" />
        <img className='sponsor-logo' src={Opensea} alt="" />
    </div>
  )
}

export default Sponsor