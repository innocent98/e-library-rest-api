import "./payment.css";
import SideBar from "../../sidebar/SideBar";

export default function Payment() {
  return (
    <div className="payment-p">
      <SideBar />
      <div className="head">
        <div className="top-p">
          <p className="dashboard-p">
            Payment
            <i class="icon fas fa-bell">
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
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
            <b>$2000</b>
          </p>
        </div>

        <div className="available-balance">
          Available balance
          <p className="balance">
            <b>$100</b>
          </p>
          <button class="withdraw">Withdraw</button>
        </div>
      </div>
      
    </div>
  );
}
