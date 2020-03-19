import React, { useState } from 'react'
//components
import Timeline from './Timeline.js'
import Cube from './Cube.js'
import Tag from './Tag.js'
//skill data
import { frontEndSkills, backEndSkills, designSkills } from './data/Skills.js'
const About = ({ darkMode }) => {
    let devSkills = [frontEndSkills, backEndSkills, designSkills]
    const [skills, setSkills] = useState(devSkills[0]);
    const handleChange = async (e) => {
        setSkills(devSkills[e.target.value])
    }
    return (
        <div className="wrapper about is-desktop is-family-monospace">
            <div className={darkMode ? "box has-text-white" : "box has-text-dark"}>
                <div className="about">
                    <h1 className="is-size-3 is-family-monospace">About Me</h1>
                    <p>My name is Alexis Davalos, I am a Full-Stack Developer with a passion for constantly learning and pushing the boundaries of my understanding. I am passionate about philosophy, language, technology and wellness/fitness. I am fascinated by life and our ability to share our stories with one another.</p>
                    <div className="select">
                        <select className={darkMode ? "has-background-light" : "has-background-dark has-text-light"} id="options" onChange={(e) => handleChange(e)}>
                            <option value={0} className="is-size-5 is-family-monospace">Front End Skills</option>
                            <option value={1} className="is-size-5 is-family-monospace">Back End Skills</option>
                            <option value={2} className="is-size-5 is-family-monospace">Design Skills</option>
                        </select>
                        <div className="skills">
                            <div className="skills-container">
                                {(skills.length > 0) ? skills.map((skills, index) => {
                                    return <Tag skill={skills} key={index} index={index} />
                                }) : <></>}
                            </div>
                        </div>
                    </div>
                </div>
                <Timeline darkMode={darkMode} />
            </div>
            <div className={darkMode ? "box w-30 has-text-white is-desktop" : "box w-30 has-text-dark is-desktop"}>
                <Cube />
            </div>
        </div>

    )
}

export default About;