import React from "react";
import "./login.css";
import LuLogo from "/Users/danielchavez/Documents/GitHub/parental-resources/src/img/LU_Logo.png";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div>
      <form className="loginForm">
        <div className="imgcontainer">
          <img src={LuLogo} alt="Avatar" className="avatar" />
        </div>
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";

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
        <h2 className="logInTittle" style={{
          fontSize: '65px',
          textAlign: "center",
          fontStretch: "1px",
          color: '#b6a16b'
        }}>
          Log In
        </h2>

        <div class="container-login">

          <label>Username</label>
          <br />
          <input type="text" name="uname" placeholder="Enter Username" required style={{
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline - block',
            border: '1px solid #b6a16b',
            boxSizing: 'border-box',
          }}>
          </input>
          <br />

          <label>Password</label>
          <br />
          <input type="password" name="psw" placeholder="Enter Password" required style={{
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline - block',
            border: '1px solid #b6a16b',
            boxSizing: 'border-box',
          }}></input>
          <br />
          <Link to={"/admin"}>
            <button type="submit" className="lbutton">Login</button>
          <Link to={"/admin"}>
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
          </Link>
          <br />

        </div>
      </form>
    </div>
  );
}
