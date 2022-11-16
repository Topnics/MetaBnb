import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HomeLogo from "../../Assets/images/logo_home.png"
import MetaLogo from "../../Assets/images/logo_meta.png"
import Modal from "../Modal/Modal"
import "./navbar.css"
import Menu from "../../Assets/images/menu_icon.png"
import Cancel from "../../Assets/images/x.png"


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const clearModal = () => {
    setModal(null);
  };


  return (
    <>
    
    {modal && <Modal onClear={clearModal} />}
    

    <div className="navbar">
      <div className='n-left'>
        <img src= {HomeLogo} alt="" /><span><img src={MetaLogo} alt="" /></span>
      </div>

      <button className="toggle" onClick={() => setToggleMenu(!toggleMenu)}><img src= {Menu} alt="menu icon"/></button>
      <div className={toggleMenu ? "menu active" : "menu"}>
      <div className="cancel" onClick={() => setToggleMenu(!toggleMenu)}><img src={Cancel} alt="" /></div>
      <div className="n-center">
        <div className="n-list">
          <ul style={{listStyleType:"none"}}>
              <NavLink onClick={() => setToggleMenu(!toggleMenu)} to="/" className="link"><li>Home</li></NavLink>
              <NavLink onClick={() => setToggleMenu(!toggleMenu)} to="/placetostay" className="link"><li>Place to stay</li></NavLink>
              <li className="link">NFTs</li>
              <li className="link">Community</li>
          </ul>
        </div>
      </div>
      <div className="nav-button">
      <button className="n-button" onClick={() => {
            setModal((prevState) => !prevState);
          }}>Connect Wallet</button>
      </div>
      
      </div>
      
    </div>
    </>
  )
}

export default Navbar