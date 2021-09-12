import React, { useState } from "react";
import showPwdImg from "./assets/showpd.svg";
import hidePwdImg from "./assets/hidepd.svg";
import PhoneInput from "react-phone-number-input";
import "./register.css";
import logo from "./assets/lg.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  // const [value, setValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [currency, setCurrency] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/_auth/_register", {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        currency,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="register-h">
      <div className="container-md">
        <div className="logo">
          <img className="lib-lg" src={logo} alt="" />
          <span className="txt-lg">
            <b>eLibrary</b>
          </span>
        </div>
      </div>

      <div className="container">
        <p className="register">
          <b>register</b>
        </p>
        <form className="row g-3" onSubmit={handleSubmit} style={{left: "-2px", top: "0"}}>
          <div className="col-md-6">
            <label htmlFor="inputFirstName" className="form-label">
              First Name
            </label>
            <input
              type="name"
              className="form-control"
              id="inputFirstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastName" className="form-label">
              Last Name
            </label>
            <input
              type="name"
              className="form-control"
              id="inputLastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputFirstName" className="form-label">
              Phone Number
            </label>
            <PhoneInput
              className="form-control"
              international
              defaultCountry="NG"
              // value={value}
              // onChange={setValue}
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom04" className="form-label">
              Currency
            </label>
            <select
              className="form-select"
              id="validationCustom04"
              required
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option defaultValue="choose">
                Choose...
              </option>
              <option>AUD</option>
              <option>CAD</option>
              <option>GBP</option>
              <option>GHC</option>
              <option>JPY</option>
              <option>NGN</option>
              <option>USD</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid Currency.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              name="pwd"
              type={isRevealPwd ? "text" : "password"}
              className="form-control"
              id="inputPassword4"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              className="sp"
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg}
              alt=""
              style={{top: "-30px"}}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
          </div>

          <div className="row-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                You accept to our terms of service by checking this box
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <button type="submit" className="btnn btn-primary">
              Sign in
            </button>
            <div className="pub">
              Already a publisher!{" "}
              <span className="member-l">
                <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </form>
        {error && (
          <span style={{ color: "red", textAlign: "center" }}>
            Email already exit!
          </span>
        )}
      </div>
    </div>
  );
}
