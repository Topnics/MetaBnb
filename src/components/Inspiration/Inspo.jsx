import React from "react";
import Card from "../Card/Card";
import InspoOne from "../../Assets/images/inspo_1.png";
import InspoTwo from "../../Assets/images/inspo_2.png";
import InspoThree from "../../Assets/images/inspo_3.png";
import InspoFour from "../../Assets/images/inspo_4.png";
import InspoFive from "../../Assets/images/inspo_5.png";
import InspoSix from "../../Assets/images/inspo_6.png";
import InspoSeven from "../../Assets/images/inspo_7.png";
import InspoEight from "../../Assets/images/inspo_8.png";
import "./inspo.css"

const Inspo = () => {
  return (
    <div className="inspo">
      <div className="h-inspo"><h1>Inspiration for your next adventure</h1></div>
      <div className="card-inspo">
        <Card image={InspoOne} />
        <Card image={InspoTwo} />
        <Card image={InspoThree} />
        <Card image={InspoFour} />
        <Card image={InspoFive} />
        <Card image={InspoSix} />
        <Card image={InspoSeven} />
        <Card image={InspoEight} />
      </div>
    </div>
  );
};

export default Inspo;
