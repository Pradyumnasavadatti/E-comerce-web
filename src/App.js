import "./App.css";
import Nav from "./navbar/Nav";
import Offer from "./offers/Offer";
import Content from "./contents/Content";
import { Route, Switch } from "react-router-dom";
import Mainselect from "./selectpage/Mainselect";
import { useHistory } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Filter from "./filter/Filter";
import CP from "./navbar/Productcateg";
import Pay from "./pay/Payment";
import Log from "./components/Log_sign";
import { AuthProvider } from "./contexts/AuthContext";
import Admin from "./Proinsert";
import Privateroute from "./Privateroute";
function App() {
  const history = useHistory();
  history.listen((location, action) => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route path={"/"} exact>
            <Log />
          </Route>
          <Route path={"/Items"} exact>
            <Admin />
          </Route>
          <Route path={"/bestItem"} exact>
            <Mainselect />
          </Route>
          <Route path={"/filteredItem"} exact>
            <Filter />
          </Route>
          <Route path={"/specific/category"} exact>
            <Nav />
            <CP />
          </Route>
          <Route path={"/bestItem/pay"} exact>
            <Nav />
            <Pay />
          </Route>
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
