import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Athletics.css";
import picture from "./story.jpg";
import fball from "./LUFootball.jpg";
import saac from "./SAAC.jpg";
import NavLink from "./NavLink.js";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    backgroundColor: "transparent"
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div>
        <h1
          style={{
            //style for the header of the home page
            lineHeight: "1",
            marginBottom: "13px",
            marginTop: "13px",
            letterSpacing: "-2px", // space between letters of -2 px
            padding: "10px", // padding around of 5 px
            fontSize: "80px", // size of the font 80 px
            color: "#b3a272", //color mustard yellow for the letters
            textShadow: "0px 2px 3px #555", // give a little shadow to the letters
            textAlign: "left", // text set to the center
            flex: "1"
          }}
        >
          Lindenwood Athletics
        </h1>
      </div>

      <hr />
      <img
        src={fball}
        alt="Hunter Stadium"
        style={{ width: "100%", height: "100%" }}
      />
      <Grid
        container
        spacing={24}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px"
            }}
          >
            <p
              style={{
                fontWeight: "300",
                fontSize: "18px",
                textAlign: "justify",
                margin: "5px"
              }}
            >
              The{" "}
              <a
                href="https://lindenwoodlions.com"
                target="_blank"
                style={{ color: "black" }}
              >
                {" "}
                <span
                  className="top-headlines"
                  style={{ textDecoration: "underline" }}
                >
                  Lindenwood University Athletics
                </span>
              </a>{" "}
              Department has grown significantly over the past two decades,
              going from just a few sports to having one of the largest
              Athletics Departments in the nation. From 1999-2011, Lindenwood
              had one of the top all-around Athletics Departments in the NAIA.
              In 2010, the University announced that it was applying for NCAA
              Division II membership and its application was accepted later that
              summer. After two candidacy and one provisional year, Lindenwood
              became a full NCAA Division II member during the 2013-14 school
              year. GO LIONS!
            </p>
          </Paper>
        </Grid>

        <Grid container={12} />
        <Grid item xs={12} style={{ flexWrap: "wrap" }}>
          <Paper className={classes.paper} style={{ borderRadius: "15px" }}>
            <h3
              style={{
                fontWeight: "400",
                fontSize: "28px",
                textAlign: "center",
                margin: "5px",
                textDecoration: "underline",
                paddingLeft: "5px"
              }}
            >
              Mission Statement
            </h3>
            <p
              style={{
                fontWeight: "300",
                fontSize: "18px",
                textAlign: "justify",
                margin: "5px"
              }}
            >
              It is the mission of intercollegiate sports at Lindenwood
              University to advance learning, enliven campus life, develop
              leadership skills, and foster the personal growth of the student
              athlete through offering a high quality athletics program.
              Athletic department personnel strive to provide model programs
              that develop meaningful standards of scholarship, athletic
              performance, leadership, community service, and sportsmanship.
              Through sports Lindenwood seeks to contribute to a sense of
              collegiate identity and positive perception in the community. The
              Athletics Department shall strive for excellence in the
              competitive environment in accord with the philosophy, rules, and
              regulations of the NCAA and other sports governing bodies in which
              Lindenwood has membership.
            </p>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ borderRadius: "15px" }}>
            <h3
              style={{
                fontWeight: "400",
                fontSize: "28px",
                textAlign: "center",
                margin: "6px",
                textDecoration: "underline"
              }}
            >
              Student Life Sports
            </h3>
            <p
              style={{
                fontWeight: "300",
                fontSize: "18px",
                textAlign: "center"
              }}
            >
              Lindenwood also offers a variety of sports outside of the NCAA,
              most of which are among the top programs in their respective
              national and conference organizations. For information on
              Lindenwood’s Student Life Sports,{" "}
              <a
                href="https://lindenwoodlionssls.com/sports/2009/7/6/aboutLU.aspx?tab=aboutlindenwoodathletics"
                target="_blank"
              >
                <span className="top-headlines">click here.</span>
              </a>
            </p>
            <p style={{ textAlign: "center" }}>
              <img src={saac} alt="LU SAAC" className="photo-saac" />
            </p>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ borderRadius: "15px" }}>
            <h3>Trying to be a new Lindenwood Lion Athlete?</h3>
            <p
              style={{
                fontWeight: "300",
                fontSize: "18px",
                textAlign: "justify",
                margin: "5px"
              }}
            >
              Lindenwood has 27 sports competing at the NCAA level. All 21 NAIA
              championship sports made the transition to the NCAA. These include
              baseball, men’s and women’s basketball, men’s and women’s cross
              country, football, men’s and women’s golf, men’s and women’s
              soccer, softball, men’s and women’s swimming and diving, men’s and
              women’s tennis, men’s and women’s indoor and outdoor track and
              field, women’s volleyball, and men’s wrestling. Six other sports
              were also added as NCAA sports. These are field hockey,
              gymnastics, women’s ice hockey, men’s and women’s lacrosse, and
              men’s volleyball. Twenty-four of these sports compete at the NCAA
              Division II level. Gymnastics, women’s ice hockey, and men’s
              volleyball compete at the National Collegiate level, which is made
              up mostly of NCAA Division I programs.
            </p>
            <p
              style={{
                fontWeight: "400",
                fontSize: "18px",
                textAlign: "center",
                margin: "5px"
              }}
            >
              Fill out our Recruiting form by{" "}
              <a href="https://lindenwoodlions.com/sb_output.aspx?form=3">
                <span className="top-headlines">Clicking Here!</span>
              </a>
            </p>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ borderRadius: "15px" }}>
            <img src={picture} alt="Banner" className="photo-story" />
            <h3 style={{ marginTop: "25px", marginBottom: "10px" }}>
              Look at out Stories of our Athletes in Lindenwood University
            </h3>
            <a
              className="top-headlines"
              href="https://lindenwoodlions.com/sports/2018/2/8/thisismystory.aspx"
              target="_blank"
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "300"
                }}
              >
                Read Stories about our Lions!
              </p>
            </a>
          </Paper>
        </Grid>
      </Grid>
      <Paper className="links">
        <h3 style={{ marginTop: "25px", marginBottom: "10px" }}>
          Other options
        </h3>
        <NavLink to="/compliance">Compliance</NavLink>
        <NavLink to="/trainingDepartment">Athletics Training</NavLink>
        <NavLink to="/insurance">Insurance policy</NavLink>
      </Paper>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
