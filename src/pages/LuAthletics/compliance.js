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
        Compliance
      </h1>

      <hr
      //separation line
      />

      <p
        className={classes.p}
        style={{
          //style for the paragraph

          paddingTop: "40px" // set padding for the top
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
      {/*pdf object of the drug testing policy */}
      <object
        width="100%"
        height="600px"
        data="https://s3.amazonaws.com/sidearm.sites/lindenwoodlions.com/documents/2014/4/8/Drug Testing Policy.pdf?date=1450368416#view=FitH@toolbar=1"
        type="application/pdf"
        class="embedded"
        internalinstanceid="738"
      >
        <p>Your document is ready to be downloaded.</p>
      </object>
      {/*pdf object of the banned substance list*/}
      <object
        width="100%"
        height="600px"
        data="https://s3.amazonaws.com/sidearm.sites/lindenwoodlions.com/documents/2017/8/9/2017_18_NCAA_Banned_Drugs_20170605.pdf?date=1502296383#view=FitH@toolbar=1"
        type="application/pdf"
        class="embedded"
        internalinstanceid="756"
      >
        <p>Your document is ready to be downloaded.</p>
      </object>
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

      <a href="https://lindenwoodlions.com/sb_output.aspx?form=5">
        Click here to fill out an athletics form
      </a>
      <div style={{ width: "150px" }}>
        <NavLink to="/athletics">Go Back!</NavLink>
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
