import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Place from '../Place/Place'
import Search from '../Search/Search'
import "./stay.css"

const Stay = () => {
  return (
      <div className="stay">
        <Navbar />
        <Search />
        <Place />
        <div className="s-footer">
          <Footer />
        </div>
        

      </div>
  )
}

export default Stay