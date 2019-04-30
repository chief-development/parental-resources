import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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
          textAlign: "center", // text set to the center
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
    </div>
  );
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(HomePage);
