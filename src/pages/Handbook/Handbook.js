import React from "react";
import Footer from "./footer";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LuLogo from "./LU_Logo.png";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NCAA from "./NCAA.png";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = {
  card: {
    maxWidth: 550
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

function Handbook(props) {
  const { classes } = props;
  return (
    <div>
      <h1
        style={{
          lineHeight: "1",
          letterSpacing: "-2px", // space between letters of -2 px
          padding: "5px", // padding around of 5 px
          fontSize: "80px", // size of the font 80 px
          color: "#b3a272", //color mustard yellow for the letters
          textShadow: "0px 2px 3px #555" // give a little shadow to the letters
        }}
      >
        Handbooks
      </h1>

      <hr />
      {/*
      This is the paragraph above the two handbook cards. Change the text or size of the text below
      */}
      <p style={{ fontSize: "24px", textAlign: "left", fontWeight: "300" }}>
        Lindenwood strives to keep it's athletes and their families familiarized
        with the rules and regulations Lindenwood and the NCAA or student life
        sports administrators require for all althletes. Down below are the two
        handbooks our lions need in order to stay linked with their sport!
      </p>
      {/*The break tag seperates the components without including a visible line through the page */}
      <br />

      <from
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        <div>
          {/*
          Cards are like containers that have various capabilities like including buttons, text, etc. 
          Each card is a seperate container but the ability to change the contents are down below
          */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia component="img" alt="LU" height="360" src={NCAA} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="h2"
                  style={{ color: "black" }}
                >
                  NCAA Handbook
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ExpansionPanel
                component="p"
                style={{ padding: "2px", margin: "20px", width: "340px" }}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    style={{
                      fontSize: "23px",
                      color: "#b3a272"
                    }}
                  >
                    {" "}
                    NCAA Sports
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "300",
                      letterSpacing: "-1px"
                    }}
                  >
                    <ul>
                      <li>Men's and Women's Basketball</li>
                      <li>Baseball</li>
                      <li>Men's and Women's Cross Country</li>
                      <li>Football</li>
                      <li>Men's and Women's Golf</li>
                      <li>Men's and Women's Lacrosse</li>
                      <li>Men's and Women's Soccer</li>
                      <li>Swimming and Diving</li>
                      <li>Tennis</li>
                      <li>Track and Field (Indoor and Outdoor)</li>
                      <li>Men's and Women's Volleyball</li>
                      <li>Men's Wrestling</li>
                      <li>Women 's Field Hockey</li>
                      <li>Gymnastics</li>
                      <li>Softball</li>
                      <li>Women's Wrestling</li>
                      <li>Baseball</li>
                      <li>Men's and Women's Cross Country</li>
                      <li>Football</li>
                      <li>Men's and Women's Golf</li>
                      <li>Men's and Women's Lacrosse</li>
                      <li>Men's and Women's Soccer</li>
                      <li>Swimming and Diving</li>
                      <li>Tennis</li>
                      <li>Track and Field (Indoor and Outdoor)</li>
                      <li>Men's and Women's Volleyball</li>
                      <li>Men's Wrestling</li>
                      <li>Women 's Field Hockey</li>
                      <li>Gymnastics</li>
                      <li>Softball</li>
                      <li>Women's Wrestling</li>
                    </ul>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Button
                size="small"
                href="/NCAA_handbook"
                target="__blank"
                style={{
                  color: "#b3a272",
                  backgroundColor: "#DCDCDC",
                  fontWeight: "bold"
                }}
              >
                Click here to see!
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia component="img" alt="LU" height="360" src={LuLogo} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="h2"
                  style={{ color: "black" }}
                >
                  Student Life Sports Handbook
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ExpansionPanel
                component="p"
                style={{ padding: "2px", margin: "20px", width: "340px" }}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    style={{
                      fontSize: "23px",
                      color: "#b3a272"
                    }}
                  >
                    {" "}
                    Student Life Sports
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "300",
                      letterSpacing: "-1px"
                    }}
                  >
                    <ul>
                      <li>Billiards</li>
                      <li>Men's and Women's Bowling</li>
                      <li>Cheerleading</li>
                      <li>Chess</li>
                      <li>Men's and Women's Cycling</li>
                      <li>Lion Line</li>
                      <li>Lionettes</li>
                      <li>Golden Line</li>
                      <li>Men's ice Hockey</li>
                      <li>Men's and Women's Olympic Weightlifting</li>
                      <li>Roller Hockey</li>
                      <li>Men's and Women's Rugby</li>
                      <li>Men's and Women's Shotgun Sport</li>
                      <li>Synchronized Swimming</li>
                      <li>Men's and Women's Water Polo</li>
                      <li>Women's Wrestling</li>
                    </ul>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Button
                size="small"
                href="https://lindenwoodlions.com/documents/2018/9/24/SLS_Student_Athlete_Handbook_SLS_.pdf"
                target="__blank"
                style={{
                  color: "#b3a272",
                  backgroundColor: "#DCDCDC",
                  fontWeight: "bold"
                }}
              >
                Click here to see!
              </Button>
            </CardActions>
          </Card>
        </div>
      </from>

      <div style={{ position: "relative", paddingBottom: "60px" }}>
        <Footer
          style={{ position: "absolute", left: "0", right: "0", bottom: "0" }}
        />
      </div>
    </div>
  );
}
Handbook.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Handbook);
