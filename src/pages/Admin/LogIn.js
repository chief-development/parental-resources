import React from "react";
import "./login.css";
import LuLogo from "./LU_Logo.png";
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

  //Initializes variables for the email and password fields
  const [emailInput, setemailInput] = React.useState("");
  const [passInput, setpassInput] = React.useState("");

  return (
    <div
      className="bg-image"
      onKeyPress={event => keyPressed(event, emailInput, passInput)}
    >
      <div className="loginForm">
        {/*Log in Form*/}
        <div className="imgcontainer">
          <img src={LuLogo} alt="Avatar" className="avatar" />
        </div>
        <br />
        <br />
        <br />
        {/*Admin Portal Title*/}
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
        {/*Container to log in and inputs*/}
        <div class="container-login">
          <p style={{ fontSize: "10px", fontWeight: "200" }}>
            *Tool just for administrators of this website.
          </p>
          {/*Label for the username input field*/}
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
          {/*Input for the email field*/}
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
          {/*Label for the password input field*/}
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
          {/*input field for the password*/}
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

          {/*Log in Button*/}
          <button
            type="submit"
            onClick={() => login(emailInput, passInput)}
            //onKeyPress={Enter => login(emailInput, passInput)}
            className="lbutton"
          >
            Login
          </button>

          {/*Link in case administrator forgets password*/}
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
      <div style={{ position: "relative", paddingBottom: "60px" }}>
        <Footer
          style={{ position: "absolute", left: "0", right: "0", bottom: "0" }}
        />
      </div>
    </div>
  );
}

//Log in Function that holds two arguments emailInput and passInput
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
        alert("Wrong password");
      } else {
        alert(errorMessage);
      }
    });
}

//forgotPassword function that takes one argument
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

//function KeyPressed that takes three arguments event, emailInput, and pass Input
function keyPressed(event, emailInput, passInput) {
  if (event.key === "Enter") {
    login(emailInput, passInput);
  }
}
