import React from "react";
import MenuItem from "@material-ui/core/MenuItem";

export default function AccessDenied() {
  return (
    <div className="accessDenied">
      <br />
      <h4
        style={{
          textAlign: "center",
          fontStretch: "1px",
          fontSize: "25px"
        }}
      >
        Access Denied
      </h4>

      <hr
        style={{ backgroundColor: "#b6a16b", borderTop: "px double #b6a16b" }}
      />

      <p style={{ fontSize: "18px", textAlign: "center" }}>
        {" "}
        You need to sign in to view this page.
      </p>
    </div>
  );
}
