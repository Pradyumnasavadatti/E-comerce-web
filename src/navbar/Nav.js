import data from "../selectpage/Data3";
import style from "./Nav.module.css";
import { useState } from "react";
import firebase from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import Ac from "@material-ui/icons/Search";
import Mi from "@material-ui/icons/Menu";
import React from "react";
import ud from "../User.js";
import { Link } from "react-router-dom";
let t = 0;
const Nav = () => {
  const cu = useAuth();
  const [dis, changedis] = useState(false);
  const [dis2, changedis2] = useState(false);
  const [dis3, changedis3] = useState(false);
  const [carts, clickcart] = useState(false);
  const [user, clickuser] = useState(false);
  const [filter, clickfilter] = useState(false);
  const [product, clickproduct] = useState("men");

  const fun1 = () => {
    changedis(true);
    changedis3(false);
    clickcart(false);
    clickuser(false);
    clickfilter(false);
    t = 1;
  };
  const fun2 = () => {
    if (t === 1) {
      changedis(false);
      changedis2(false);
      changedis3(true);
      t = 0;
    }
    clickfilter(false);
    clickcart(false);
    clickuser(false);
  };

  const fun3 = () => {
    if (t === 1) {
      changedis2(true);
      changedis3(false);
      clickcart(false);
      t = 0;
    }
    clickfilter(false);
    clickuser(false);
  };

  const fun4 = () => {
    if (t === 1) {
      changedis(false);
      changedis2(false);
      changedis3(true);
      t = 0;
    }
    clickfilter(false);
    clickuser(false);
  };
  const func = () => {
    clickcart(true);
  };
  const func2 = () => {
    clickcart(false);
  };
  const userfunc1 = () => {
    clickfilter(false);
    clickuser(true);
  };
  const userfunc2 = () => {
    clickuser(false);
  };
  const filterfunc1 = () => {
    clickfilter(true);
  };
  const filterfunc2 = () => {
    clickfilter(false);
  };
  const [option, setOption] = useState("red");

  function handleChange(event) {
    setOption(event.target.value);
  }
  const [option2, setOption2] = useState("men");

  function handleChange2(event) {
    setOption2(event.target.value);
  }
  const [option3, setOption3] = useState("XL");

  function handleChange3(event) {
    setOption3(event.target.value);
  }
  const [option4, setOption4] = useState("Adidas Cotton Tshirt");

  function handleChange4(event) {
    setOption4(event.target.value);
  }
  return (
    <div className={style.navmain}>
      <div id={style.navsub}>
        <div id={style.logo} onMouseEnter={fun2}>
          <h1 data-text="TBB">
            <span>TBB</span>
          </h1>
        </div>

        <div className={style.midd2} onMouseEnter={fun2}></div>

        <div id={style.filterdiv} onMouseEnter={fun2} onClick={filterfunc1}>
          <button className={style["filter"]}>Filter</button>
        </div>

        <div className={style.midd} onMouseEnter={fun2}></div>

        <div id={style.menubtn}>
          <Mi id={style.mbtn} />
        </div>

        <div id={style.navitems}>
          <div className={style["navitem1"]} onMouseEnter={fun1}>
            <p className={style.paraitem1}>Products</p>
          </div>
          <div id={style.navitem2} onMouseEnter={fun4} onClick={func}>
            <p className={style.paraitem2}>Cart</p>
          </div>
          <div id={style.navitem3} onMouseEnter={fun2} onClick={userfunc1}>
            <p className={style.paraitem3}>User</p>
          </div>
        </div>
      </div>
      {dis && (
        <div className={style["onHoverpara"]}>
          <div
            className={style["onHover"]}
            onMouseHover={fun3}
            onMouseLeave={fun2}
          >
            <Link
              to={{ pathname: "/specific/category", state: "men" }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className={style.pmen1}>Men</p>
            </Link>
            <hr />
            <Link
              to={{ pathname: "/specific/category", state: "women" }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className={style.pmen1}>Women</p>
            </Link>
            <hr />
            <Link
              to={{ pathname: "/specific/category", state: "kids" }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className={style.pmen1}>Kids</p>
            </Link>
          </div>
        </div>
      )}
      {dis2 && (
        <div className={style["onHoverpara"]}>
          <div
            className={style["onHover2"]}
            onMouseMoveCapture={fun3}
            onMouseLeave={fun2}
          >
            <p className={style.pmen1}>Men</p>
            <p className={style.pmen1}>Women</p>
            <p className={style.pmen1}>Kids</p>
          </div>
        </div>
      )}
      {dis3 && (
        <div className={style["onHover3"]}>
          <p className={style.pmen1}>Men</p>
          <p className={style.pmen1}>Women</p>
          <p className={style.pmen1}>Kids</p>
        </div>
      )}

      {carts && (
        <div className={style["cartspara"]}>
          <div className={style["carts"]} onMouseLeave={func2}>
            {data.properties.map((index) => (
              <div className={style["cartcardpara"]}>
                <Link
                  to={{ pathname: "/bestItem", state: index.index }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className={style["cartcard"]}>
                    <div className={style["sideimg"]}>
                      <img
                        className={style["sideimg2"]}
                        src={index.picture[0]}
                      />
                    </div>
                    <div className={style["side2"]}>
                      <div className={style["sidetext"]}>
                        <div className={style["divp"]}>
                          <p>{index.name}</p>
                        </div>
                        <div className={style["divp"]}>
                          <p>Rs. {index.price}/-</p>
                        </div>
                        <div className={style["divp"]}>
                          <p>{index.size}</p>
                        </div>
                      </div>
                      <button className={style["sidebutton"]}>Remove</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      {user && (
        <div className={style["usersidepara"]}>
          <div className={style["userside"]} onMouseLeave={userfunc2}>
            <p className={style["fp"]}>My Orders</p>
            <hr className={style["hoz"]} />
            <p className={style.pmen1}>My Details</p>
            <hr className={style["hoz"]} />
            <p className={style.pmen1}>Log Out</p>
          </div>
        </div>
      )}

      {filter && (
        <div className={style["filterdiv1"]}>
          <div className={style["filterdiv2"]} onMouseLeave={filterfunc2}>
            <div className={style["colors"]}>
              <div>
                <label className={style["lab"]}>Color : </label>
              </div>
              <div>
                <select onChange={handleChange}>
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="navyblue">Navy Blue</option>
                  <option value="white">White</option>
                  <option value="skyblue">Sky Blue</option>
                  <option value="black">Black</option>
                  <option value="pink">Pink</option>
                </select>
              </div>
            </div>
            <div className={style["colors"]}>
              <div>
                <label className={style["lab"]}>Category : </label>
              </div>
              <div>
                <select onChange={handleChange2}>
                  <option value="men">Men</option>
                  <option value="woman">Woman</option>
                  <option value="kids">Kids</option>
                </select>
              </div>
            </div>
            <div className={style["colors"]}>
              <div>
                <label className={style["lab"]}>Size : </label>
              </div>
              <div>
                <select onChange={handleChange3}>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>
            <div className={style["colors"]}>
              <div>
                <label className={style["lab"]}>Company : </label>
              </div>
              <div>
                <select onChange={handleChange4}>
                  <option value="Adidas Cotton Tshirt">Adidas</option>
                  <option value="Puma Cotton Tshirt">Puma</option>
                  <option value="Nike Cotton Tshirt">Nike</option>
                  <option value="John Playes Cotton Tshirt">
                    John Players
                  </option>
                  <option value="Huge Cotton Tshirt">Huge</option>
                  <option value="Cotton King Cotton Tshirt">Cotton King</option>
                  <option value="Raymond Cotton Tshirt">Raymond</option>
                </select>
              </div>
            </div>
            <Link
              to={{
                pathname: "/filteredItem",
                state: {
                  color: option,
                  cat: option2,
                  siz: option3,
                  brand: option4,
                },
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <button className={style["searchfilter"]}>Search</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Nav;
