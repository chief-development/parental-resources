import React from "react";
import "./ask.css";
import MenuItem from "@material-ui/core/MenuItem";

export default function AfterSubmit() {
  return (
    <div className="askForm">
      <h3
        style={{
          textAlign: "center",
          fontStretch: "1px",
          fontSize: "45px"
        }}
      >
        Contact Us
      </h3>
      <br />
      <h4
        style={{
          textAlign: "center",
          fontStretch: "1px",
          fontSize: "25px",
          color: "#FBB904"
        }}
      >
        If you have any questions, feel free to get in touch with us!
      </h4>

      <hr
        style={{ backgroundColor: "#FBB904", borderTop: "px double #FBB904" }}
      />

      <br />

      <p style={{ fontSize: "18px", textAlign: "center" }}>
        Thank you for your question. Your question was sent and awaiting an
        answer.{" "}
      </p>

      <br />
    </div>
  );
}
