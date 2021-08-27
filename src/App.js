import { RecordsState } from "./context/Records/RecordsState";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SiteNavbar } from "./components/SiteNavbar";
import { NotFound } from "./pages/404";
import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration";


function App() {
  return (
    <RecordsState>
      <SiteNavbar/>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/register" component = {Registration} />
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
    </RecordsState>
  );
}

export default App;
