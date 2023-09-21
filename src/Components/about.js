import React from 'react';
import "./about.css";
import myImg from "../assets/MyPhoto.png";

const about = () => {
  return (
    <div className='about'>
        <div class="imgBg">
            {/* <h1>HomeClass</h1> */}
            <img src={myImg} alt="" className="myImg"></img>
          </div>
          <diV>
            <hi>About Me</hi>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur, earum delectus, officia odio culpa omnis non incidunt sapiente sint voluptatem. Amet architecto tempora porro esse provident dolore, tempore maxime?</p>
          </diV>
    </div>
  )
}

export default about
