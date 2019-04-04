import React from "react";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200
  }
});

class LogIn extends React.Component {
  state = {
    password: "",
    showPassword: false
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {
    const { classes } = this.props;
    return (
      <form
        style={{
          maxWidth: "420px",
          margin: 0
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontStretch: "1px",
            fontSize: "45px"
          }}
        >
          LOG IN
        </h3>
        <br />

        <hr
          style={{ backgroundColor: "#FBB904", borderTop: "px double #FBB904" }}
        />

        <p style={{ fontSize: "18px", textAlign: "center" }}>
          {" "}
          Please provide the information requested
        </p>

        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
          <br />
          <TextField
            id="outlined-adornment-password"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            type={this.state.showPassword ? "text" : "password"}
            label="Password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <br />
          <Button
            variant="outlined"
            color="black"
            style={{
              position: "relative",
              left: "50%",
              width: "90px",
              height: "50px"
            }}
          >
            Submit
          </Button>

          <br />
        </form>
      </form>
    );
  }
}

export default withStyles(styles)(LogIn);
