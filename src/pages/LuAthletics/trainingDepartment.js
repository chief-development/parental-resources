import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Footer from "./footer";
import NavLink from "./NavLink.js";
import photo1 from "./AthleticTrainingPhotos/Trainers.jpg";
import photo2 from "./AthleticTrainingPhotos/JakeLandals2.jpg";
import photo3 from "./AthleticTrainingPhotos/Lindenwood_5158.jpg";
import GridList from "@material-ui/core/GridList";

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
    border: "none",
    width: "75%"
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
        Athletic Training Department
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
        Athletic trainers have been recognized by the American Medical
        Association as an allied health care professional since 1990. Athletic
        trainers are certified health care professionals who collaborate with
        physicians and other health care professionals to optimize the
        participation and activity for patients and clients of all ages and
        skill levels, including young children, student-athletes, professional
        athletes, active adults, and military personnel. Athletic trainers
        provide prevention, examination, treatment, and rehabilitation of acute,
        subacute, and chronic illnesses and injuries. This commonly includes a
        wide range of conditions from mild ankle sprains to catastrophic head
        and neck injuries and mild illnesses to heat stroke.
      </p>
      <p className={classes.p}>
        Our mission, as the Lindenwood University Sports Medicine Team, is to
        provide our student-athletes the best health care possible with the
        highest standards. As an educational institution, we also strive to
        provide the most optimal learning environment for our athletic training
        students. Lindenwood University has over twenty certified athletic
        trainers and approximately fifty undergraduate athletic training
        students that are enrolled in our highly respected Athletic Training
        Program. Along with the team physicians, campus health services
        employees, local physical therapists, and chiropractors, we provide
        well-rounded health care for all student-athletes. To assist our staff,
        there are four very well equipped athletic training facilities on campus
        located in the Hyland Arena, Field House, Clubhouse, and the new Student
        Athlete Center (SAC).
      </p>
      <br />
      <br />
      <GridList className={classes.gridList} cols={3}>
        <img
          src={photo1}
          alt="Hunter Stadium"
          style={{ width: "300px", height: "200px" }}
        />
        <img
          src={photo2}
          alt="Hunter Stadium"
          style={{ width: "300px", height: "200px" }}
        />
        <img
          src={photo3}
          alt="Hunter Stadium"
          style={{ width: "300px", height: "200px" }}
        />
        ))}
      </GridList>
      <br />
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
        <NavLink to="/banned_drugs">
          <p style={{ fontSize: "19px" }}>
            {" "}
            <li> Banned Drugs </li>
          </p>
        </NavLink>
        <NavLink to="/drug_testing_policy">
          <p style={{ fontSize: "19px" }}>
            <li> Drug testing policy </li>
          </p>
        </NavLink>
        <NavLink to="/concussion_management_policy">
          <p style={{ fontSize: "19px" }}>
            <li> Concussion management policy </li>
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
