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
          marginTop: "-20px",
          flex: "1"
        }}
      >
        Do's and Dont's/ Rule of Thumb
      </h1>
      <br />
      <hr
      //separation line
      />

      {/*Do's and Don'ts pdf*/}
      <object
        width="100%"
        height="600px"
        data="https://s3.amazonaws.com/sidearm.sites/lindenwoodlions.com/documents/2018/6/21/Booster_Brochure.pdf?date=1529591041#view=FitH@toolbar=1"
        type="application/pdf"
        class="embedded"
        internalinstanceid="824"
      >
        <p>Your document is ready to be downloaded.</p>
      </object>

      <div style={{ width: "170px" }}>
        <NavLink to="/compliance">
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
