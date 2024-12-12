import React from "react";
import {useState} from "react";



//create your first component

const Home = () => {
	
	let [puchado, prendido] = useState();

  const clickeado = (color) => {
    prendido(color);
  };

  return (
    <div className="position-absolute top-0 end-50">
	<div className="poste"></div>
      <div className="semaforo">
        <div
          className={
            "bola redLight " + (puchado == "red" ? "prende" : "lightRed")
          }
          onClick={() => clickeado("red")}
        ></div>
        <div
          className={
            "bola yellowLight " + (puchado == "yellow" ? "prende" : "lightYellow")
          }
          onClick={() => clickeado("yellow")}
        ></div>
        <div
          className={
            "bola greenLight " + (puchado == "green" ? "prende" : "lightGreen")
          }
          onClick={() => clickeado("green")}
        ></div>

      </div>
	  </div>
  );
}


export default Home;

