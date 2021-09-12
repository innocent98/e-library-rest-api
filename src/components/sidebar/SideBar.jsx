import "./sidebar.css";
import { slide as Menu } from "react-burger-menu";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Navbar } from "react-bootstrap";

export default function SideBar() {
  const { user, dispatch } = useContext(Context);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <Menu>
        <p className="publisher">Publisher Id: {user._id}</p>
        <br />
        <a className="menu-item" href="/dashboard">
          <span className="side">Home</span>
          <i className="bi bi-house-door"></i>
        </a>
        <br />

        <a className="menu-item" href="/upload">
          <span className="side">Upload</span>
          <i className="bi bi-upload"></i>
        </a>
        <br />

        <a className="menu-item" href="/profile">
          <span className="side">Profile</span>
          <i className="bi bi-person-lines-fill"></i>
        </a>
        <br />

        <a className="menu-item" href="/payment">
          <span className="side">Payment page</span>
          <i className="bi bi-wallet"></i>
        </a>
        <br />

        <hr />
        <div className="dropdown">
          <Navbar
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user ? (
              <img className="cover-pic" src={user.coverPicture ? PF+user.coverPicture : PF + "person/person3.png"} alt="" />
            ) : (
              <></>
            )}

            <span className="user-name">{user.firstName}</span>
          </Navbar>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="/profile">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/settings">
                settings
              </a>
            </li>
            <li className="dropdown-item" onClick={handleLogout}>
              {user && "Logout"}
            </li>
          </ul>
        </div>
      </Menu>
    </div>
  );
}
