import React from "react";
import { events } from "./data/Events.js";
const Timeline = ({ darkMode }) => {
  return (
    <div className="timeline is-hidden-mobile is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-primary">Start</span>
      </header>
      {events ? (
        events.map((event, index) => {
          if (event.type === "dark") {
            return (
              <div
                className={
                  darkMode ? "timeline-item is-light" : "timeline-item is-dark"
                }
                key={index}
              >
                <div className="timeline-marker is-dark is-image is-32x32">
                  <img src={event.img} alt={event.role} />
                </div>
                <div className="timeline-content">
                  <p className="heading">{event.date}</p>
                  <p>{event.role}</p>
                </div>
              </div>
            );
          } else if (event.type === "color") {
            return (
              <div className="timeline-item is-primary" key={index}>
                <div className="timeline-marker is-primary">
                  <i className={event.img}></i>
                </div>
                <div className="timeline-content">
                  <p className="heading">{event.date}</p>
                  <p>{event.role}</p>
                </div>
              </div>
            );
          } else {
            return <></>;
          }
        })
      ) : (
        <></>
      )}
      <header className="timeline-header">
        <span className="tag is-medium is-primary">2020</span>
      </header>
    </div>
  );
};

export default Timeline;
