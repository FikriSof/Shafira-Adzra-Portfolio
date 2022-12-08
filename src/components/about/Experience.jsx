import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience_container d-flex align-items-center flex-wrap justify-content-between">
      <div className="experience_item">
        <ExperienceItem
          year="Apr 2022 - Present "
          comp="Telkom - Agree"
          title="Digital Marketing - Project Based"
          text="
          Interact with social media followers through comments or direct message, 
          Publish and distribute content to every social media, 
          Brainstorm how to increase followers and engagement, 
          Created paid ads on Ads Manager (Instagram and Facebook ads), and
          Assist marketing event to increase brand awareness."
        />
      </div>
      <div className="experience_item">
        <ExperienceItem
          year="March – September 2022"
          comp="StudentsxCEOs"
          title="Social Media Specialist of StudentsxCEOs League"
          text="Handle, monitor, and analyze the existing official social media platforms, 
          Worked together with a Content Strategist in making a Content Planner (regular content, hard/soft-selling content, campaigns), and 
          Created strategy for video content (reels and tiktok) and responsible for captions, hastags, and tags"
        />
      </div>
      <div className="experience_item">
        <ExperienceItem
          year="February – July 2022"
          comp="RUANGGURU"
          title="Data, Business Analytics & Operations Bootcamp Awardee"
          text="Learned skills regarding the application of digital marketing programs which include communication & presentation skills, project management, and analytics, and
          Collaborated with the team to use SQL and Tableu in database management"
        />
      </div>
      <div className="experience_item">
        <ExperienceItem year="January - March 2021" comp="RAWRAMIE" title="Reseahrcer Intern" text="Researched the best stages of sterilization in Rami (Boehmeria nivea) plant tissue culture with superior plants to produce for a company" />
      </div>
      <div className="experience_item">
        <ExperienceItem
          year="August - October 2021"
          comp="PT East West Seed Indonesia"
          title="KMMI Urban Farming"
          text="Compiled a business design based on the resulting urban faming product and its application in the home environment and analyzing the business potential of urban farming"
        />
      </div>
      <div className="experience_item">
        <ExperienceItem
          year="June - August 2021"
          comp="SEAMEO BIOTROP"
          title="Tissue Culture Planter"
          text="Be able to make preparation of aseptic cultur, sterilization of explants, and acclimatization of seaweed brooders in greenhouses and laboratories"
        />
      </div>
    </div>
  );
};

const ExperienceItem = ({ year, comp, title, text }) => {
  return (
    <div className="single_experience">
      <div className="experience_comdiv red">{comp}</div>
      <div className="experience_comdiv">{title}</div>
      <div className="experience_year">{year}</div>
      <h6 className="experience_title">
        <span>{text}</span>
      </h6>
    </div>
  );
};

export default Experience;
