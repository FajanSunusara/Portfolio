import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import contactImg from "../assets/assets/contact.png";
// import { Color } from "three";
const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  const handleclick = () => {
    setclicked(!clicked);
  };
  return (
    <div className="NavbarItems">
      <div className="logo">
        <h2>navbar</h2>
      </div>
      <div className="menu-icon">
        <a href="#" onClick={handleclick}>
          {clicked ? (
            <AiOutlineClose style={{ fontSize: "2rem", color: "white" }} />
          ) : (
            <FaBars style={{ fontSize: "2rem", color: "white" }} />
          )}
        </a>
      </div>
      <div className="Nav">
        <ul className={clicked ? "Ul Ulactive" : "Ul"}>
         
          <li className="li-hover">
            <Link>About</Link>
          </li>
          <li className="li-hover">
            <Link>Skills</Link>
          </li>
          <li className="li-hover">
            <Link>Projects</Link>
          </li>
          <li className="li-hover">
            <Link>Blogs</Link>
          </li>

          <li>
            <a
              href="https://www.youtube.com/watch?v=OmkYJPJBLsw"
              target="blank"
            >
              <button className="BtnSignin">
                {/* <img src={contactImg} alt=""></img>*/}Contact Me 
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
