import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="home">
      <div className="form-wraper">
        <div className="describtion">
          <h4>Login to your account</h4>
          <p>
            Don’t have an account?<a href="#">Create a new account</a>
          </p>
        </div>
        <form>
          <div className="mb-3 ">
            <input className="inpts" type="email" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <input
              className="inpts"
              type={passwordShown ? "text" : "password"}
              placeholder="Your Password"
            />
            <i
              className={passwordShown ? " fa fa-eye " : "fa fa-eye-slash"}
              aria-hidden="true"
              id="togglePassword"
              onClick={togglePassword}
            ></i>
          </div>
          <div className="btnbtn">
            <button className="btn1">Submit</button>
          </div>
        </form>
        <p>
          <a className="creat-link" href="#">
            Creat an account?
          </a>
        </p>
      </div>
      <div className="about-wraper">
        <h6>About</h6>
        <h1>Evangadi Networks</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn1">HOW IT WORKS</button>
      </div>
    </div>
  );
}

export default Login;
