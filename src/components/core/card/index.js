import React from "react";
import "./cardStyle.css";

function Card({ label, onclick }) {
  return (
    <div className="card" onClick={() => onclick()}>
      <h1>{label}</h1>
      <p>Unlimited Jokes on {label}</p>
    </div>
  );
}

export default Card;
