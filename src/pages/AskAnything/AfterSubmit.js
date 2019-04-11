import React from "react";
import "./ask.css";
import MenuItem from "@material-ui/core/MenuItem";

export default function AfterSubmit() {
  return (
    <div className="askForm">
      <h3
        style={{
          fontSize: "65px",
          textAlign: "center",
          fontStretch: "1px",
          color: "#b6a16b"
        }}
      >
        Contact Us
      </h3>
      <br />
      <h4
        style={{
          textAlign: "center",
          fontStretch: "1px",
          fontSize: "25px"
        }}
      >
        If you have any questions, feel free to get in touch with us!
      </h4>

      <hr
        style={{ backgroundColor: "#b6a16b", borderTop: "px double #b6a16b" }}
      />

      <p style={{ fontSize: "18px", textAlign: "center" }}>
        {" "}
        Than you for your question. Your question is awaiting an answer.
      </p>
    </div>
  );
}
