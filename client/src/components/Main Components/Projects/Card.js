import React from 'react'

const Card = ({ project, darkMode }) => {
    return (
        <div className="column is-one-third">
            <div className="card">
                <div className="card-image">
                        <img src={project.img} alt="project" />
                </div>
                <div className={darkMode ? "card-content has-background-light has-text-dark-ter" : "card-content has-background-dark has-text-white-ter"}>
                    <div className="content">
                        <h2 class={darkMode ? "has-text-dark" : "has-text-light"}>{project.name}</h2>
                        <p>{project.description}</p>
                        <br />
                        {project.hashtags.map(hashtag => (
                            <span class={darkMode ? "tag is-dark" : "tag is-light"}>{hashtag}</span>
                        ))}
                        <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2020</time>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;