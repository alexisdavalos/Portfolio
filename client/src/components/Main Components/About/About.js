import React, {useState} from 'react'
//components
import Timeline from './Timeline.js'
import Cube from './Cube.js'
import Tag from './Tag.js'
//skill data
import {frontEndSkills, backEndSkills, designSkills } from './Skills.js'
const About = (props) => {

    const [skills, setSkills] = useState('front-end');
    const handleChange = (e) =>{
        setSkills(e.target.value)
    }
    return (

        <div className="wrapper about is-desktop is-family-monospace">
            <div className={props.darkMode ? "box has-text-white" : "box has-text-dark"}>
                <div className="about">
                    <h1 className="is-size-3 is-family-monospace">About Me</h1>
                    <p>My name is Alexis Davalos, I am a Full-Stack Developer with a passion for constantly learning and pushing the boundaries of my understanding. I am passionate about philosophy, language, technology and wellness/fitness. I am fascinated by life and our ability to share our stories with one another.</p>
                    <div className="select">
                            <select class={props.darkMode ? "has-background-light" : "has-background-dark has-text-light"}id="options" value={skills} placeholder={skills} onChange={(e)=> handleChange(e)}>
                                <option value="front-end" className="is-size-5 is-family-monospace">Front End Skills</option>
                                <option value="back-end" className="is-size-5 is-family-monospace">Back End Skills</option>
                                <option value="design" className="is-size-5 is-family-monospace">Design Skills</option>
                            </select>
                            { (skills === 'front-end') ?
                            <div className="skills">
                                <div className="skills-container">
                                {frontEndSkills.map((skill, index) =>(
                                    <Tag skill={skill} key={index} index={index}/>
                                ))}
                                </div>
                            </div> : <> </>
                            }
                            { (skills === 'back-end') ?
                            <div className="skills">
                                <div className="skills-container">
                                {backEndSkills.map((skill, index) =>(
                                    <Tag skill={skill} key={index} index={index}/>
                                ))}
                                </div>
                            </div> : <> </>
                            }
                            { (skills === 'design') ?
                            <div className="skills">
                                <div className="skills-container">
                                {designSkills.map((skill, index) =>(
                                    <Tag skill={skill} key={index} index={index}/>
                                ))}
                                </div>
                            </div> : <> </>
                            }
                    </div>
                </div>
                <Timeline darkMode={props.darkMode}/>
            </div>
            <div className={props.darkMode ? "box w-30 has-text-white is-desktop" : "box w-30 has-text-dark is-desktop"}>
                <Cube />
            </div>
        </div>

    )
}

export default About;