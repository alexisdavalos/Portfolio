import React from 'react'

const Card = (props) =>{
    return(
        <div class="column is-one-third">
        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="project"/>
            </figure>
        </div>
        <div class="card-content has-background-dark has-text-white-ter">
            <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a href="#top">@somecompany</a>.
            <a href="#top">#css</a> <a href="#top">#responsive</a>
            <br/>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2020</time>
            </div>
        </div>
        </div>
</div>
    )
}

export default Card;