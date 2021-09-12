import React, { useState } from "react";
import showPwdImg from "./assets/showpd.svg";
import hidePwdImg from "./assets/hidepd.svg";
import "./login.css";
import logo from "./assets/lg.png";
import { Context } from "../../../context/Context";
import axios from "axios";
import { useContext, useRef } from "react";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("_auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

  const [pwd, setPwd] = useState("");
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
        <form className="row g-3" onSubmit={handleSubmit} style={{left: "-4px", top: "-10px"}}>
          <div className="row-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              ref={userRef}
            />
          </div>
          <div className="row-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              name="pwd"
              type={isRevealPwd ? "text" : "password"}
              className="form-control"
              id="inputPassword4"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              ref={passwordRef}
            />
            <img
              className="l-sp"
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg} alt=""
              style={{top: "-30px"}}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="login-button btn-primary" disabled={isFetching}>
              Login
            </button>
            <div className="member">
              Not a publisher?{" "}
              <span className="member-r">
                <a href="/register">Register</a>
              </span>
            </div>
            <div className="member">
              {" "}
              <span className="member-r">
                <a href="/register">Forgot password?</a>
              </span>
            </div>
          </div>
        </form>
        {error && (
          <span style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
            Email and password is incorrect! Kindly check and try again
          </span>
        )}
      </div>
    </div>
  );
}
