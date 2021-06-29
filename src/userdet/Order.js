import Content from "../contents/Content";
import Nav from "../navbar/Nav";
import "./Order.css";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
function Order() {
  const history = useHistory();
  let q;
  const cu = useAuth();
  const properties = [];
  const proid = [];
  firebase
    .database()
    .ref("User")
    .on("value", (snapshot) => {
      const i = snapshot.val();
      for (let id in i) {
        if (i[id].email === cu.currentUser.email) {
          firebase
            .database()
            .ref(`User/${id}/orders`)
            .on("value", (snapshot) => {
              let j = snapshot.val();
              for (let y in j) {
                if (j[y] !== -1) {
                  properties.push(j[y]);
                }
              }
            });
        }
      }
    });
  firebase
    .database()
    .ref("Products")
    .on("value", (sc) => {
      const k = sc.val();
      for (let id in k) {
        properties.map((index) => {
          if (Number(k[id].index) === Number(index.productid)) {
            proid.push(k[id]);
          }
        });
      }
    });
  const handleexchange = () => {
    history.push({ pathname: "/bestItem", state: q.index });
  };

  return (
    <>
      <>
        {properties.map((index) => {
          for (let u in proid) {
            if (Number(index.productid) === Number(proid[u].index)) {
              q = proid[u];
            }
          }
          return (
            <div className="ordercardmain1">
              <div className="ordercardmain01">
                <div className="ordercardmain2">
                  <div className="ordernum">
                    <p className="orderheadname2"></p>
                  </div>

                  <div className="ordercardmain3">
                    <p className="orderheadname"></p>
                    <div className="orderpro">
                      <div className="orderphotosub" onClick={handleexchange}>
                        <div className="orderphoto">
                          <img
                            src={q.picture[0].url1}
                            className="orderphoto1"
                          />
                        </div>
                        <div className="ordersidemain">
                          <div className="ordersidemain2">
                            <p className="ordersidetxt">
                              <u>Product</u>
                            </p>
                            <p className="ordersidetxt">{q.name}</p>
                            <p className="ordersidetxt">Rs.{q.price}/-</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ordersubcard1">
                      <div className="orderip">
                        <p>Delivered to:{index.Name}</p>
                      </div>
                      <div className="orderip">
                        <p>E-mail:{index.email}</p>
                      </div>
                      <div className="orderip">
                        <p>Ph.no:{index.Mobile}</p>
                      </div>
                      <div className="orderip">
                        <p>City:{index.City}</p>
                      </div>
                      <div className="orderip">
                        <p>State:{index.State}</p>
                      </div>
                      <div className="orderip">
                        <p>Total amount:Rs.{index.total}/-</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
      <Content notindex={-1} />
    </>
  );
}
export default Order;
