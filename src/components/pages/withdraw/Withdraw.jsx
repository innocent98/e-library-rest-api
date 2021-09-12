import "./withdraw.css";
import SideBar from "../../sidebar/SideBar";
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../../context/Context";

export default function Withdraw() {
  const [withdraw, setWithdraw] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    try {
      const res = await axios.put("publishers/withdraw/" + user._id, {
        publisherId: user._id,
        withdraw,
      });
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      window.location.replace("/payment");
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      setError(true);
    }
  };

  return (
    <div className="withdrawH">
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

      <div className="containerW">
        <h3 className="withdrawT">Withdraw</h3>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-5">
            <label htmlFor="inputFirstName" className="form-label">
              Amount to withdraw
            </label>
            <input
              type="name"
              className="form-control"
              id="inputEmail4"
              placeholder="input amount to withdraw i.e: 2000"
              onChange={(e) => setWithdraw(e.target.value)}
            />
          </div>
          <button type="submit" className="withdrawButton btn-primary" id="liveToastBtn">
            Withdraw
          </button>
        </form>
        {error && (
          <span
            style={{ color: "red", textAlign: "center", marginTop: "35px" }}
          >
            Available balance is not sufficent to perform this operation
          </span>
        )}
        {success && (
          <span
            className="profileSuccess"
            style={{ color: "green", textAlign: "center", margin: "5%", paddingTop: "10px" }}
          >
            Withdrawal successful! Money will be deposited into
            your account in few hours.
          </span>
        )}
      </div>
    </div>
  );
}
