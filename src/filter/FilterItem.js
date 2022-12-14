import data from "../selectpage/Data3";
import React from "react";
import "./Filter.css";
import firebase from "../firebase";
import { Link } from "react-router-dom";
function FilterItem(props) {
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
  if (props.sign === 1) {
    return (
      <div className="wrapper1_1">
        <div className="wrapper2_1">
          <div className="wrapper20_1">
            <Link
              to={{ pathname: "/bestItem", state: props.one }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.one].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>
                <p className="txt_1">{properties[props.one].name}</p>
                <p className="txt_1">{properties[props.one].price}</p>
              </div>
            </Link>
            <Link
              to={{ pathname: "/bestItem", state: props.two }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.two].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>
                <p className="txt_1">{properties[props.two].name}</p>
                <p className="txt_1">{properties[props.two].price}</p>
              </div>
            </Link>
          </div>
          <div className="wrapper20_1">
            <Link
              to={{ pathname: "/bestItem", state: props.three }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.three].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>
                <p className="txt_1">{properties[props.three].name}</p>
                <p className="txt_1">{properties[props.three].price}</p>
              </div>
            </Link>
            <Link
              to={{ pathname: "/bestItem", state: props.four }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.four].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>
                <p className="txt_1">{properties[props.four].name}</p>
                <p className="txt_1">{properties[props.four].price}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (props.sign === 2) {
    return (
      <div className="wrapper1_1">
        <div className="wrapper2_1">
          <div className="wrapper20_1">
            <Link
              to={{ pathname: "/bestItem", state: props.one }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.one].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>
                <p className="txt_1">{properties[props.one].name}</p>
                <p className="txt_1">{properties[props.one].price}</p>
              </div>
            </Link>
            <div className="wrapper31_1"></div>
          </div>
          <div className="wrapper20_1">
            <div className="wrapper31_1"></div>
            <div className="wrapper31_1"></div>
          </div>
        </div>
      </div>
    );
  } else if (props.sign === 3) {
    return (
      <div className="wrapper1_1">
        <div className="wrapper2_1">
          <div className="wrapper20_1">
            <Link
              to={{ pathname: "/bestItem", state: props.one }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.one].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>
                <p className="txt_1">{properties[props.one].name}</p>
                <p className="txt_1">{properties[props.one].price}</p>
              </div>
            </Link>
            <Link
              to={{ pathname: "/bestItem", state: props.two }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.two].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>
                <p className="txt_1">{properties[props.two].name}</p>
                <p className="txt_1">{properties[props.two].price}</p>
              </div>
            </Link>
          </div>
          <div className="wrapper20_1">
            <div className="wrapper31_1"></div>
            <div className="wrapper31_1"></div>
          </div>
        </div>
      </div>
    );
  } else if (props.sign === 4) {
    return (
      <div className="wrapper1_1">
        <div className="wrapper2_1">
          <div className="wrapper20_1">
            <Link
              to={{ pathname: "/bestItem", state: props.one }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.one].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>
                <p className="txt_1">{properties[props.one].name}</p>
                <p className="txt_1">{properties[props.one].price}</p>
              </div>
            </Link>
            <Link
              to={{ pathname: "/bestItem", state: props.two }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.two].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>
                <p className="txt_1">{properties[props.two].name}</p>
                <p className="txt_1">{properties[props.two].price}</p>
              </div>
            </Link>
          </div>
          <div className="wrapper20_1">
            <Link
              to={{ pathname: "/bestItem", state: props.three }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="wrapper3_1">
                <div className="shirt_1">
                  <img
                    src={properties[props.three].picture[0].url1}
                    className="itemimg_1"
                    alt="Loading..."
                  />
                </div>

                <p className="txt_1">{properties[props.three].name}</p>
                <p className="txt_1">{properties[props.three].price}</p>
              </div>
            </Link>
            <div className="wrapper31_1"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default FilterItem;
