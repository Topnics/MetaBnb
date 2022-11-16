import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Inspo from '../Inspiration/Inspo'
import Navbar from '../Navbar/Navbar'
import Sponsor from '../Sponsor/Sponsor'
import "./home.css"

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Hero/>
        <Sponsor/>
        <Inspo/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home