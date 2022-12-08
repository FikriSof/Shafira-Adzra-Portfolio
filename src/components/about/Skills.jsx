import React from "react";
import "./skills.css";
import skillsImg from "../../assets/images/skillsImg.png";

const Skills = () => {
  return (
    <div className="skills-content">
      <div className="edu-wrapper text-center justify-content-center align-items-center">
        <div className="skills-img">
          <img src={skillsImg} alt="Skills" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
