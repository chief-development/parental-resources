import React from "react";
import "./HomePage.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import oneR from "./oneRoar.jpg";
import Footer from "../LuAthletics/footer";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Camera from "@material-ui/icons/CameraAlt";
import Avatar from "@material-ui/core/Avatar";
import { SocialIcon } from "react-social-icons";
import spiritShop from "./Background.jpg";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  card: {
    maxWidth: 750
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    backgroundColor: "transparent"
  }
});

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
          textAlign: "left" // text set to the center
        }}
      >
        Parental Resource Center
      </h1>

      <hr
      //separation line
      />

      <from
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          height: "1000px"
        }}
      >
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              borderRadius: "20px",
              marginBottom: "20px"
            }}
          >
            <h1
              style={{
                textDecoration: "underline",
                fontWeight: "300",
                color: "#b3a272",
                textAlign: "center",
                margin: "15px"
              }}
            >
              Welcome Lindenwood Parents!
            </h1>
            <p
              style={{
                //style for the paragraph
                textAlign: "center", // set the text to the center
                fontSize: "19px", // set size font of the letters
                margin: "0px", // set margin
                borderRadius: "15px",
                fontWeight: "300"
              }}
            >
              Welcome to Parental Resources! Lindenwood University aims to help
              both students and families when it comes to providing the
              necessary information for its future lions. This new addition to
              Lindenwood's growing website collection seeks to give relevant
              information to an athlete's parents and students. We want to
              connect to our future lions and their parents. Be sure to check
              out our Frequently Asked Questions under the FAQ tab if you have
              any questions. And if your question is not included, feel free to
              contact us via the contact tab!
            </p>
          </Paper>
        </Grid>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia component="img" alt="LU" height="350" src={oneR} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="h2"
                  style={{ color: "black" }}
                >
                  Multimedia
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="medium"
                href="https://lindenwoodlions.com/coverage"
                target="__blank"
                style={{
                  color: "#b3a272",
                  backgroundColor: "#DCDCDC",
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginRight: "200px",
                  marginLeft: "30px"
                }}
              >
                Live Events!
              </Button>
              <Avatar style={{ backgroundColor: "#DCDCDC" }}>
                <Button
                  href="https://lindenwoodlions.com/galleries/?"
                  target="__blank"
                  style={{
                    color: "#b3a272",
                    backgroundColor: "#DCDCDC"
                  }}
                >
                  <Camera />
                </Button>
              </Avatar>
              <Avatar style={{ backgroundColor: "white" }}>
                <Button
                  href="https://twitter.com/LU_Lions"
                  target="__blank"
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <SocialIcon network="twitter" />
                </Button>
              </Avatar>
              <Avatar style={{ backgroundColor: "white" }}>
                <Button
                  href="https://www.facebook.com/LindenwoodLions/"
                  target="__blank"
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <SocialIcon network="facebook" />
                </Button>
              </Avatar>
              <Avatar style={{ backgroundColor: "white" }}>
                <Button
                  href="https://www.youtube.com/user/lindenwoodlions?feature=results_main"
                  target="__blank"
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <SocialIcon network="youtube" />
                </Button>
              </Avatar>
            </CardActions>
          </Card>
          <br />
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Spirit Shop"
                className={classes.media}
                height="300"
                image={spiritShop}
                title="Spirit Shop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Spirit Shop
                </Typography>
                <Typography component="p">
                  Looking to show your Lion Pride? Checkout the amazing deals we
                  have at the Lindenwood Lions Spirit Shop!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://lindenwood.shoptruespirit.com/webapp/wcs/stores/servlet/BNCBHomePage?storeId=88341&catalogId=10003&langId=-1"
                target="__blank"
                style={{
                  backgroundColor: "white"
                }}
              >
                Visit the spirit shop here!
              </Button>
            </CardActions>
          </Card>
        </div>
      </from>

      <br />
      <h2
        style={{
          //style for the header of the home page
          lineHeight: "1",
          letterSpacing: "-2px", // space between letters of -2 px
          fontSize: "50px", // size of the font 80 px
          color: "#b3a272", //color mustard yellow for the letters
          textShadow: "0px 2px 3px #555", // give a little shadow to the letters
          textAlign: "center", // text set to the center
          flex: "1"
        }}
      >
        Go Lions!
      </h2>

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
