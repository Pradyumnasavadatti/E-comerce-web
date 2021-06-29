import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React from "react";
import Log from "./components/Logsign";
import { AuthProvider } from "./contexts/AuthContext";
import Admin from "./Proinsert";
import Privateroute from "./Privateroute";
import Orderplaced from "./components2/Orderplacedmain";
import Urorder from "./components2/Urorder";
import SelectMain from "./components2/SelectMain";
import Filtered from "./components2/Filtered";
import Specat from "./components2/Specat";
import Item from "./components2/Itemsmain";
import Pay from "./components2/PayMain";
import Info from "./components2/Info";
import Admins from "./admin/Admin";
function App() {
  const history = useHistory();
  history.listen((location, action) => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route path="/" exact>
            <Log />
          </Route>
          <Route path={"/nimda"} exact>
            <Admins />
          </Route>
          <Route path={"/I2"} exact>
            <Admin />
          </Route>
          <Privateroute path={"/OrderPlaced"} component={Orderplaced} exact />
          <Privateroute path={"/Your_orders"} component={Urorder} exact />
          <Privateroute path={"/Items"} component={Item} exact />
          <Privateroute path={"/bestItem"} component={SelectMain} exact />
          <Privateroute path={"/filteredItem"} exact component={Filtered} />
          <Privateroute path={"/specific/category"} exact component={Specat} />
          <Privateroute path={"/bestItem/pay"} exact component={Pay} />
          <Privateroute path={"/your/info"} exact component={Info} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
