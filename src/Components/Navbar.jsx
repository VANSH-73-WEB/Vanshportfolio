import React from "react";
import "../index.css";   // your single global CSS file

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav1">
          <div className="name"><span>V</span>ansh Parashar</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Service">Service</a></li>
            <li><a href="#Skill">Skill</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#Contactus">Contact</a></li>
            <li><i className="fa-solid fa-bars"></i></li>
            
          </ul>
         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
