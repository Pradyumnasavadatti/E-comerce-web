import Content from "../contents/Content";
import Nav from "../navbar/Nav";
import "./Payment.css";
function Succpay() {
  return (
    <>
      <Nav />
      <div className="No222">
        <p className="Notxt">Order Successfully Placed </p>
        <p className="Notxt">Happy Shopping!</p>
      </div>
      <Content notindex={-1} />
    </>
  );
}
export default Succpay;
