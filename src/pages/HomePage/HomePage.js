import React from "react";
import "./HomePage.css";
import Paper from "@material-ui/core/Paper";
import Footer from "../LuAthletics/footer";
import Typography from "@material-ui/core/Typography";

export default function HomePage() {
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
          textAlign: "center", // text set to the center
          flex: "1"
        }}
      >
        Parental Resource Center
      </h1>

      <hr
      //separation line
      />

      <div
        className="HomeBackground"
        // class name call HomePage.css, load a image for the background
      >
        <Typography component="p">
          <p
            style={{
              //style for the paragraph
              position: "relative", // set position to relative
              left: "23%",
              textAlign: "center", // set the text to the center
              width: "700px", // set the width of the text
              fontSize: "19px", // set size font of the letters
              margin: "20px", // set margin
              paddingTop: "100px", // set padding for the top
              color: "Black", // change color of the words to white
              flex: "1"
            }}
          >
            Welcome to Parental Resources! Lindenwood University aims to help
            both students and families when it comes to providing the necessary
            information for its future lions. This new addition to Lindenwood's
            growing website collection seeks to give relevant information to an
            athlete's parents and students. We want to connect to our future
            lions and their parents. Be sure to check out our Frequently Asked
            Questions under the FAQ tab if you have any questions. And if your
            question is not included, feel free to contact us via the contact
            tab!
          </p>
        </Typography>
      </div>
      <br />
      <Footer
      // footer for the lindenwood pages, import from footer.js
      />
    </div>
  );
}
