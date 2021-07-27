import "./settings.css"
import SideBar from "../../sidebar/SideBar";

export default function Settings() {
  const user = true;
  return (
    <div className="settings-h">
      <SideBar />
      <div className="head-s">
      <div className="top-s">
          <p className="dashboard-s">
            Settings
            <i class="icon fas fa-bell">
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </i>
          </p>
        </div>
      </div>

      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="title">Edit Profile</span>
          <span className="icon"><a href="/edit-profile"><i class="fas fa-chevron-right"></i></a></span>
        </div>
        <div className="settings-title">
          <span className="title">Change Password</span>
          <span className="icon"><a href="edit-profile"><i class="fas fa-chevron-right"></i></a></span>
        </div>
        <div className="settings-title">
          <span className="title">Get Help</span>
          <span className="icon"><a href=""><i class="fas fa-chevron-right"></i></a></span>
        </div>
        <div className="settings-title">
          <span className="title">Report Problem</span>
          <span className="icon"><a href=""><i class="fas fa-chevron-right"></i></a></span>
        </div>
        <div className="settings-title">
          <span className="title">terms of Use</span>
          <span className="icon"><a href=""><i class="fas fa-chevron-right"></i></a></span>
        </div>
        <div className="settings-title">
          <span className="title">Logout</span>
          <span className="icon"><a href=""><i class="fas fa-sign-out-alt">{user && ""}</i></a></span>
        </div>
      </div>
    </div>
  );
}
