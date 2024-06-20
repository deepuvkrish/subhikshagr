import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-lap">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >

                <i className={skills.fontAwesomeClassname}></i>
                <p className="skill-desc">{skills.skillName}</p>
              </li>
            );
          })}
        </ul>



        <div className="logo-slider dev-icons-mob">
          <div className="logo-slide-track">
            {skillsSection.softwareSkills.map((skills, i) => {
              return (
                <div className="slide software-skill-inline" key={i}
                  name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p className="skill-desc">{skills.skillName}</p>
                </div>
              );
            })}

          </div>
        </div>





      </div>
    </div>
  );
}
