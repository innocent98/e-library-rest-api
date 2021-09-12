import "./profile.css";
import SideBar from "../../sidebar/SideBar";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { Link } from "react-router-dom";
export default function Profile() {
  const { user } = useContext(Context);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profile-h">
      <SideBar />
      <div className="head-pr">
        <div className="top-pr">
          <p className="dashboard-pr">
            My Profile
            <i className="icon fas fa-bell">
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </i>
          </p>
        </div>
      </div>

      <div className="heading-pr">
        <div className="cover-pic-pr">
          <div className="rowC g-3">
            {
              <img
                src={user.coverPicture ? PF + user.coverPicture : PF + "person/person3.png"}
                alt=""
              />
            }

            <label htmlFor="fileInput">
              <span className="prf">
                <i className="fas fa-camera"></i>
              </span>
            </label>
            <Link to="/coverpicture">
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                accept="image/jpeg, image/jpg, image/png"
              />
            </Link>
          </div>
          <div className="head-title">
            <div className="head-main-t">
              <span className="title-hr">
                <h3>{user.firstName}</h3>
              </span>
              <span className="mail-hr">
                <p>{user.email}</p>
              </span>
            </div>

            <div className="sub-title-hr">
              <span className="published-count">
                <h5>{user.uploads}</h5>
              </span>
              <span className="book-published">
                <p>Published</p>
              </span>
            </div>
          </div>
        </div>

        <div className="details">
          <div className="details-title">
            Address <i className="fas fa-angle-right"></i>
            <div className="details-content">{user.address}</div>
          </div>
          <hr />
          <div className="details-title">
            Country <i className="fas fa-angle-right"></i>
            <div className="details-content">{user.country}</div>
          </div>
          <hr />
          <div className="details-title">
            Phone Number <i className="fas fa-angle-right"></i>
            <div className="details-content">{user.phoneNumber}</div>
          </div>
          <hr />
          <div className="details-title">
            Account Details <i className="fas fa-angle-right"></i>
            <div className="details-content">
              Bank: {user.bankName} <br />
              Name: {user.accountName} <br />
              Account: {user.accountNumber}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
