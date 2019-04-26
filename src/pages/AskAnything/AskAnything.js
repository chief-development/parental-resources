import React from "react";
import TextField from "@material-ui/core/TextField";
import "./ask.css";
import MenuItem from "@material-ui/core/MenuItem";
import { db } from "../../firebase/index";
import { Link } from "react-router-dom";
import Footer from "./footer";

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

export function sendQuestion(
  category,
  questionInput,
  askedBy_emailInput,
  askedBy_nameInput
) {
  const question = {
    question: questionInput,
    answer: "",
    date_asked: Date.now(),
    rank: 0,
    askedBy_email: askedBy_emailInput,
    category: category,
    askedBy_name: askedBy_nameInput,
    date_answered: null,
    answeredBy: null
  };

  db.collection("questions").add(question);
}

export default function AskAnything() {
  const [questionInput, setquestionInput] = React.useState("");
  const [askedBy_emailInput, setaskedBy_emailInput] = React.useState("");
  const [askedBy_nameInput, setaskedBy_nameInput] = React.useState("");

  const isEnabled =
    askedBy_emailInput.length > 0 &&
    askedBy_nameInput.length > 0 &&
    questionInput.length > 0;

  const [values, setValues] = React.useState({
    categories: "Academic Success"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="askForm-bg">
      <div className="askForm">
        <h3
          style={{
            fontSize: "60px",
            color: "#b3a272",
            lineHeight: "2",
            letterSpacing: "-2px",
            textShadow: "0px 2px 3px #555",
            textAlign: "center"
          }}
        >
          Contact Us
        </h3>
        <br />
        <h4
          style={{
            textAlign: "center",
            fontStretch: "1px",
            fontSize: "30px",
            color: "#b3a272"
          }}
        >
          If you have any questions, feel free to get in touch with us!
        </h4>

        <hr
          style={{ backgroundColor: "#b6a16b", borderTop: "1px double white" }}
        />

        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            color: "#b3a272"
          }}
        >
          {" "}
          Please provide the information requested.
        </p>

        <form noValidate>
          <label
            style={{ color: "#b3a272", fontSize: "18px", fontWeight: "100" }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="inputs-ask"
            placeholder="Your name.."
            required
            value={askedBy_nameInput}
            onChange={event => {
              const value = event.target.value;
              setaskedBy_nameInput(value);
            }}
          />

          <label
            style={{ color: "#b3a272", fontSize: "18px", fontWeight: "100" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="inputs-ask"
            placeholder="Your email"
            required
            value={askedBy_emailInput}
            onChange={event => {
              const value = event.target.value;
              setaskedBy_emailInput(value);
            }}
          />

          <TextField
            id="category"
            select
            label="Select"
            value={values.categories}
            onChange={handleChange("categories")}
            helperText="Please select a category"
            margin="normal"
            variant="outlined"
            style={{
              backgounrdColor: "white"
            }}
          >
            {categories.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <br />

          <label
            style={{ color: "#b3a272", fontSize: "18px", fontWeight: "100" }}
          >
            Question
          </label>
          <textarea
            className="inputs-ask"
            id="subject"
            name="subject"
            placeholder="Write something.."
            required
            value={questionInput}
            onChange={event => {
              const value = event.target.value;
              setquestionInput(value);
            }}
          />

          <br />
          <Link to={"/submitted"} style={{ textDecoration: "none" }}>
            <button
              disabled={!isEnabled}
              onClick={() =>
                sendQuestion(
                  values.categories,
                  questionInput,
                  askedBy_emailInput,
                  askedBy_nameInput
                )
              }
              className="ask-button"
              style={{
                position: "relative",
                left: "40%",
                width: "100px",
                height: "60px",
                color: "white"
              }}
            >
              Submit
            </button>
          </Link>

          <br />
        </form>
      </div>
      <Footer />
    </div>
  );
}
