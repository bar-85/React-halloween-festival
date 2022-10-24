import React from "react";
import { CardStyled } from "./Card.styles";

const Card = ({picture}) => {
  return (
    <CardStyled > 
      <img src={picture} alt="halloween" />
    </CardStyled>
  );
};

export default Card;