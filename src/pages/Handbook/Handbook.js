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
          //style for the header
          fontSize: "80px",
          color: "#b3a272",
          lineHeight: "2",
          letterSpacing: "-2px",
          textShadow: "0px 2px 3px #555",
          textAlign: "center",
          marginTop: "-50px"
        }}
      >
        Handbooks
      </h1>
      <p style={{ fontSize: "24px", textAlign: "center", fontWeight: "300" }}>
        Handbooks for the NCAA and student Life Sport.
      </p>
      <br />
      <from
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          height: "1000px"
        }}
      >
        <div>
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
                  <Typography style={{ fontSize: "18px" }}>
                    <ul>
                      <li>Fooball</li>
                      <li>Hockey</li>
                    </ul>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Button
                size="small"
                href="https://lindenwoodlions.com/documents/2018/9/25/NCAA_2018_19_Student_Athlete_Handbook.pdf"
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
                    Non-NCAA Sports
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{ fontSize: "18px" }}>
                    <ul>
                      <li>Fooball</li>
                      <li>Hockey</li>
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
