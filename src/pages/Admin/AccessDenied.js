import React from "react";

export default function AccessDenied() {
  return (
    <div className="accessDenied">
      {/*Page when you sign Out from the portal*/}
      <br />
      <h4
        style={{
          textAlign: "center",
          fontStretch: "1px",
          fontSize: "25px"
        }}
      >
        Please Log In
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
