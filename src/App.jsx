import React,{useState} from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
import Footer from "./components/Footer/Footer";
// import Footer from "./components/Footer/Footer";

function App(){

    const [menuOpen, setMenuOpen] = useState(false)

    return <div className="app"> 
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
        
            <Intro />
            <Portfolio />
            <Works />
           <Skills/>
            <Contact />
            {/* <Footer/> */}
        </div>
    </div>;
}

export default App;