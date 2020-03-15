import React, { useState, useEffect } from 'react';
import Card from './Card.js';
// Projects Information
import { projectsData } from './data/projectsData.js'
//Icons
import { FaSearch } from 'react-icons/fa'
const Projects = (props) => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState(projectsData);

    //run useEffect every time component refreshes
    useEffect(()=>{
        //filter project data by search term
        const results = projectsData.filter((project) =>
            //filters results if there are any hits on project data
             (project.name.toLowerCase().includes(search.toLowerCase())) || 
             (project.description.toLowerCase().includes(search.toLowerCase())) ||
             (project.hashtags.includes(search.toLowerCase()))
        );
        //set filtered data to state
        setSearchResults(results);
    },[search])
    //re-runs useEffect any time search term changes to re-filter data
    
    //onChange Handler
    const handleChange = (e) =>{
        e.preventDefault();
        setSearch(e.target.value)
    }
    return (
        <>
        <div className="wrapper projects is-desktop">
            <div className="search">
                <div className="control has-icons-left">
                    <input 
                    className="input is-rounded"
                    name="search" 
                    type="search" 
                    placeholder="Search"
                    value={search}
                    onChange={e => handleChange(e)}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"><FaSearch/></i>
                    </span>
                </div>
            </div>
            {searchResults.map((project, index) => (
                <Card project={project} key={index} darkMode={props.darkMode} />
            ))}
        </div>
        </>
    )
}

export default Projects;