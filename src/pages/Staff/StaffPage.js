import React from "react";
import { men, women, coed, otherStaff } from "./links";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function StaffPage() {
  return (
    <>
      <ExpansionPanel style={{ padding: '2px', margin: '10px' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontSize: "25px"
            }}
          >
            {" "}
            Men's Sports
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontSize: '18px' }}>
            <ul>
              {men.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.href} target="__blank">
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={{ padding: '2px', margin: '10px' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontSize: "25px"
            }}
          >
            {" "}
            Women's Sports
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontSize: '18px' }}>
            <ul>
              {women.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.href} target="__blank">
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel >

      <ExpansionPanel style={{ padding: '2px', margin: '10px' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontSize: "25px"
            }}
          >
            {" "}
            Co-ed Sports
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontSize: '18px' }}>
            <ul>
              {coed.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.href} target="__blank">
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={{ padding: '2px', margin: '10px' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontSize: "25px"
            }}
          >
            {" "}
            More Staff
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontSize: '18px' }}>
            <ul>
              {otherStaff.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.href} target="__blank">
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}
