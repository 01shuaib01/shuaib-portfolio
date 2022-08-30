import React from "react";
import "./topbar.scss";
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MOHD SHUAIB.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 9557706428</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>01shuaib01@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
