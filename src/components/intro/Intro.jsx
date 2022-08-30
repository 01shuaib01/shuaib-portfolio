import "./intro.scss";
import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    // console.log(textRef)
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["Developer", "Designer", "Problem Solver"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/pic9.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mohd Shuaib</h1>
          <h3>
            Software Engineer <span ref={textRef}></span>
          </h3>
          <div className="socialicons">
            <a
              href="https://www.linkedin.com/in/mohd-shuaib6428/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin ld"></i>
            </a>
            <a href="https://github.com/01shuaib01" target="_blank">
              <i class="fa-brands fa-github git"></i>
            </a>
            <a href="https://twitter.com/01_shuaib_01" target="_blank">
              <i class="fa-brands fa-twitter tw"></i>
            </a>
          </div>
        </div>
        <a href="#portfolio" id="downarrow">
          <img src="assets/down.png" alt=""></img>
        </a>
      </div>
    </div>
  );
}
