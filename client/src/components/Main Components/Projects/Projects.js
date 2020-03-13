import React from 'react';
import Card from './Card.js';
import projectsData from './data/projectsData.js'

const Projects = () =>{
    console.log('inside blog.js')
    
    return(
    <div className="Wrapper">
        <div className="columns is-desktop">
            <Card/>
        <div className="column highlight-full">
    
        </div>
        </div>
    </div>
    )
}

export default Projects;