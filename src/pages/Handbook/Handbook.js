import React from "react";
import Footer from './footer';
export default function Handbook() {
  return (
    <div className="Header">
      <a
        href="https://lindenwoodlions.com/documents/2018/9/25/NCAA_2018_19_Student_Athlete_Handbook.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h6>NCAA Handbook</h6>
      </a>
      <br />
      <a
        href="https://lindenwoodlions.com/documents/2018/9/24/SLS_Student_Athlete_Handbook_SLS_.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h6>Student Life Sports Handbook</h6>
      </a>
      <Footer />
    </div>
  );
}
