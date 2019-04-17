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
          fontSize: "80px",
          color: "#b3a272",
          lineHeight: "2",
          letterSpacing: "-2px",
          textShadow: "0px 2px 3px #555",
          textAlign: "center"
        }}
      >
        Staff
      </h1>
      <p style={{ fontSize: "20px", textAlign: "center" }}>
        Here you can find the staff you are looking for. Click on the Category
        and look for you future coaches!
      </p>
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
          <Typography style={{ fontSize: "18px" }}>
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
          <Typography style={{ fontSize: "18px" }}>
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
          <Typography style={{ fontSize: "18px" }}>
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
          <Typography style={{ fontSize: "18px" }}>
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
