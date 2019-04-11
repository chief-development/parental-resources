import React from "react";
import "./login.css";
import LuLogo from "./LU_Logo.png";
import { Link } from "react-router-dom";
import Footer from "./footer";
export default function LogIn() {
  return (
    <div>
      <form className="loginForm">
        <div className="imgcontainer">
          <img src={LuLogo} alt="Avatar" className="avatar" />
        </div>
        <br />
        <h2 className="logInTittle" style={{
          fontSize: '65px',
          textAlign: "center",
          fontStretch: "1px",
          color: '#b6a16b'
        }}>
          Log In
        </h2>

        <div class="container-login">

          <label>Username</label>
          <br />
          <input type="text" name="uname" placeholder="Enter Username" required style={{
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline - block',
            border: '1px solid #b6a16b',
            boxSizing: 'border-box',
          }}>
          </input>
          <br />

          <label>Password</label>
          <br />
          <input type="password" name="psw" placeholder="Enter Password" required style={{
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline - block',
            border: '1px solid #b6a16b',
            boxSizing: 'border-box',
          }}></input>
          <br />
          <Link to={"/admin"}>
            <button type="submit" className="lbutton">Login</button>
          </Link>
          <br />

        </div>
      </form>
      <Footer />
    </div>
  );
}
