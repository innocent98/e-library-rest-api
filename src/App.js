import Dashboard from "./components/pages/dashboard/Dashboard";
import Payment from "./components/pages/payment/Payment";
import Upload from "./components/pages/upload/Upload";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Profile from "./components/pages/profile/Profile";
import Home from "./components/pages/home/Home";
import CoverPicture from "./components/pages/coverPicture/CoverPicture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditProfile from "./components/pages/edit-profile/Edit-profile";
import Withdraw from "./components/pages/withdraw/Withdraw";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Dashboard /> : <Home />}
        </Route>
        <Route path="/dashboard">{user ? <Dashboard /> : <Home />}</Route>
        <Route path="/upload">{user ? <Upload /> : <Home />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Home />}</Route>
        <Route path="/payment">{user ? <Payment /> : <Home />}</Route>
        <Route path="/register">{user ? <Dashboard /> : <Register />}</Route>
        <Route path="/login">{user ? <Dashboard /> : <Login />}</Route>
        <Route path="/edit-profile">{user ? <EditProfile /> : <Home />}</Route>
        <Route path="/profile">{user ? <Profile /> : <Home />}</Route>
        <Route path="/coverpicture">{user ? <CoverPicture /> : <Home />}</Route>
        <Route path="/withdraw">{user ? <Withdraw /> : <Home />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
