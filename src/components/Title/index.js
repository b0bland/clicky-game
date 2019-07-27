import React from "react";
import "./style.css";

function Title(props) {
  return (

  <div className="row">

    <div className="col-4">
      <h1><b>Clicky Game</b></h1>
    </div>

    <div className="col-4">
      <h1 className="title">Click an image to begin!</h1>
    </div>

    <div className="col-4">
      <h1>Score: x | Top Score: x</h1>
    </div>

  </div>
  
  )
}

export default Title;

