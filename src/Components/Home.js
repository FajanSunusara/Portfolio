import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import btnSrc from "../assets/assets/hireme.png";
import myImg from "../assets/MyPhoto.png";

const Home = () => {
  return (
    <>
      <div className="HomeClass p-5">
        <section id="intro">
          <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">
              I'am <span className="introName">Fajan Sunusara </span>
              <br />   
              And I'am
              Software Developer {" "}
            </span>
            <p className="introPara">
              A Computer Science student with a passion for complex coding
              puzzles,<br/> proficient in contemporary technologies in Web development & Data Analysis{" "}
            </p>
            <Link>
              <button className="btn">
                <img src={btnSrc} alt="" className="btnImg"></img>Resume
              </button>
            </Link>
          </div>
          </section>
          <div class="imgBg">
            {/* <h1>HomeClass</h1> */}
            <img src={myImg} alt="" className="myImg"></img>
          </div>
          
      </div>
    </>
  );
};

export default Home;
