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
            href="http://www.lindenwoodlions.com"
            target="__blank"
            rel="noopener noreferrer"
          >
            {"Lindenwood Athletics"}
          </a>
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>

        <Footer />
      </Paper>
    </div>
  );
}
PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
