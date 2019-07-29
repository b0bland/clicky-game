import React from "react";
import "./style.css";

function Title(props) {
  return (

  <div className="row">

    <div className="col-4">
      <h1><b>Pokeball Click Game</b></h1>
    </div>

    <div className="col-4">
      <h1 className="title">{props.message}</h1>
    </div>

    <div className="col-4">
      <h1>Score: {props.score} | Top Score: {props.highScore}</h1>
    </div>

  </div>
  
  )
}

export default Title;

