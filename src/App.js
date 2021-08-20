import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SiteNavbar } from "./components/SiteNavbar";
import { NotFound } from "./pages/404";
import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration";


function App() {
  return (
    <Fragment>
    <BrowserRouter>
      <SiteNavbar/>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/register" component = {Registration} />
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
    </Fragment>
  );
}

export default App;
