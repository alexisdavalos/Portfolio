import React from 'react'

const Card = ({project}) =>{
    return(
        <div className="column is-one-quarter">
        <div className="card">
        <div className="card-content has-background-dark has-text-white-ter">
            <div className="content">
            {project.description}
            <br/>
            <a href="#top">@somecompany</a>.
            <a href="#top">#css</a> <a href="#top">#responsive</a>
            <br/>
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2020</time>
            </div>
        </div>
        <div className="card-image">
            <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="project"/>
            </figure>
        </div>
        </div>
</div>
    )
}

export default Card;