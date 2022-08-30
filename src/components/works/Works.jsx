import React, { useState } from "react";
import "./works.scss";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "GeeksForGeeks",
      desc: "Rank 110 in institute among 2500 students. ",
      img:"./assets/gfg.png",
    },
    {
      id: "2",
      icon: "./assets/sun.png",
      title: "Nimcet",
      desc: "Secured All India Rank 3340 among in 25 thousand candidates.",
      img: "./assets/rank Card.jpeg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "National Service Scheme (NSS)",
      desc: "The main objectives of NSS are : identify : identify the needs and problems of the community and involve them in problem-solving.",
      img: "./assets/NSS C.jpg",
    },
  ];

  const handleClick = (way)=>{
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
          {/* <h1>Achivements</h1> */}
            <div className="item">
            
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span></span>
                </div>
              </div>
              <div className="right">
                {/* <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></img> */}
                <img src={d.img}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" onClick={()=>handleClick("left")}></img>
      <img src="assets/arrow.png" className="arrow right" onClick={()=>handleClick("")}></img>
    </div>
  );
}

export default Works;
