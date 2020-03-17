import React from 'react';

const Timeline = () => {
    return (
        <div class="timeline is-centered">
            <header class="timeline-header">
                <span class="tag is-medium is-primary">Start</span>
            </header>
            <div class="timeline-item is-warning">
                <div class="timeline-marker is-warning is-image is-32x32">
                    <img src="http://bulma.io/images/placeholders/32x32.png" alt="icon"/>
                </div>
                    <div class="timeline-content">
                        <p class="heading">June 2017</p>
                        <p>Grit Matters - Research Assistant</p>
                    </div>
            </div>
            <div class="timeline-item is-primary">
                <div class="timeline-marker is-primary">
                    <i class="fa fa-plus"></i>
                </div>
                <div class="timeline-content">
                    <p class="heading">September 2017</p>
                    <p>Freelance Web & Graphic Design</p>
                </div>
            </div>
            <div class="timeline-item is-warning">
                <div class="timeline-marker is-warning is-image is-32x32">
                    <img src="http://bulma.io/images/placeholders/32x32.png" alt="icon"/>
                </div>
                    <div class="timeline-content">
                        <p class="heading">Dec 2017</p>
                        <p>Herbal Healers - FrontEnd Developer</p>
                    </div>
            </div>
                <header class="timeline-header">
                    <span class="tag is-primary">2019</span>
                </header>
                <div class="timeline-item is-danger">
                    <div class="timeline-marker is-danger is-icon">
                        <i class="fa fa-flag"></i>
                    </div>
                    <div class="timeline-content">
                        <p class="heading">Feb 2019</p>
                        <p>Ecom Educational - Ecommerce Mentor</p>
                    </div>
                </div>
                <div class="timeline-item is-warning">
                <div class="timeline-marker is-warning is-image is-32x32">
                    <img src="http://bulma.io/images/placeholders/32x32.png" alt="icon"/>
                </div>
                    <div class="timeline-content">
                        <p class="heading">October 2019</p>
                        <p>Lambda School - Full Stack</p>
                    </div>
            </div>
                <header class="timeline-header">
                    <span class="tag is-medium is-primary">2020</span>
                </header>
            </div>

    )
}

export default Timeline