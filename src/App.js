import { UserState } from "./context/User/UserState"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { SiteNavbar } from "./components/SiteNavbar"
import { NotFound } from "./pages/404"
import { Home } from "./pages/Home"
import { Records } from "./pages/Records"
import { Account } from "./pages/Account"
import { getCookieValue } from "./common/helpers"
import { validateRefreshToken } from "./common/authTokenHelpers"


function App() {
  let token = getCookieValue('refreshToken');
  const authorized = validateRefreshToken(token);
  
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
