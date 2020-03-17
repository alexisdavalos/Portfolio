import React from 'react'
//components
import Timeline from './Timeline.js'
import Cube from './Cube.js'
import Tag from './Tag.js'

const About = (props) => {
    const frontEndSkills = ['Javascript', 'React.js', 'CSS', 'SASS', 'LESS', 'HTML']
    const backEndSkills = ['SQL', 'PostGresQL', 'SQLITE3', 'Express.js', 'GraphQL']
    const designSkills = ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere', 'Canva']
    return (

        <div className="wrapper about is-desktop is-family-monospace">
            <div className={props.darkMode ? "box has-text-white" : "box has-text-dark"}>
                <Timeline />
                <div className="about">
                    <h1 className="is-size-3 is-family-monospace">About Me</h1>
                    <p>My name is Alexis Davalos, I am a Full-Stack Developer with a passion for constantly learning and pushing the boundaries of my understanding. I am passionate about philosophy, language, technology and wellness/fitness. I am fascinated by life and our ability to share our stories with one another.</p>
                    <div className="skills">
                        <h2 className="is-size-5 is-family-monospace">Front End Skills:</h2>
                        <div className="skills-container">
                        {frontEndSkills.map((skill, index) =>(
                            <Tag skill={skill} key={index}/>
                        ))}
                        </div>
                    </div>
                    <div className="skills">
                        <h2 className="is-size-5 is-family-monospace">Back End Skills:</h2>
                        <div className="skills-container">
                        {backEndSkills.map((skill, index) =>(
                            <Tag skill={skill} key={index}/>
                        ))}
                        </div>
                    </div>
                    <div className="skills">
                        <h2 className="is-size-5 is-family-monospace">Design Skills:</h2>
                        <div className="skills-container">
                        {designSkills.map((skill, index) =>(
                            <Tag skill={skill} key={index}/>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={props.darkMode ? "box w-30 has-text-white is-desktop" : "box w-30 has-text-dark is-desktop"}>
                <Cube />
            </div>
        </div>

    )
}

export default About;