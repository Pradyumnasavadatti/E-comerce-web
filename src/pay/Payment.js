import data from "../selectpage/Data3";
import "./Payment.css";
import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { Auth, useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
let a = 0;
let fprice = 0;
let quantity = 1;
let q = 1;
let mode = "Pay on Delivary";
function Payment(props) {
  const cu = useAuth();
  const nam = useRef();
  const mobile = useRef();
  const house = useRef();
  const area = useRef();
  const city = useRef();
  const state = useRef();
  const [i, changei] = useState(1);
  const history = useHistory();
  const func1 = () => {
    fprice = (i + 1) * a;
    quantity = i + 1;
    changei(i + 1);
  };
  const func2 = () => {
    if (i > 1) {
      fprice = (i - 1) * a;
      quantity = i - 1;
      changei(i - 1);
    }
  };
  let ind = "";
  ind = useLocation();
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
  const modehandler = (e) => {
    mode = e.target.value;
    console.log(mode);
  };
  const payhandler = () => {
    const list = [
      {
        Name: nam.current.value,
        Mobile: mobile.current.value,
        House: house.current.value,
        Area: area.current.value,
        City: city.current.value,
        State: state.current.value,
        email: cu.currentUser.email,
        productid: ind.state.d1,
        total: fprice,
        quantity: quantity,
      },
    ];

    firebase
      .database()
      .ref("User")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          if (cu.currentUser.email === i[id].email) {
            if (q === 1) {
              q = q + 1;
              firebase.database().ref(`User/${id}/orders`).push(list[0]);
            }
          }
        }
      });
    history.push("/OrderPlaced");
  };
  return (
    <div className="buyMain">
      <div className="mainCard">
        {properties.map((index) => {
          if (Number(index.index) === ind.state.d1) {
            return (
              <div className="sub1">
                <p className="none">
                  {(a = index.price)}
                  {(fprice = index.price)}
                </p>
                <Link
                  to={{ pathname: "/bestItem", state: ind.state.d1 }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="subCard1">
                    <img src={index.picture[0].url1} className="buyimg" />
                    <div className="buytxtmaindiv">
                      <div>
                        <p className="buytxt">{index.name}</p>
                        <p className="buytxt">Rs.{index.price}/-</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="subCard2">
                  <div className="quantity">
                    <div className="buyminusdiv" onClick={func2}>
                      <p className="buyminus">-</p>
                    </div>

                    <div className="buyspacediv">
                      <p className="buyspace">{i}</p>
                    </div>

                    <div className="buyplusdiv" onClick={func1}>
                      <p className="buyplus">+</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="sub2">
          <div className="sub21">
            <div className="sub211"></div>
          </div>
          <div className="sub22">
            <div className="sub222">
              <p className="TA">Total Amount:</p>
              <div className="rsdiv">
                <div className="rsmain">
                  <p className="rs">Rs.{i * a}/-</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sub23">
            <div className="sub211"></div>
          </div>
        </div>
        <div className="sub3"></div>
      </div>
      <br />
      <div className="buymain2">
        <div className="buymain2sub1">
          <div className="buymain2side1"></div>
          <div className="buymain2side2">
            <div className="buyhead">
              <div className="buyhead1">
                <p className="buyheadtxt">Address</p>
              </div>
              <div className="forms">
                <form className="forms_1" onSubmit={payhandler}>
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Full name"
                      ref={nam}
                      required
                    />
                  </div>
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Mobile Number"
                      ref={mobile}
                      required
                    />
                  </div>
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Flat, House.no, Building, Apartment"
                      ref={house}
                      required
                    />
                  </div>
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Area, Colony, Street, Sector, Village"
                      ref={area}
                      required
                    />
                  </div>

                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Town/City"
                      ref={city}
                      required
                    />
                  </div>
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="State"
                      ref={state}
                      required
                    />
                  </div>
                  <div className="buyipdiv1">
                    <div className="buyipdiv2">
                      <div className="buyradio1">
                        <input
                          type="radio"
                          className="buyinputradio"
                          id="pod"
                          name="mode"
                          value="Pay on Delivery"
                          onChange={modehandler}
                          defaultChecked
                        />
                        <label>Pay on delivery</label>
                      </div>
                      <div className="buyradio2">
                        <input
                          type="radio"
                          className="buyinputradio"
                          id="mode"
                          name="mode"
                          value="online"
                          onChange={modehandler}
                        />
                        <label>Online</label>
                      </div>
                      <button className="buybtn" type="submit">
                        PlaceOrder
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
