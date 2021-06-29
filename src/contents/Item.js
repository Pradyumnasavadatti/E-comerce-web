import data from "../selectpage/Data3";
import React from "react";
import "./Content.css";
import firebase from "../firebase";
import { Link } from "react-router-dom";
function Item(props) {
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
  if (
    props.notindex === props.one ||
    props.notindex === props.two ||
    props.notindex === props.three ||
    props.notindex === props.four
  ) {
    return <div></div>;
  } else {
    if (props.sign === 1) {
      return (
        <div className="wrapper1">
          <div className="wrapper2">
            <div className="wrapper20">
              <Link
                to={{ pathname: "/bestItem", state: props.one }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.one].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>
                  <p className="txt">{properties[props.one].name}</p>
                  <p className="txt">Rs.{properties[props.one].price}/-</p>
                </div>
              </Link>
              <Link
                to={{ pathname: "/bestItem", state: props.two }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.two].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>
                  <p className="txt">{properties[props.two].name}</p>
                  <p className="txt">Rs.{properties[props.two].price}/-</p>
                </div>
              </Link>
            </div>
            <div className="wrapper20">
              <Link
                to={{ pathname: "/bestItem", state: props.three }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.three].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>
                  <p className="txt">{properties[props.three].name}</p>
                  <p className="txt">Rs.{properties[props.three].price}/-</p>
                </div>
              </Link>
              <Link
                to={{ pathname: "/bestItem", state: props.four }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.four].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>
                  <p className="txt">{properties[props.four].name}</p>
                  <p className="txt">Rs.{properties[props.four].price}/-</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    } else if (properties.length % 4 === 1) {
      return (
        <div className="wrapper1">
          <div className="wrapper2">
            <div className="wrapper20">
              <Link
                to={{ pathname: "/bestItem", state: props.one }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.one].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>
                  <p className="txt">{properties[props.one].name}</p>
                  <p className="txt">Rs.{properties[props.one].price}/-</p>
                </div>
              </Link>
              <div className="wrapper31"></div>
            </div>
            <div className="wrapper20">
              <div className="wrapper31"></div>
              <div className="wrapper31"></div>
            </div>
          </div>
        </div>
      );
    } else if (properties.length % 4 === 2) {
      return (
        <div className="wrapper1">
          <div className="wrapper2">
            <div className="wrapper20">
              <Link
                to={{ pathname: "/bestItem", state: props.one }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.one].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>
                  <p className="txt">{properties[props.one].name}</p>
                  <p className="txt">Rs.{properties[props.one].price}/-</p>
                </div>
              </Link>
              <Link
                to={{ pathname: "/bestItem", state: props.two }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.two].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>
                  <p className="txt">{properties[props.two].name}</p>
                  <p className="txt">Rs.{properties[props.two].price}/-</p>
                </div>
              </Link>
            </div>
            <div className="wrapper20">
              <div className="wrapper31"></div>
              <div className="wrapper31"></div>
            </div>
          </div>
        </div>
      );
    } else if (properties.length % 4 === 3) {
      return (
        <div className="wrapper1">
          <div className="wrapper2">
            <div className="wrapper20">
              <Link
                to={{ pathname: "/bestItem", state: props.one }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.one].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>
                  <p className="txt">{properties[props.one].name}</p>
                  <p className="txt">Rs.{properties[props.one].price}/-</p>
                </div>
              </Link>
              <Link
                to={{ pathname: "/bestItem", state: props.two }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.two].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>
                  <p className="txt">{properties[props.two].name}</p>
                  <p className="txt">Rs.{properties[props.two].price}/-</p>
                </div>
              </Link>
            </div>
            <div className="wrapper20">
              <Link
                to={{ pathname: "/bestItem", state: props.three }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="wrapper3">
                  <div className="shirt">
                    <img
                      src={properties[props.three].picture[0].url1}
                      className="itemimg"
                      alt="Loading..."
                    />
                  </div>

                  <p className="txt">{properties[props.three].name}</p>
                  <p className="txt">Rs.{properties[props.three].price}/-</p>
                </div>
              </Link>
              <div className="wrapper31"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Item;
