import React from 'react'
import Card from "../Card/Card";
import StayOne from "../../Assets/images/stay_1.png";
import StayTwo from "../../Assets/images/stay_2.png";
import StayThree from "../../Assets/images/stay_3.png";
import StayFour from "../../Assets/images/stay_4.png";
import StayFive from "../../Assets/images/stay_5.png";
import StaySix from "../../Assets/images/stay_6.png";
import StaySeven from "../../Assets/images/stay_7.png";
import StayEight from "../../Assets/images/stay_8.png";
import StayNine from "../../Assets/images/stay_9.png";
import StayTen from "../../Assets/images/stay_10.png";
import StayEleven from "../../Assets/images/stay_11.png";
import StayTwelve from "../../Assets/images/stay_12.png";
import StayThirt from "../../Assets/images/stay_13.png";
import StayFort from "../../Assets/images/stay_14.png";
import StayFifth from "../../Assets/images/stay_15.png";
import StaySixt from "../../Assets/images/stay_16.png";
import "./place.css"



const Place = () => {
  return (
    <div className="place">
        <div className="card-inspo">
        <Card image={StayOne} />
        <Card image={StayTwo} />
        <Card image={StayThree} />
        <Card image={StayFour} />
        <Card image={StayFive} />
        <Card image={StaySix} />
        <Card image={StaySeven} />
        <Card image={StayEight} />
        <Card image={StayNine} />
        <Card image={StayTen} />
        <Card image={StayEleven} />
        <Card image={StayTwelve} />
        <Card image={StayThirt} />
        <Card image={StayFort} />
        <Card image={StayFifth} />
        <Card image={StaySixt} />
      </div>
    </div>
  )
}

export default Place