import React from "react";
import football from "./Football.jpg";
import random from "./Lion.jpg";
export default function HomePage() {
  return (
    <div>
      <h1
        style={{
          color: "#b6a16b",
          fontSize: "60px",
          textAlign: "center",
          lineHeight: "2",
          letterSpacing: "-2px",
          padding: "10px"
        }}
      >
        Parental Resource Center
      </h1>

      <br />
      <hr style={{ color: "#b6a16b" }} />

      <p
        style={{
          position: "relative",
          left: "23%",
          textAlign: "center",
          width: "650px",
          fontSize: "18px",
          margin: "40px",
          padding: "10px"
        }}
      >
        Welcome to Parental Resources! Lindenwood University aims to help both
        students and families when it comes to providing the necessary
        information for its future lions. This new addition to Lindenwood's
        growing website collection seeks to give relevant information to an
        athlete's parents and students. Be sure to check out our Frequently
        Asked Questions under the FAQ tab if you have any questions. And if your
        question is not included, feel free to contact us via the contact tab!
      </p>
      <div class="row">
        <div class="column">
          <img src={football} alt="New_Conference" width="500" height="450" />
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
