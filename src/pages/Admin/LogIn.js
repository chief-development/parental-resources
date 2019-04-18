import React from "react";
import "./login.css";
import LuLogo from "./LU_Logo.png";
import { Link } from "react-router-dom";
import Footer from "./footer";
export default function LogIn() {
  return (
    <div className="bg-image">
      <form className="loginForm">
        <div className="imgcontainer">
          <img src={LuLogo} alt="Avatar" className="avatar" />
        </div>
        <br />
        <br />
        <br />
        <h2
          className="logInTittle"
          style={{
            fontSize: "70px",
            textAlign: "center",
            fontStretch: "1px",
            color: "white",
            fontWeight: "600"
          }}
        >
          Admin Portal
        </h2>

        <div class="container-login">
          <label
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "600"
            }}
          >
            Username
          </label>
          <br />
          <input
            className="inputs"
            type="text"
            name="uname"
            placeholder="Enter Username"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline - block",
              border: "1px solid #b6a16b",
              boxSizing: "border-box"
            }}
          />
          <br />

          <label
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "600"
            }}
          >
            Password
          </label>
          <br />
          <input
            className="inputs"
            type="password"
            name="psw"
            placeholder="Enter Password"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline - block",
              border: "1px solid #b6a16b",
              boxSizing: "border-box"
            }}
          />
          <br />
          <Link to={"/admin"}>
            <button type="submit" className="lbutton">
              Login
            </button>
          </Link>
          <br />
        </div>
      </form>
      <Footer />
    </div>
  );
}
