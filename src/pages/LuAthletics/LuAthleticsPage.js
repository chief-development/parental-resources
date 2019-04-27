import React from "react";
import Footer from "./footer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LuLogo from "./LU_Logo.png";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: "light-gray"
  },
  card: {
    maxWidth: 500
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          <a
            href="https://www.lindenwood.edu"
            target="__blank"
            rel="noopener noreferrer"
            style={{ color: "#b3a272" }}
          >
            {"Lindenwood University"}
          </a>
        </Typography>
        <Typography component="p">
          Here is the Lindenwood University website.
        </Typography>
      </Paper>
      <br />
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          <a
            href="http://www.lindenwoodlions.com"
            target="__blank"
            rel="noopener noreferrer"
            style={{ color: "#b3a272" }}
          >
            {"Lindenwood Athletics"}
          </a>
        </Typography>
        <Typography component="p">
          Here is the Lindenwood Athletics website.
        </Typography>
      </Paper>

      <br />
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="LU"
            className={classes.media}
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
              Lindenwood Athletics
            </Typography>
            <Typography component="p">
              Here is the wedsite of Lindewood Athletics.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            href="https://www.lindenwoodlions.com"
            target="__blank"
            style={{ color: "#b3a272" }}
          >
            Go!
          </Button>
        </CardActions>
      </Card>

      <Footer />
    </div>
  );
}
PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
