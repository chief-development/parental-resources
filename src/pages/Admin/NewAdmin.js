import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import firebase from "firebase";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import Footer from "./footer";

function signout() {
  firebase.auth().signOut();
  window.location = "/login";
}

export default function NewAdmin() {
  let user = firebase.auth().currentUser; //get current signed in user

  checkuser(user);

  const [emailInput, setemailInput] = React.useState("");
  const [passwordInput, setpasswordInput] = React.useState("");

  //disable button if nboth inputs are not filled
  const isEnabled = emailInput.length > 0 && passwordInput.length > 0;

  return (
    <div>
      <span style={{ float: "right" }}>
        <a className="signoutbtn" onClick={() => signout()}>
          Sign Out
        </a>
      </span>
      <h1
        style={{
          fontSize: "80px",
          color: "#b3a272",
          lineHeight: "2",
          letterSpacing: "-2px",
          textShadow: "0px 2px 3px #555",
          textAlign: "left"
        }}
      >
        Admin Portal
      </h1>
      <span
        style={{
          fontSize: "25px",
          margin: "50px",
          textShadow: "0px 1px 1px #555"
        }}
      >
        <Link
          to="/admin"
          style={{
            margin: "20px",
            color: "#b3a272"
          }}
        >
          Unanswered Questions
        </Link>

        <Link
          to="/answered"
          style={{
            margin: "20px",
            color: "#b3a272"
          }}
        >
          Answered Questions
        </Link>

        <Link
          to="/newAdmin"
          style={{
            margin: "20px",
            color: "#b3a272"
          }}
        >
          Add New Admin
        </Link>
      </span>
      <Divider />
      <div
        class="container"
        style={{
          width: "80%",
          backgroundColor: "white"
        }}
      >
        <br />
        <h4
          style={{
            textAlign: "center",
            fontStretch: "1px",
            fontSize: "25px"
          }}
        >
          Add New Admin
        </h4>

        <hr
          style={{ backgroundColor: "#b6a16b", borderTop: "px double #b6a16b" }}
        />

        <p style={{ fontSize: "18px", textAlign: "center" }}>
          {" "}
          Please provide the information requested to add new admin, who will be
          able to login and answer questions.
        </p>

        <form id="set" noValidate>
          <label>E-mail:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Admin e-mail.."
            required
            value={emailInput}
            onChange={event => {
              const value = event.target.value;
              setemailInput(value);
            }}
          />

          <label>Temporary Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="Set temporary password..."
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline - block",
              border: "1px solid #b6a16b",
              boxSizing: "border-box"
            }}
            value={passwordInput}
            onChange={event => {
              const value = event.target.value;
              setpasswordInput(value);
            }}
          />

          <br />

          <Button
            style={{
              position: "relative",
              left: "41%",
              width: "90px",
              height: "50px"
            }}
            disabled={!isEnabled}
            onClick={() => addAdmin(emailInput, passwordInput)}
            variant="outlined"
            color="black"
          >
            Submit
          </Button>

          <br />
        </form>
        <br />
        <NotificationContainer />
      </div>
      <div style={{ position: "relative", paddingBottom: "60px" }}>
        <Footer
          style={{ position: "absolute", left: "0", right: "0", bottom: "0" }}
        />
      </div>
    </div>
  );
}

export function addAdmin(emailInput, passwordInput) {
  //try to create new user (admin)
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailInput, passwordInput)
    .then(
      () => {
        sendResetPassword(emailInput, passwordInput); //send reset password email
      },
      function(error) {
        // Handle Errors
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
      }
    );
}

export function sendResetPassword(emailInput, passwordInput) {
  firebase
    .auth()
    .sendPasswordResetEmail(emailInput)
    .then(function() {
      // Password Reset Email Sent!
      // [START_EXCLUDE]

      document.getElementById("email").value = ""; //clear all textinput with answer
      document.getElementById("pass").value = ""; //clear textinput with answer
      emailInput = "";
      passwordInput = "";
      NotificationManager.success(
        "New admin was sucessfully added.",
        "Admin Added",
        2500
      );
      alert("Password Reset Email Sent!");

      //SET DEFAULT emailINPUT and PassowordINput

      // [END_EXCLUDE]
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == "auth/invalid-email") {
        alert(errorMessage);
      } else if (errorCode == "auth/user-not-found") {
        alert(errorMessage);
      }

      // [END_EXCLUDE]
    });
  // [END sendpasswordemail];
}

function checkuser(user) {
  //if there is no signed in user, redirect out of admin portal

  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location = "/accessdenied";
    }
  });
}
