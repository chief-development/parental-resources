import React from "react";
import Footer from "./footer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: "light-gray"
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

      <Footer />
    </div>
  );
}
PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
