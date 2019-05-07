import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Footer from "./footer";
import NavLink from "./NavLink.js";

const styles = {
  p: {
    left: "23%",
    textAlign: "left", // set the text to the center
    fontSize: "19px", // set size font of the letters
    margin: "0px", // set margin
    paddingTop: "20px", // set padding for the top
    paddingLeft: "20px"
  }
};

function HomePage(props) {
  const { classes } = props;
  return (
    <div>
      {/*Header for Compliance*/}
      <h1
        style={{
          //style for the header of the home page
          lineHeight: "1",
          letterSpacing: "-2px", // space between letters of -2 px
          padding: "5px", // padding around of 5 px
          fontSize: "80px", // size of the font 80 px
          color: "#b3a272", //color mustard yellow for the letters
          textShadow: "0px 2px 3px #555", // give a little shadow to the letters
          marginTop: "-20px",
          flex: "1"
        }}
      >
        Compliance
      </h1>
      <br />
      <hr
      //separation line
      />

      <p
        className={classes.p}
        style={{
          //style for the paragraph

          paddingTop: "20px" // set padding for the top
        }}
      >
        Lindenwood University Athletics is dedicated and obligated to the
        principle of institutional control in operating its athletics program in
        a manner that aligns and is consistent with NCAA, MIAA, and university
        rules and regulations.
      </p>
      <p className={classes.p}>
        This obligation to abide by these rules and regulations is both
        institutional and individual. As a university, Lindenwoood’s athletics
        programs are responsible for: educating coaches, student-athletes,
        staff, and other athletics interests; to have operating systems in place
        to provide regulation to stay within permissible means; and for
        reporting any violations that may occur. It is an individual’s
        responsibility to have working knowledge of NCAA bylaws, act within
        these regulations, and report any violations.
      </p>
      <p
        className={classes.p}
        style={{
          //style for the paragraph
          fontWeight: "bold"
        }}
      >
        Lindenwood University Compliance Staff:
      </p>
      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        <p className={classes.p} style={{ maxWidth: "400px" }}>
          Anna Girdwood: Assistant Athletics Director for Compliance Office
          Phone: (636) 949-4654 Email: agirdwood@lindenwood.edu
        </p>
        <p className={classes.p} style={{ maxWidth: "400px" }}>
          Massey Arnold: Assistant Director for Compliance Office Phone: (636)
          255-2216 Email: marnold@lindenwood.edu
        </p>
      </form>

      <br />
      {/*More options to navigate*/}
      <p className="more-links">
        <h3
          style={{
            fontWeight: "400",
            fontSize: "28px",
            textAlign: "center",
            margin: "6px",
            textDecoration: "underline"
          }}
        >
          Other Options
        </h3>
        <NavLink to="/boostersBrochure">
          <p style={{ fontSize: "19px" }}>
            {" "}
            <li> Do's and Dont's/ Rule of Thumb </li>
          </p>
        </NavLink>
        <NavLink to="/trainingDepartment">
          <p style={{ fontSize: "19px" }}>
            <li> Athletic Training </li>
          </p>
        </NavLink>
        <NavLink to="/insurance">
          <p style={{ fontSize: "19px" }}>
            <li> Insurance policy </li>
          </p>
        </NavLink>
      </p>
      <br />

      <div style={{ width: "300px" }}>
        <NavLink to="/athletics">
          <p className="m-button">Go Back!</p>
        </NavLink>
      </div>
      <div style={{ position: "relative", paddingBottom: "60px" }}>
        <Footer
          style={{ position: "absolute", left: "0", right: "0", bottom: "0" }}
        />
      </div>
    </div>
  );
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(HomePage);
