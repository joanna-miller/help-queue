import React from "react";
import Header from "./Header";
import TicketList from "./TicketControl"

function App(){
  return (
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;