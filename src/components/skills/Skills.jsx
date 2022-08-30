import React from "react";
import "./skills.scss";

function skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        <div className="card">
          <h3>Programming Languages</h3>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="card">
          <h3>Front End Tech</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>JQUERY</li>
            <li>REACT JS</li>
            <li>BOOTSTRAP</li>

          </ul>
        </div>
        <div className="card">
          <h3>Back End Tech</h3>
          <ul>
            <li>MYSQL</li>
            <li>MONGODB</li>
            <li>NODEJS</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default skills;
