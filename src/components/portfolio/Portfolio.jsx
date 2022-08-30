import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  javaPortfolio,
  javascriptPortfolio,
  pythonPortfolio,
  reactPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "java",
      title: "Java",
      link: "Link",
    },
    {
      id: "javascript",
      title: "JavaScript",
      link: "Link",
    },
    {
      id: "python",
      title: "Python",
      link: "Link",
    },
    {
      id: "react",
      title: "React JS",
      link: "Link",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "java":
        setData(javaPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "python":
        setData(pythonPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      default:
        setData(reactPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            link = {item.link}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank" className="ancortag">
          <div className="item">
            <img src={d.img} alt="" />
            {d.title}
            {/* <h3>{d.title}</h3> */}
            {/* <a href={d.link} target="_blank">{d.title}</a> */}
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}
