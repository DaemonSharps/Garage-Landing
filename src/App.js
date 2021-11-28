import { UserState } from "./context/User/UserState"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { SiteNavbar } from "./components/SiteNavbar"
import { NotFound } from "./pages/404"
import { Home } from "./pages/Home"
import { Records } from "./pages/Records"
import { Account } from "./pages/Account"


function App() {
  const authorized = localStorage.authorized === "true";
  
  return (
    <UserState>
    <BrowserRouter>
      <SiteNavbar/>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/records" component = {Records} />
        <Route path="/account" component = {authorized ?Account :Home} />
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
    </UserState>
  );
}

export default App;
