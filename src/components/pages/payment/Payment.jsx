import "./payment.css";
import SideBar from "../../sidebar/SideBar";
import { Context } from "../../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Payment() {
  const { user } = useContext(Context);

  return (
    <div className="payment-p">
      <SideBar />
      <div className="head">
        <div className="top-p">
          <p className="dashboard-p">
            Payment
            <i className="icon fas fa-bell">
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </i>
          </p>
        </div>
      </div>
      <div className="account-history">
        <div className="title">
          <h3>Your Account History</h3>
          Total balance
          <p className="balance">
            <b>
              {user.currency}
              {user.totalBalance}
            </b>
          </p>
        </div>

        <div className="available-balance">
          <div className="balanceContainer">
            Available balance: {user.currency}{user.availableBalance}
            <p className="balance">
              |
            </p>
            Total withdraw: {user.currency}{user.totalWithdraw}
          </div>
          <Link to="/withdraw">
            <button className="withdraw">Withdraw</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
