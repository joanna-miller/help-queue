import React from "react";
import ticketsImage from "./../img/tickets-image.png";

function Header(){
  return (
    <img src={ticketsImage} alt="tickets" />
  );
}

export default Header;