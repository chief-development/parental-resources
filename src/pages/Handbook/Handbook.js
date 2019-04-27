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
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const styles = {
  card: {
    maxWidth: 500
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
          textAlign: "center"
        }}
      >
        Handbooks
      </h1>
      <p style={{ fontSize: "20px", textAlign: "center" }}>
        Handbooks for the NCAA and student Life Sport.
      </p>

      <br />
      <from
        cols={2}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden"
        }}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia component="img" alt="LU" height="140" src={LuLogo} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: "#b3a272" }}
              >
                NCAA Handbook
              </Typography>
              <Typography component="p">
                <li>Fooball</li>
                <li>Hockey</li>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              href="https://lindenwoodlions.com/documents/2018/9/25/NCAA_2018_19_Student_Athlete_Handbook.pdf"
              target="__blank"
              style={{ color: "#b3a272" }}
            >
              Click here to see!
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="LU"
              objectFit="cover"
              height="140"
              src={LuLogo}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: "#b3a272" }}
              >
                Student Life Sports Handbook
              </Typography>
              <Typography component="p">
                <li>Water Polo</li>
                <li>Rugby</li>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              href="https://lindenwoodlions.com/documents/2018/9/24/SLS_Student_Athlete_Handbook_SLS_.pdf"
              target="__blank"
              style={{ color: "#b3a272" }}
            >
              Click here to see!
            </Button>
          </CardActions>
        </Card>
      </from>

      <Footer />
    </div>
  );
}
Handbook.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Handbook);
