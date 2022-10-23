import React from "react";
import "./Card.css";

const Card = ({emoji, color}) => {
  return (
    <div className="card" style={{borderColor: 'orange'}}> 
      <img src={emoji} alt="" />
      <button className="c-button">Bilety</button>
    </div>
  );
};

export default Card;