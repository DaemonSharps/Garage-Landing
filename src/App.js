import { RecordsState } from "./context/Records/RecordsState"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { SiteNavbar } from "./components/SiteNavbar"
import { NotFound } from "./pages/404"
import { Home } from "./pages/Home"
import { Records } from "./pages/Records"
import { Account } from "./pages/Account"


function App() {
  return (
    <RecordsState>
    <BrowserRouter>
      <SiteNavbar/>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/records" component = {Records} />
        <Route path="/account" component = {Account} />
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
    </RecordsState>
  );
}

export default App;
