import { useLocation } from "react-router-dom";
import FilterCmd from "./FilterCmd";
import data from "../selectpage/Data3";
import Nav from "../navbar/Nav";

function Filter() {
  const properties = data.properties;
  let ind = useLocation();
  return (
    <div>
      <Nav />
      <FilterCmd ind={ind} />
    </div>
  );
}
export default Filter;
