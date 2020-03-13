import React from 'react';
import Card from './Card.js';
import {projectsData} from './data/projectsData.js'

const Projects = (props) =>{
    console.log('data in projects.js:', projectsData)
    
    return(
    <div className="Wrapper Projects is-desktop">
        {projectsData.map((project, index) =>(
            <Card project={project} key={project.id} darkMode={props.darkMode}/>   
        ))}
    </div>
    )
}

export default Projects;