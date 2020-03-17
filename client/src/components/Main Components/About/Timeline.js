import React from 'react';
//import timeline icons
import gritMatters from '../../../assetts/logos/grit-matters-logo.png'
import herbalHealers from '../../../assetts/logos/herbal-healers-logo.png'
import lambdaSchool from '../../../assetts/logos/lambda-school-logo.png'

const Timeline = () => {
    return (
        <div className="timeline is-hidden-mobile is-centered">
            <header className="timeline-header">
                <span className="tag is-medium is-primary">Start</span>
            </header>
            <div className="timeline-item is-warning">
                <div className="timeline-marker is-warning is-image is-32x32">
                    <img src={gritMatters} alt="grit matters"/>
                </div>
                    <div className="timeline-content">
                        <p className="heading">June 2017</p>
                        <p>Grit Matters - Research Consultant</p>
                    </div>
            </div>
            <div className="timeline-item is-primary">
                <div className="timeline-marker is-primary">
                    <i className="fa fa-plus"></i>
                </div>
                <div className="timeline-content">
                    <p className="heading">September 2017</p>
                    <p>Freelance Web & Graphic Design</p>
                </div>
            </div>
            <div className="timeline-item is-warning">
                <div className="timeline-marker is-warning is-image is-32x32">
                    <img src={herbalHealers} alt="icon"/>
                </div>
                    <div className="timeline-content">
                        <p className="heading">Dec 2017</p>
                        <p>Herbal Healers - FrontEnd Developer/Graphic Designer</p>
                    </div>
            </div>
                <header className="timeline-header">
                    <span className="tag is-primary">2019</span>
                </header>
                <div className="timeline-item is-primary">
                    <div className="timeline-marker is-primary is-icon">
                        <i className="fa fa-flag"></i>
                    </div>
                    <div className="timeline-content">
                        <p className="heading">Feb 2019</p>
                        <p>Ecom Educational - Ecommerce Mentor</p>
                    </div>
                </div>
                <div className="timeline-item is-warning">
                <div className="timeline-marker is-warning is-image is-32x32">
                    <img src={lambdaSchool} alt="Lambda School Logo"/>
                </div>
                    <div className="timeline-content">
                        <p className="heading">October 2019</p>
                        <p>Lambda School - Full Stack</p>
                    </div>
            </div>
                <header className="timeline-header">
                    <span className="tag is-medium is-primary">2020</span>
                </header>
            </div>

    )
}

export default Timeline