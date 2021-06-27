import React, { useState } from "react";
import imgs from "./data";
import Card from "./Card";
import Left from "@material-ui/icons/ArrowBackIosRounded";
import Right from "@material-ui/icons/ArrowForwardIosRounded";
import CSSTransition from "react-transition-group/CSSTransition";
import ReactDOM from "react-dom";
import "./Card.css";
import "./Offer.css";
import data from "./data";
function Offer() {
  const avg = data.properties.length;
  const [indexNext, indexChange] = useState(0);

  const nextProperty = () => {
    indexChange(indexNext + 1);
  };
  const prevProperty = () => {
    indexChange(indexNext - 1);
  };
  return (
    <div className="offer">
      <button
        className="btn"
        onClick={() => prevProperty()}
        disabled={indexNext === 0}
      >
        <Left id="si2" />
      </button>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={true}
        timeout={1000}
        classNames={{
          enter: "animateimage",
          enterActive: "animateimage2",
          exit: "animateimage",
          exitActive: "animateimage",
          appear: "animateimage2",
          appearActive: "animateimage",
        }}
      >
        <Card
          property={indexNext}
          animat={nextProperty}
          key={data.properties[indexNext % avg]._id}
        />
      </CSSTransition>
      <button
        className="btn"
        onClick={() => nextProperty()}
        disabled={indexNext === imgs.properties.length - 1}
      >
        <Right id="si3" />
      </button>
    </div>
  );
}
export default Offer;
