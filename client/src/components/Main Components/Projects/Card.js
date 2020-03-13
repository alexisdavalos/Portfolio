import React from 'react'

const Card = ({project, darkMode}) =>{
    return(
        <div className="column is-one-third">
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="project"/>
                </figure>
            </div>
            <div className={darkMode ? "card-content has-background-dark has-text-white-ter" : "card-content has-background-light has-text-dark-ter"}>
                <div className="content">
                {project.description}
                <br/>
                <a href="#top">@somecompany</a>.
                <a href="#top">#css</a> <a href="#top">#responsive</a>
                <br/>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2020</time>
                </div>
            </div>
        </div>
</div>
    )
}

export default Card;