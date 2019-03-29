import React from "react";
import football from "./Football.jpg";
import random from "./Lion.jpg";
export default function HomePage() {
  return (
    <div className="Header">
      <h1
        style={{
          color: "#111",
          fontSize: "50px",
          textAlign: "center",
          lineHeight: "2",
          letterSpacing: "-2px",
          fontFamily: "Lato",
          padding: "20px"
        }}
      >
        Lindenwood University
      </h1>

      <br />
      <hr />

      <p className="textContainer">
        Welcome to Parental Resources! Lindenwood University aims to help both
        students and families when it comes to providing the necessary
        information for its future lions. This new addition to Lindenwood's
        growing website collection seeks to give relevant information to an
        athlete's parents. Be sure to check out the Frequently Asked Questions
        under the FAQ tab if you have any questions. And if your question is not
        included, feel free to contact us via the contact tab!
      </p>
      <div class="row">
        <div class="column">
          <img src={football} alt="New_Conference" width="600" height="450" />
        </div>
        <div class="column">
          <img
            src={random}
            alt="content"
            width="300"
            height="400"
            align="left"
          />
        </div>
      </div>
    </div>
  );
}
