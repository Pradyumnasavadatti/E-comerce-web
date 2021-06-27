import "../Mainselect.scss";
import Selitem from "./Selitem";
import Nav from "../navbar/Nav";
import Content from "../contents/Content";
import React from "react";
import { useLocation } from "react-router-dom";
function Mainselect(props) {
  let ind = useLocation();
  return (
    <div className="class1">
      <Nav />
      <Selitem index={ind.state} />
      <Content notindex={ind.state} />
    </div>
  );
}
export default Mainselect;
