import React from "react";
import "./about.css";
import img1 from "../../img_container/myPhoto.jpg";
import img2 from "../../img_container/react.jpeg";

function About() {
  return (
    <div className="about" id="aboutMe">
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
        <div className="skill">
          <img src={img2} alt="" className="skill_img" />
          <div className="skill_text">
            <h3 className="skill_title">My Skill Lists</h3>
            <ul className="skill_desc">
              <li>Js library and framework (React Js, Next.js)</li>
              <li>css framework(Material UI, Bootstrap)</li>
              <li>state management(Redux and react Hooks/contextAPI)</li>
              <li>Backend side(node js and Django)</li>
              <li>UI Design(Figma)</li>
              <li>Database (MongoDB, MySQL and Postgres)</li>
            </ul>
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
