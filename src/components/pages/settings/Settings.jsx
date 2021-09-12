import "./settings.css";
import SideBar from "../../sidebar/SideBar";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import { Link } from "react-router-dom";

export default function Settings() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="settings-h">
      <SideBar />
      <div className="head-s">
        <div className="top-s">
          <p className="dashboard-s">
            Settings
            <i className="icon fas fa-bell">
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </i>
          </p>
        </div>
      </div>

      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="title">Edit Profile</span>
          <span className="icon">
            <Link to="/edit-profile">
              <i className="fas fa-chevron-right"></i>
            </Link>
          </span>
        </div>
        <div className="settings-title">
          <span className="title">Change Password</span>
          <span className="icon">
            <Link to="edit-profile">
              <i className="fas fa-chevron-right"></i>
            </Link>
          </span>
        </div>
        <div className="settings-title">
          <span className="title">Get Help</span>
          <span className="icon">
            <>
              <i className="fas fa-chevron-right"></i>
            </>
          </span>
        </div>
        <div className="settings-title">
          <span className="title">Report Problem</span>
          <span className="icon">
            <>
              <i className="fas fa-chevron-right"></i>
            </>
          </span>
        </div>
        <div className="settings-title">
          <span className="title">terms of Use</span>
          <span className="icon">
            <>
              <i className="fas fa-chevron-right"></i>
            </>
          </span>
        </div>
        <div className="settings-title">
          <span className="title">Logout</span>
          <span className="icon">
            <Link to="">
              <i className="fas fa-sign-out-alt" onClick={handleLogout}>
                {user && ""}
              </i>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
