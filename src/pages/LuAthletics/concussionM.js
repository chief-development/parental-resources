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
    paddingTop: "20px" // set padding for the top
  },
  gridList: {
    flexWrap: "wrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  paper: {
    flexWrap: "wrap",
    border: "none"
  }
};

function HomePage(props) {
  const { classes } = props;
  return (
    <div>
      <h1
        style={{
          //style for the header of the home page
          lineHeight: "1",
          letterSpacing: "-2px", // space between letters of -2 px
          padding: "5px", // padding around of 5 px
          fontSize: "80px", // size of the font 80 px
          color: "#b3a272", //color mustard yellow for the letters
          textShadow: "0px 2px 3px #555", // give a little shadow to the letters
          textAlign: "left", // text set to the center
          flex: "1"
        }}
      >
        Concussion Management Policy
      </h1>
      <br />
      <hr
      //separation line
      />

      {/*pdf object of the concussion management policy and plan */}
      <object
        width="100%"
        height="600px"
        data="https://s3.amazonaws.com/sidearm.sites/lindenwoodlions.com/documents/2017/8/9/LU_Concussion_Management_Policy_and_Plan.pdf?date=1502296382#view=FitH@toolbar=1"
        type="application/pdf"
        class="embedded"
        internalinstanceid="719"
        flex="1"
      >
        <p>Your document is ready to be downloaded.</p>
      </object>
      <br />
      <br />

      <br />
      <div style={{ width: "300px" }}>
        <NavLink to="/trainingDepartment">
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
