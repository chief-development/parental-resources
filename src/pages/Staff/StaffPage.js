import React from "react";
import { men, women, coed, otherStaff } from "./links";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "./footer";
export default function StaffPage() {
  return (
    <>
      <h1
        style={{
          //style for the header of the home page
          lineHeight: "1",
          letterSpacing: "-2px", // space between letters of -2 px
          fontSize: "80px", // size of the font 80 px
          color: "#b3a272", //color mustard yellow for the letters
          textShadow: "0px 2px 3px #555" // give a little shadow to the letters
        }}
      >
        Staff
      </h1>

      <hr />

      <p style={{ fontSize: "24px", textAlign: "left", fontWeight: "300" }}>
        Find your staff. Click on the sport category to see our coaches.
      </p>
      <br />
      <ExpansionPanel style={{ padding: "2px", margin: "10px" }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontSize: "25px",
              color: "#b3a272"
            }}
          >
            {" "}
            Men's Sports
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontSize: "22px", fontWeight: "300" }}>
            <ul>
              {men.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="__blank"
                      style={{ color: "#000000" }}
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={{ padding: "2px", margin: "10px" }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontSize: "25px",
              color: "#b3a272"
            }}
          >
            {" "}
            Women's Sports
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontSize: "22px", fontWeight: "300" }}>
            <ul>
              {women.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="__blank"
                      style={{ color: "#000000" }}
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={{ padding: "2px", margin: "10px" }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontSize: "25px",
              color: "#b3a272"
            }}
          >
            {" "}
            Co-ed Sports
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontSize: "22px", fontWeight: "300" }}>
            <ul>
              {coed.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="__blank"
                      style={{ color: "#000000" }}
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={{ padding: "2px", margin: "10px" }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontSize: "25px",
              color: "#b3a272"
            }}
          >
            {" "}
            More Staff
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontSize: "22px", fontWeight: "300" }}>
            <ul>
              {otherStaff.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="__blank"
                      style={{ color: "#000000" }}
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Footer />
    </>
  );
}
