import Dashboard from "./components/pages/dashboard/Dashboard";
import Payment from "./components/pages/payment/Payment";
import SideBar from "./components/sidebar/SideBar";
import Upload from "./components/pages/upload/Upload";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Profile from "./components/pages/profile/Profile";
import Home from "./components/pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditProfile from "./components/pages/edit-profile/Edit-profile";


function App() {
  const user = false;
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
        {user ? <Dashboard /> : <Home />}
        </Route>
        <Route path="/upload">
        {user ? <Upload /> : <Home />}
        </Route>
        <Route path="/settings">
        {user ? <Settings /> : <Home />}
        </Route>
        <Route path="/payment">
          {user ? <Payment /> : <Home />}
        </Route>
        <Route path="/register">
          {user ? <Dashboard /> : <Register />}
        </Route>
        <Route path="/login">
        {user ? <Dashboard /> : <Login />}
        </Route>
        <Route path="/edit-profile">
        <EditProfile />
        </Route>
        <Route path="/profile">
        <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
