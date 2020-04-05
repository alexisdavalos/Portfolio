import React, { useState } from "react";
//components
import Tag from "./Tag.js";
//skill data
import { frontEndSkills, backEndSkills, designSkills } from "./data/Skills.js";
const Skills = ({darkMode}) => {
  let devSkills = [frontEndSkills, backEndSkills, designSkills];
  const [skills, setSkills] = useState(devSkills[0]);
  const handleChange = async (e) => {
    setSkills(devSkills[e.target.value]);
  };
  return (
    <div className="select">
      <select
        className={
          darkMode
            ? "has-background-light"
            : "has-background-dark has-text-light"
        }
        id="options"
        onChange={(e) => handleChange(e)}
      >
        <option value={0} className="is-size-5 is-family-monospace">
          Front End Skills
        </option>
        <option value={1} className="is-size-5 is-family-monospace">
          Back End Skills
        </option>
        <option value={2} className="is-size-5 is-family-monospace">
          Design Skills
        </option>
      </select>
      <div className="skills">
        <div className="skills-container">
          {skills.length > 0 ? (
            skills.map((skills, index) => {
              return <Tag skill={skills} key={index} index={index} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
