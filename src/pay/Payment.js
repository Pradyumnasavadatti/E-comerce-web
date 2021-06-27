import data from "../selectpage/Data3";
import "./Payment.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
let a = "";
function Payment(props) {
  const [i, changei] = useState(1);
  const func1 = () => {
    changei(i + 1);
  };
  const func2 = () => {
    if (i > 1) {
      changei(i - 1);
    }
  };
  let ind = "";
  ind = useLocation();
  return (
    <div className="buyMain">
      <div className="mainCard">
        {data.properties.map((index) => {
          if (index.index === ind.state.d1) {
            return (
              <div className="sub1">
                <p className="none">{(a = index.price)}</p>
                <Link
                  to={{ pathname: "/bestItem", state: ind.state.d1 }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="subCard1">
                    <img src={index.picture[0]} className="buyimg" />
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
                <form className="forms_1">
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Flat, House.no, Building, Apartment"
                      required
                    />
                  </div>
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Area, Colony, Street, Sector, Village"
                    />
                  </div>

                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="Town/City"
                      required
                    />
                  </div>
                  <div className="buyipdiv">
                    <input
                      type="text"
                      className="buyinput"
                      placeholder="State"
                      required
                    />
                  </div>
                  <div className="buyipdiv1">
                    <div className="buyipdiv2">
                      <div className="buyradio1">
                        <input
                          type="radio"
                          className="buyinputradio"
                          defaultChecked
                          id="pod"
                          name="mode"
                        />
                        <label>Pay on delivery</label>
                      </div>
                      <div className="buyradio2">
                        <input
                          type="radio"
                          className="buyinputradio"
                          id="mode"
                          name="mode"
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
