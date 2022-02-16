import React from "react";
import "./about.css";
import img1 from "../../img_container/p3.jpg";
import img2 from "../../img_container/computerHight.jpg";

function About() {
  return (
    <div className="about">
      <div className="about_right">
        <h3 className="title">About ME</h3>
        <h4 className="subtitle">
          fullstack developer with react and node js/Django
        </h4>
        <p className="description">
          My greatest strengths are as follows, I am a friendly, adaptive,
          conscientious, and well-organized person. I have an efficient and
          practical approach to all tasks I undertake. I can work well in a busy
          environment and especially enjoy being part of a team. I am a
          cooperative, motivated, solution finder, easy grasper. I am always
          willing to learn and look for a permanent position that can help me
          get better knowledge and upgrade my skills
        </p>
        <div className="award">
          <img src={img2} alt="" className="award_img" />
          <div className="award_text">
            <h3 className="award_title">Award nomination name</h3>
            <p className="award_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus voluptates aut rerum error. Quia tempora ullam sit
              perferendis veniam maxime error dolor ea .
            </p>
          </div>
        </div>
      </div>

      <div className="about_left">
        <div className="about_card_bg"></div>
        <div className="about_card">
          <img src={img1} className="about_img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
