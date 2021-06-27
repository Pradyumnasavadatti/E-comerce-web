import "./Card.css";
import imgs from "./data";
import React from "react";
import ReactDOM from "react-dom";
import "./Offer.css";
const Card = (property) => {
  const index = property.property;
  const len = imgs.properties.length;
  const p = imgs.properties[index % len];
  const picture = p.picture;

  return (
    <div className="card animateimage" onAnimationIteration={property.animat}>
      <img src={picture} className="image" alt="Loading..."></img>
    </div>
  );
};
export default Card;
