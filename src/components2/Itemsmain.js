import Nav from "../navbar/Nav";
import Offer from "../offers/Offer";
import Content from "../contents/Content";
function Itemsmain() {
  return (
    <>
      <Nav />
      <Offer />
      <Content notindex={-1} />
    </>
  );
}
export default Itemsmain;
