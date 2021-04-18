import React from "react";
import ticketsImage from "./../img/tickets-image.png";

function Header(){
  return (
    <img src={ticketsImage} alt="An image of tickets" />
  );
}

export default Header;