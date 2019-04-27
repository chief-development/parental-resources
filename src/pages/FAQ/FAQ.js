import React from "react";
import { db } from "../../firebase/index";
import moment from "moment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Footer from "./footer";
import "./faq.css";

export default function FAQ() {
  const [keywordInput, setKeywordInput] = React.useState("");

  const [values, setValues] = React.useState({
    categories: "Academic Success",
    sorting: "mostRes"
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
          fontSize: "80px",
          color: "#b3a272",
          lineHeight: "2",
          letterSpacing: "-2px",
          textShadow: "0px 2px 3px #555",
          textAlign: "left"
        }}
      >
        FAQ
      </h1>
      {/*
      <SearchIcon
        style={{
          color: "#b3a272",
          position: "relative",
          left: "33%",
          top: "3%",
          height: "25px",
          width: "30px"
        }}
      />
			*/}
      <InputBase
        placeholder="Search…"
        style={{ margin: "10px", width: "300px" }}
        value={keywordInput}
        onChange={event => {
          const value = event.target.value;
          setKeywordInput(value);
        }}
      />

      <Button
        variant="outlined"
        color="black"
        onClick={() => console.log(keywordInput)}
        style={{
          height: "40px",
          margin: "-3px"
        }}
      >
        Go
      </Button>

      <hr />

      {questions.map((q, index) => {
        const { question, date_asked, category, answer } = q;

        /* transform date into readable format */
        const formattedDate = moment(questions[index].date_asked).format("ll");

        /* print set of answered questions */
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
      })}
      <Footer />
    </div>
  );
}
