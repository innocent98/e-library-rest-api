import React, { useState } from "react";
import showPwdImg from "./assets/showpd.svg";
import hidePwdImg from "./assets/hidepd.svg";
import PhoneInput from "react-phone-number-input";
import "./register.css";
import logo from "./assets/lg.png";

export default function Register() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [value, setValue] = useState();
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
        <form class="row g-3">
          <div class="col-md-5">
            <label for="inputFirstName" class="form-label">
              First Name
            </label>
            <input type="name" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-5">
            <label for="inputLastName" class="form-label">
              Last Name
            </label>
            <input type="name" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-5">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-5">
            <label for="inputNumber" class="form-label">
              Phone Number
            </label >
            <PhoneInput class="form-control"
              international
              defaultCountry="NG"
              value={value}
              onChange={setValue}
            />
          </div>
          <div class="col-md-5">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              name="pwd"
              type={isRevealPwd ? "text" : "password"}
              class="form-control"
              id="inputPassword4"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <img
              className="sp"
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
            {/* <i className="eye far fa-eye"></i> */}
          </div>
          <div class="col-md-5">
            <label for="inputPassword4" class="form-label">
              Confirm Password
            </label>
            <input
              name="pwd"
              type={isRevealPwd ? "text" : "password"}
              class="form-control"
              id="inputPassword4"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <img
              className="sp"
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
            {/* <i className="eye far fa-eye"></i> */}
          </div>

          <div class="row-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label class="form-check-label" for="gridCheck">
                You accept to our terms of service by checking this box
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btnn btn-primary">
              Sign in
            </button>
            <div className="pub">Already a publisher! <span className="member-l"><a href="/login">Login</a></span></div>
          </div>
        </form>
      </div>
    </div>
  );
}
