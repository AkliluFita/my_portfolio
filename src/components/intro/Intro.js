import React from "react";
import "./intro.css";
import img1 from "../../img_container/my_pi.png";

function Intro() {
  return (
    <div className="intro" id="intro">
      {/* left */}
      <div className="intro-left">
        <img src={img1} alt="" className="imgContainer" />
      </div>
      {/* right */}
      <div className="intro-right">
        <div className="wrapper">
          <h2 className="typing-demo">
            Name: Aklilu Fita <br /> React Developer
          </h2>
        </div>

        <div className="intro_title">
          <div className=" intro_title_container  ">
            <h4>General Information</h4>
            <p>
              Master Computer Engineer. Being a web designer and developer is my
              passionate. I have built different projects on the front-end side
              using React js framework and on the back-end side using node js
              and Mongo DB. however, I am proficient in an assortment of
              technologies that support my plan and desire to become well and
              professional full-stack developer such as PHP, python, java, and
              relational Database (like MySql and Postgresql) as well.
            </p>
            <a
              className="download_link"
              href="https://www.docdroid.net/VJhMesq/aklilu-cv-ap-pdf"
              rel="noopener noreferrer"
              // download
              target="_blank"
            >
              Look at my CV
            </a>
          </div>
        </div>

        {/* <a href="#portfolio">
          <i class="fa fa-chevron-down"></i>
        </a> */}
      </div>
    </div>
  );
}

export default Intro;
