import "../Mainselect.scss";
import data from "./Data3";
import React from "react";
import firebase from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
let f = 1;
let a = 0,
  b = 0,
  c = 0,
  d = 0,
  e = 0,
  t = 0,
  d1 = 0;
function Selitem(props) {
  const cu = useAuth();
  const [atc, setatc] = useState(false);
  const properties = [];
  firebase
    .database()
    .ref("Products")
    .on("value", (snapshot) => {
      const i = snapshot.val();
      for (let id in i) {
        properties.push(i[id]);
      }
    });
  if (t !== props.index) {
    f = 1;
    t = props.index;
  }
  const [btn, changebtn] = useState(1);
  const changebtnfunc = () => {
    changebtn(0);
  };
  const changebtnfunc2 = () => {
    changebtn(1);
  };
  const [two, changeTwo] = useState(false);
  if (f === 1) {
    f = f + 1;
    d1 = props.index;
    d = properties[d1].picture[0].url1;
    a = properties[d1].picture[1].url2;
    b = properties[d1].picture[2].url3;
    c = properties[d1].picture[3].url4;
  }
  const imgclick1 = () => {
    e = d;
    d = a;
    a = e;
    e = 0;

    changeTwo(!two);
  };
  const imgclick2 = () => {
    e = d;
    d = b;
    b = e;
    e = 0;
    changeTwo(!two);
  };
  const imgclick3 = () => {
    e = d;
    d = c;
    c = e;
    e = 0;
    changeTwo(!two);
  };
  const addcart = () => {
    let r = 0;
    firebase
      .database()
      .ref("User")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          if (i[id].email === cu.currentUser.email) {
            if (r === 0) {
              r = r + 1;
              firebase
                .database()
                .ref("User")
                .child(id)
                .update({
                  cart: [...i[id].cart, d1],
                });
            }
          }
        }
      });
  };

  return (
    <div className="class2">
      <div className="angle">
        <div className="angle1">
          <img
            className="angle2 angle21"
            src={a}
            alt="Loading..."
            onClick={imgclick1}
          />
        </div>
        <div className="angle1">
          <img
            className="angle2"
            src={b}
            alt="Loading..."
            onClick={imgclick2}
          />
        </div>
        <div className="angle1">
          <img
            className="angle2"
            src={c}
            alt="Loading..."
            onClick={imgclick3}
          />
        </div>
      </div>
      <div className="mainitem">
        <div className="Mainimg">
          <img src={d} className="Mainimg2" />
        </div>
      </div>

      {btn === 1 ? (
        <div className="descrp2">
          <p className="txt3">{properties[props.index].name}</p>
          <p className="txt2">{properties[props.index].cat} Category</p>
          <p className="txt2">Rs.{properties[props.index].price}/-</p>
          <button className="btn3" onClick={changebtnfunc}>
            Details
          </button>
          <br />
          <button className="btn1" onClick={addcart} disabled={atc}>
            Add To Cart
          </button>
          <br />
          <Link
            to={{ pathname: "/bestItem/pay", state: { d1 } }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn2">Buy</button>
          </Link>
        </div>
      ) : (
        <div className="descrp3">
          <p className="txt4">{properties[props.index].description}</p>
          <button className="btn4" onClick={changebtnfunc2}>
            Back
          </button>
          <br />
        </div>
      )}
    </div>
  );
}
export default Selitem;
