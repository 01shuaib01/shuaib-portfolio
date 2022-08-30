import React from 'react'
import "./menu.scss"
export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=> setMenuOpen(false)}>
            <a href="#intro">Home</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href="#portfolio">Projects</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href="#works">Achivements</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href="#skills">Skills</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href="#contact">Contacts</a>
        </li>
      </ul>
    </div>
  )
}
