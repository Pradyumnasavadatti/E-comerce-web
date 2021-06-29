import Or from "./Order";
import { useAuth } from "../contexts/AuthContext";
import "./Order.css";
function Userinfo() {
  const cu = useAuth();
  return (
    <>
      <div>
        <p className="emailtxt">
          <b>
            <u>Your Email </u>
          </b>
          <br />
          {cu.currentUser.email}
          <br />
          <br />
          <br />
          <b>
            <u>Your Orders </u>
          </b>
        </p>
      </div>
      <Or />
    </>
  );
}
export default Userinfo;
