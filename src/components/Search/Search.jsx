import React from 'react'
import Setting from "../../Assets/images/setting-5.png"
import "./search.css"

const Search = () => {
  return (
    <div className="search">
        <div className="f-search">
            <p className='p-search'>Restuarant</p>
            <p className='p-search'>Cottage</p>
            <p className='p-search'>Castle</p>
            <p className='p-search'>Fastanstic city</p>
        </div>
        <div className="s-search">
            <p className='p-search'>Beach</p>
            <p className='p-search'>Carbins</p>
            <p className='p-search'>Off-grid</p>
            <p className='p-search'>Farm</p>
        </div>
        <div className="location">
            <p>location</p>
            <img src={Setting} alt="" />
        </div>
    </div>
  )
}

export default Search