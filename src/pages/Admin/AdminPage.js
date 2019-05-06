import React from "react";
import "./admin.css";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { db } from "../../firebase/index";
import Button from "@material-ui/core/Button";
import moment from "moment";
import Footer from "./footer";
import firebase from "firebase";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

function signout() {
  firebase.auth().signOut();
  window.location = "/login";
}

export default function Admin() {
  let user = firebase.auth().currentUser; //get current signed in user
  //if there is no signed in user, redirect out of admin portal
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location = "/accessdenied";
    }
  });

  const [questions, setQuestions] = React.useState([]);
  const [keys, setkeys] = React.useState([]); //array of question IDs
  const [answerInput, setanswerInput] = React.useState("");

  //select questions that has NO answer and create snapshot
  React.useEffect(
    () => {
      //db.collection("questions").where('show_on_web', '==',true)
      db.collection("questions")
        .where("answer", "==", "")
        .onSnapshot(snapshot => {
          let q = [];
          let id = [];
          snapshot.forEach(doc => {
            q.push(doc.data());
            id.push(doc.id);
          });
          setQuestions(q);
          setkeys(id);
        });
    },
    [],
    []
  );

  return (
    <div>
      <span style={{ float: "right" }}>
        <a className="signoutbtn" onClick={() => signout()}>
          Sign Out
        </a>
      </span>
      <h1
        style={{
          lineHeight: "1",
          letterSpacing: "-2px", // space between letters of -2 px
          padding: "5px", // padding around of 5 px
          fontSize: "80px", // size of the font 80 px
          color: "#b3a272", //color mustard yellow for the letters
          textShadow: "0px 2px 3px #555" // give a little shadow to the letters
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
        <form id="questionset">
          {questions.map((q, index) => {
            const {
              question,
              date_asked,
              category,
              answer,
              askedBy_email,
              askedBy_name
            } = q;

            {
              /* transform date into readable format */
            }
            const formattedDate = moment(questions[index].date_asked).format(
              "ll"
            );

            {
              /* print set of unasnwered questions */
            }
            return (
              <div>
                <p>
                  <span style={{ fontWeight: "600" }}>Asked by: </span>
                  {askedBy_name}
                </p>
                <p>
                  <span style={{ fontWeight: "600" }}>E-mail: </span>
                  {askedBy_email}
                </p>
                <p>
                  <span style={{ fontWeight: "600" }}>Date asked: </span>
                  {formattedDate}
                </p>
                <p>
                  <span style={{ fontWeight: "600" }}>Category: </span>
                  {category}
                </p>
                <p>
                  <span style={{ fontWeight: "600" }}>Question: </span>
                  {question}{" "}
                </p>
                <label style={{ fontSize: "20px" }}>Answer: </label>
                <textarea
                  id="answertextarea"
                  name="answertextarea"
                  placeholder="Type your answer.."
                  onChange={event => {
                    setanswerInput(event.target.value); //save the text from textarea
                  }}
                />
                <Button
                  className="button-admin"
                  onClick={() => deletequestion(keys[index])}
                  variant="extendedFab"
                  style={{ margin: "4px" }}
                >
                  Delete Question
                </Button>
                <Button
                  variant="extendedFab"
                  className="button-admin"
                  style={{ margin: "4px" }}
                  onClick={() => answerquestion(answerInput, keys[index])}
                >
                  Submit Answer
                </Button>

                <hr />
              </div>
            );
          })}
        </form>
        <NotificationContainer />
      </div>
      <Footer />
    </div>
  );
}

function answerquestion(answerInput, id) {
  //update the question
  db.collection("questions")
    .doc(id)
    .update({
      answer: answerInput,
      date_answered: Date.now(),
      answeredBy: firebase.auth().currentUser.email
    });
  document.getElementById("questionset").reset(); //clear all textareas with answer
  NotificationManager.success(
    "Your answer was successfully updated",
    "Question Updated",
    3500
  ); //show notification
}

function deletequestion(id) {
  //delete the question
  db.collection("questions")
    .doc(id)
    .delete();
  document.getElementById("questionset").reset(); //clear all textareas with answer
  NotificationManager.success(
    "Question was successfully deleted",
    "Question Deleted",
    3500
  ); //show notification
}
