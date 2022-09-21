import React from "react";
import main from "./img/main.png";
import './App.css';
import Donate from './Donate';

function HomePage() {
  return (
    <section id="body">
        <div class="container1">
            <img src={main} alt="Picture not Found"/>
        </div>
        <div class="container2">
        <h2>Help the Flood Victims of Pakistan...</h2>
        <p>
          Torrential monsoon rains have triggered the most severe flooding in
          Pakistan's recent history, washing away villages and leaving around
          3.4 million children in need of assistance and at increased risk of
          waterborne diseases, drowning and malnutrition.
          <br/><br/>
          Donate now to help the people in need!
        </p>
        <Donate/>
        </div>
    </section>
  );
}

export default HomePage;


<div className="container">
      <div className="leftBox">
        <h2>Help the Flood Victims of Pakistan...</h2>
        <p>
          Torrential monsoon rains have triggered the most severe flooding in
          Pakistan's recent history, washing away villages and leaving around
          3.4 million children in need of assistance and at increased risk of
          waterborne diseases, drowning and malnutrition.
          <br/><br/>
          Donate now to help the people in need!
        </p>
        <Donate/>
      </div>
    </div>