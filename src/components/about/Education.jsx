import React from "react";
import "./education.css";
import Logo1 from "../../assets/images/logoUnpad.png";
import Logo2 from "../../assets/images/logoSma.png";

const Education = () => {
  return (
    <div className="edu-content d-flex flex-column">
      <div className="edu-wrapper text-center justify-content-center align-items-center">
        <div className="edu-logo">
          <img src={Logo1} alt="" className="w-30 mt-3" />
        </div>
        <div className="edu-title text-center">
          <h5>UNIVERSITAS PADJADJARAN</h5>
          <h6>Faculty of Agriculture</h6>
          <h6>Departement of Agrotechnology</h6>
          <h6>2018 - Present</h6>
        </div>
        <div className="edu-wrapper text-center justify-content-center align-items-center">
          <div className="edu-logo2">
            <img src={Logo2} alt="" className="w-30 mt-4 mb-2" />
          </div>
          <div className="edu-title text-center">
            <h5>SMA NEGERI 77 JAKARTA</h5>
            <h6>Natural Science</h6>
            <h6>Part of OSIS SMAN 77 JAKARTA</h6>
            <h6>2015 - 2018</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
