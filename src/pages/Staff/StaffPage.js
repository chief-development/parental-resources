import React from "react";

const sports = [""];

export default function StaffPage() {
  return (
    <>
      <h1> Men's Sports</h1>
      <ul>
        <li>
          <a
            href="https://lindenwoodlions.com/sports/2014/7/21/MSWIM_0721142822.aspx"
            target="__blank"
          >
            Swimming and Diving
          </a>
        </li>
        <li>
          <a
            href="https://lindenwoodlions.com/sports/2014/7/11/BB_0711141948.aspx"
            target="__blank"
          >
            Baseball
          </a>
        </li>
        <li>
          <a
            href="https://lindenwoodlions.com/sports/2014/6/19/MBB_0619143018.aspx"
            target="__blank"
          >
            Baseketball
          </a>
        </li>
      </ul>

      <h1> Women's Sports</h1>
    </>
  );
}
