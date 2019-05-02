import React from "react";
import "./login.css";
import LuLogo from "./LU_Logo.png";
import { Link } from "react-router-dom";
import Footer from "./footer";
import firebase from "firebase";
export default function LogIn() {
  let user = firebase.auth().currentUser; //get current signed in user
  //if the user is currently signed in - skip log in form
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location = "/admin";
    }
  });

  const [emailInput, setemailInput] = React.useState("");
  const [passInput, setpassInput] = React.useState("");

  return (
    <div
      className="bg-image"
      onKeyPress={event => keyPressed(event, emailInput, passInput)}
    >
      <div className="loginForm">
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
            color: "#b3a272",
            fontWeight: "600"
          }}
        >
          Admin Portal
        </h2>

        <div class="container-login">
          <label
            style={{
              color: "#b3a272",
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
            name="email"
            id="email"
            placeholder="Enter E-mail"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline - block",
              border: "1px solid #b6a16b",
              boxSizing: "border-box"
            }}
            value={emailInput}
            onChange={event => {
              const value = event.target.value;
              setemailInput(value);
            }}
          />
          <br />

          <label
            style={{
              color: "#b3a272",
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
            id="pass"
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
            value={passInput}
            onChange={event => {
              const value = event.target.value;
              setpassInput(value);
            }}
          />
          <br />

          <button
            type="submit"
            onClick={() => login(emailInput, passInput)}
            //onKeyPress={Enter => login(emailInput, passInput)}
            className="lbutton"
          >
            Login
          </button>

          <a
            style={{ marginLeft: "10px", color: "#007bff" }}
            className="forgotPasswordLink"
            onClick={() => forgotPassword(emailInput)}
          >
            Forgot&nbsp;Password?
          </a>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function login(emailInput, passInput) {
  //try to sign in
  firebase
    .auth()
    .signInWithEmailAndPassword(emailInput, passInput)
    .then(user => {
      //login successfull
      window.location = "/admin"; //redirect to admin portal
    })
    .catch(error => {
      //unsuccessfull login -> show error
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
    });
}

function forgotPassword(emailInput) {
  //send reset password email
  firebase
    .auth()
    .sendPasswordResetEmail(emailInput)
    .then(function() {
      // Password Reset Email Sent!
      alert("Email to reset the password was sent to " + emailInput);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode == "auth/invalid-email") {
        alert(errorMessage);
      } else if (errorCode == "auth/user-not-found") {
        alert(errorMessage);
      }
    });
}

function keyPressed(event, emailInput, passInput) {
  if (event.key === "Enter") {
    login(emailInput, passInput);
  }
}
