import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { db } from "../../firebase/index";
import Button from "@material-ui/core/Button";
import "./admin.css";
import moment from "moment";
import firebase from "firebase";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

/*
const categories = [
  {
    value: "Academic Success",
    label: "Academic Success"
  },
  {
    value: "Athletic Communication",
    label: "Athletic Communication"
  },
  {
    value: "Athletic Performance",
    label: "Athletic Performance"
  },
  {
    value: "Athletic Training",
    label: "Athletic Training"
  },
  {
    value: "IC. NCAA Compliance",
    label: "IC. NCAA Compliance"
  },
  {
    value: "GameDay, Events and Operations",
    label: "GameDay, Events and Operations"
  },
  {
    value: "NCAA Rules",
    label: "NCAA Rules"
  },
  {
    value: "Other",
    label: "Other"
  }
];

const sorting = [
  {
    value: "mostRes",
    label: "Most Recent"
  },
  {
    value: "mostPop",
    label: "Most Popular"
  }
];

*/

function signout() {
  firebase.auth().signOut();
  window.location = "/login";
}

export default function AnsweredQuestions() {
  {
    /*       
    const [values, setValues] = React.useState({
    categories: "Academic Success",
    sorting: "mostRes"
  });


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
*/
  }

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

  //select questions that already have some answer and create snapshot
  React.useEffect(
    () => {
      //db.collection("questions").where('show_on_web', '==',true)
      db.collection("questions")
        .where("answer", ">", "")
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
          fontSize: "80px",
          color: "#b3a272",
          lineHeight: "2",
          letterSpacing: "-2px",
          textShadow: "0px 2px 3px #555",
          textAlign: "left"
        }}
      >
        Admin Portal
        <span
          style={{
            fontSize: "20px",
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
      </h1>

      <Divider />

      <div
        class="container"
        style={{
          width: "80%",
          backgroundColor: "white"
        }}
      >
        {/*
        <TextField
          id="category"
          select
          label="Select"
          value={values.categories}
          onChange={handleChange("categories")}
          helperText="Filter Question by Category"
          margin="normal"
          variant="outlined"
          style={{ margin: "40px" }}
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="sorting"
          select
          label="Select"
          value={values.sorting}
          onChange={handleChange("sorting")}
          helperText="Sort Question by:"
          margin="normal"
          variant="outlined"
          style={{ margin: "40px" }}
        >
          {sorting.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <SearchIcon
          style={{
            color: "#b3a272",
            position: "relative",
            left: "4%",
            height: "20px",
            width: "30px"
          }}
        />
        <InputBase placeholder="Search…" style={{ margin: "40px" }} />

        <Button
          variant="outlined"
          color="black"
          style={{
            height: "50px",
            margin: "40px"
          }}
        >
          Go
        </Button>
        
        */}

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
                  {question}
                </p>
                <label style={{ fontSize: "20px" }}>Answer: </label>
                <textarea
                  id="answertextarea"
                  name="answertextarea"
                  defaultValue={answer}
                  onChange={event => {
                    setanswerInput(event.target.value); //save the text from textarea
                  }}
                />

                <Button
                  variant="extendedFab"
                  className="button-admin"
                  onClick={() => deletequestion(keys[index])}
                  style={{ margin: "4px" }}
                >
                  Delete Question
                </Button>
                <Button
                  variant="extendedFab"
                  className="button-admin"
                  onClick={() => changeanswerquestion(answerInput, keys[index])}
                  style={{ margin: "4px" }}
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
    </div>
  );
}

export function changeanswerquestion(answerInput, id) {
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
    3000
  );
}

export function deletequestion(id) {
  //delete the question
  db.collection("questions")
    .doc(id)
    .delete();
  document.getElementById("questionset").reset(); //clear all textareas with answer
  NotificationManager.success(
    "Question was successfully deleted",
    "Question Deleted",
    3000
  );
}
