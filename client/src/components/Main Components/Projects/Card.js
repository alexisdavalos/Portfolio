import React from 'react'
import Loader from 'react-loader-spinner'
const Card = ({ project, darkMode }) => {
    return (
        <div className="column is-one-third">
            <div className="card">
                <div className="card-image">
                        {(project.img) ? <img src={project.img} alt={project.name} /> : <Loader type="ThreeDots" color="#333" height={100}width={100} />}
                </div>
                <div className={darkMode ? "card-content has-background-light has-text-dark-ter" : "card-content has-background-dark has-text-white-ter"}>
                    <div className="content">
                        <h2 className={darkMode ? "has-text-dark" : "has-text-light"}>{project.name}</h2>
                        <p>{project.description}</p>
                        <br />
                        {project.hashtags.map((hashtag, index) => (
                            <span className={darkMode ? "tag is-dark" : "tag is-light"} key={index}>{hashtag}</span>
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