import React from "react";
import "./HomePage.css";

import Footer from "../LuAthletics/footer";

export default function HomePage() {
  return (
    <div>
      <h1
        style={{
          lineHeight: "2",
          letterSpacing: "-2px",
          padding: "5px",
          fontSize: "80px",
          color: "#b3a272",
          textShadow: "0px 2px 3px #555",
          textAlign: "center"
        }}
      >
        Parental Resource Center
      </h1>

      <hr style={{ color: "#b6a16b" }} />
      <div className="HomeBackground">
        <p
          style={{
            position: "relative",
            left: "23%",
            textAlign: "center",
            width: "690px",
            fontSize: "19px",
            margin: "20px",
            padding: "10px"
          }}
        >
          Welcome to Parental Resources! Lindenwood University aims to help both
          students and families when it comes to providing the necessary
          information for its future lions. This new addition to Lindenwood's
          growing website collection seeks to give relevant information to an
          athlete's parents and students. We want to connect to our future lions
          and their parents. Be sure to check out our Frequently Asked Questions
          under the FAQ tab if you have any questions. And if your question is
          not included, feel free to contact us via the contact tab!
        </p>
      </div>

      <Footer />
    </div>
  );
}
