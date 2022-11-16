import React from 'react'
import Metmask from '../../Assets/images/metamask.png';
import Wallet from '../../Assets/images/connect.png';
import X from '../../Assets/images/x.png';
import Arrow from "../../Assets/images/arrow.png"
import "./modal.css"


const Modal = ({ onClear }) => {
  return (
    <div className="backdrop" onClick={onClear}>
        <div className="modal" onClick={onClear}>
        <div className="headd">
          <h3>Connect Wallet</h3>
          <img src={X} alt='close' onClick={onClear} />
        </div>
        <div className="details">
          <small>Choose your preferred wallet</small>
          <div className="wallet">
            <div className="side">
              <div className="meta">
                <img src={Metmask} alt='metamask icon' />
                <p>Metamask</p>
              </div>
              <img src={Arrow} alt='vector' />
            </div>
            <div className="side">
              <div className="wal">
                <img src={Wallet} alt='metamask icon' />
                <p>WalletConnect</p>
              </div>
              <img src={Arrow} alt='vector' />
            </div>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default Modal