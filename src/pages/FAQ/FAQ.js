import React from "react";
import { db } from "../../firebase/index";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Footer from "./footer";
import "./faq.css";

//Array for the Categories the user can select
const categories = [
  {
    value: "",
    label: "-- SELECT --"
  },
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

export default function FAQ() {
  //Variable for KeyWord Inputted by user
  const [keywordInput, setKeywordInput] = React.useState("");

  let searchindex = 0; //index for searching through q/a and searching for searched string

  const [values, setValues] = React.useState({
    categories: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [questions, setQuestions] = React.useState([]);

  //select questions that has an answer and create snapshot
  React.useEffect(() => {
    //db.collection("questions").where('show_on_web', '==',true)
    db.collection("questions")
      .where("answer", ">", "")
      .onSnapshot(snapshot => {
        let q = [];
        snapshot.forEach(doc => {
          q.push(doc.data());
        });
        setQuestions(q);
      });
  }, []);

  return (
    <div>
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
        FAQ
      </h1>
      <hr />

      {/* Text Field to Search by Keyword, below with they styling and args*/}
      <TextField
        id="outlined-search"
        label="Seach By Keyword"
        type="search"
        margin="normal"
        variant="outlined"
        style={{
          margin: "5px",
          width: "270px",
          backgroundColor: "white"
        }}
        value={keywordInput}
        onChange={event => {
          const value = event.target.value;
          setKeywordInput(value);
        }}
      />
      {/*Text Field with categories*/}
      <TextField
        id="category"
        select
        label="Select Category"
        value={values.categories}
        onChange={handleChange("categories")}
        variant="outlined"
        style={{
          margin: "5px",
          marginLeft: "20px",
          backgroundColor: "white",
          width: "270px"
        }}
      >
        {/*Maps the categories to the TextField*/}
        {categories.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      {questions.map((q, index) => {
        const { question, date_asked, category, answer } = q;

        /* transform date into readable format */
        const formattedDate = moment(questions[index].date_asked).format("ll");

        var ans;
        var ques;
        var askdate;
        var cat;

        {
          /*Searches the questions by the category chosen by user*/
        }
        if (values.categories != "") {
          if (
            questions[searchindex].category == values.categories &&
            (questions[searchindex].question
              .toLowerCase()
              .includes(keywordInput.toLowerCase()) ||
              questions[searchindex].answer
                .toLowerCase()
                .includes(keywordInput.toLowerCase()))
          ) {
            ans = questions[searchindex].answer;
            ques = questions[searchindex].question;
            askdate = questions[searchindex].date_asked;
            cat = questions[searchindex].category;

            /* transform date into readable format */
            const formattedaskdate = moment(askdate).format("ll");

            searchindex++;

            //print the q/a set
            return (
              <div className="container">
                <p className="date-text">
                  <span style={{ fontWeight: "600" }}>Date: </span>{" "}
                  <span style={{ fontWeight: "300" }}>
                    {formattedaskdate}&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <p className="category-text">
                    <span style={{ fontWeight: "600" }}>Category: </span>{" "}
                    <span style={{ fontWeight: "300" }}>
                      {cat}&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </p>
                </p>

                <p className="question-text">
                  <span style={{ fontWeight: "600" }}> Q: </span>
                  <span style={{ fontWeight: "300" }}>{ques}</span>
                </p>
                <hr style={{ borderTop: "1px dashed #8c8b8b" }} />
                <p className="answer-text">
                  <span style={{ fontWeight: "600" }}>A: </span>{" "}
                  <span style={{ fontWeight: "300" }}>{ans}</span>
                </p>
                <br />
                <hr />
              </div>
            );
          }
          {
            /*Searches by the key word inputted by user*/
          }
        } else if (keywordInput != "") {
          if (
            questions[searchindex].question
              .toLowerCase()
              .includes(keywordInput.toLowerCase()) ||
            questions[searchindex].answer
              .toLowerCase()
              .includes(keywordInput.toLowerCase())
          ) {
            ans = questions[searchindex].answer;
            ques = questions[searchindex].question;
            askdate = questions[searchindex].date_asked;
            cat = questions[searchindex].category;

            /* transform date into readable format */
            const formattedaskdate = moment(askdate).format("ll");

            searchindex++;

            //print the q/a set
            return (
              <div className="container">
                <p className="date-text">
                  <span style={{ fontWeight: "600" }}>Date: </span>{" "}
                  <span style={{ fontWeight: "300" }}>
                    {formattedaskdate}&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <p className="category-text">
                    <span style={{ fontWeight: "600" }}>Category: </span>{" "}
                    <span style={{ fontWeight: "300" }}>
                      {cat}&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </p>
                </p>

                <p className="question-text">
                  <span style={{ fontWeight: "600" }}> Q: </span>
                  <span style={{ fontWeight: "300" }}>{ques}</span>
                </p>
                <hr style={{ borderTop: "1px dashed #8c8b8b" }} />
                <p className="answer-text">
                  <span style={{ fontWeight: "600" }}>A: </span>{" "}
                  <span style={{ fontWeight: "300" }}>{ans}</span>
                </p>
                <br />
                <hr />
              </div>
            );
          }
        } else {
          /* print set of answered questions when nothing in searchbox */
          return (
            <div className="container">
              <p className="date-text">
                <span style={{ fontWeight: "600" }}>Date: </span>{" "}
                <span style={{ fontWeight: "300" }}>
                  {formattedDate} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <p className="category-text">
                  <span style={{ fontWeight: "600" }}>Category: </span>{" "}
                  <span style={{ fontWeight: "300" }}>
                    {category}&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </p>
              </p>

              <p className="question-text">
                <span style={{ fontWeight: "600" }}> Q: </span>
                <span style={{ fontWeight: "300" }}>{question}</span>
              </p>
              <hr style={{ borderTop: "1px dashed #8c8b8b" }} />
              <p className="answer-text">
                <span style={{ fontWeight: "600" }}>A: </span>{" "}
                <span style={{ fontWeight: "300" }}>{answer}</span>
              </p>
              <br />
              <hr />
            </div>
          );
        }
        searchindex++;
      })}
      {/*Footer in FAQ page*/}
      <Footer />
    </div>
  );
}
