import React, { useState } from 'react';
import showPwdImg from "./assets/showpd.svg";
import hidePwdImg from "./assets/hidepd.svg";
import "./login.css";
import logo from "./assets/lg.png";

export default function Login() {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <div className="head-l">
      <div className="container-md">
        <div className="logo">
          <img className="lib-lg" src={logo} alt="" />
          <span className="txt-lg">
            <b>eLibrary</b>
          </span>
        </div>
      </div>

      <div className="container">
        <p className="login">
          <b>Login</b>
        </p>
        <form class="row g-3">
          <div class="row-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="row-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input name="pwd" type={isRevealPwd ? "text" : "password"} class="form-control" id="inputPassword4" value={pwd} onChange={e => setPwd(e.target.value)} />
            <img className="l-sp" title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd(prevState => !prevState)} />
            {/* <i className="eye far fa-eye"></i> */}
          </div>

          <div class="col-12">
            <button type="submit" class="btn-n btn-primary">
              Login in
            </button>
            <div className="member">Not a publisher? <span className="member-r"><a href="/register">Register</a></span></div>
          </div>
        </form>
      </div>
    </div>
  );
}
