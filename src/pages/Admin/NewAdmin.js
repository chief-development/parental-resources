import React from "react";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const categories = [
  {
    value: "AS",
    label: "Academic Success"
  },
  {
    value: "AC",
    label: "Athletic Communication"
  },
  {
    value: "AP",
    label: "Athletic Performance"
  },
  {
    value: "AT",
    label: "Athletic Training"
  },
  {
    value: "CM",
    label: "IC. NCAA Compliance"
  },
  {
    value: "GE",
    label: "GameDay, Events and Operations"
  },
  {
    value: "NR",
    label: "NCAA Rules"
  },
  {
    value: "other",
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

export default function NewAdmin() {
  const [values, setValues] = React.useState({
    categories: "AS",
    sorting: "mostRes"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

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
            Questions
          </Link>
          <Link
            to="/login"
            style={{
              margin: "20px",
              color: "#b3a272"
            }}
          >
            New Admin
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
        Hello World
      </div>
    </div>
  );
}
