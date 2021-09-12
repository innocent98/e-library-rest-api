import React, { useContext, useEffect, useState } from "react";
import Dash from "../dash/Dash";
import "./dashboard.css";
import SideBar from "../../sidebar/SideBar";
import { Context } from "../../../context/Context";
import axios from "axios";

export default function Dashboard() {
  const { user } = useContext(Context);

  const [books, SetBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        "/upload/my-uploads/" + user._id
      );
      SetBooks(res.data);
    };
    fetchBooks();
  }, [user._id]);

  return (
    <div className="dashboard-g">
      <SideBar />
      <div className="dashboard-h">
        <div className="top">
          <p className="dashboard">
            Dashboard
            <i className="notification-icon bi bi-bell-fill">
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </i>
          </p>
        </div>
      </div>

      <div className="welc">
        <p>
          <span className="user">Welcome back {user.firstName}!</span> Your
          current account balance is <b>{user.currency}{user.availableBalance}.</b> This page contain the
          list of books you've uploaded. You have <b>{user.uploads}</b> total book(s) Uploaded
        </p>
      </div>
      <div className="books">
        {books.map(b => (
          <Dash key={b._id} book={b} />
        ))}
      </div>
    </div>
  );
}
