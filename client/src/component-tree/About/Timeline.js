import React from "react";
import { events } from "./data/Events.js";
const Timeline = ({ darkMode }) => {
  console.log("darkMode in Timeline:", darkMode);
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag start is-medium is-primary">Start</span>
      </header>
      {events ? (
        events.map((event, index) => {
          if (event.type === "dark") {
            return (
              <div
                className={
                  darkMode
                    ? "timeline-item is-warning"
                    : "timeline-item is-warning"
                }
                key={Math.random()}
              >
                <div className="timeline-marker is-dark is-image is-32x32">
                  <img src={event.img} alt={event.role} />
                </div>
                <div
                  className={
                    darkMode
                      ? "timeline-content has-text-light"
                      : "timeline-content has-text-dark"
                  }
                >
                  <p className="heading">{event.date}</p>
                  <p>{event.company}</p>
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
                <div
                  className={
                    darkMode
                      ? "timeline-content has-text-light"
                      : "timeline-content has-text-dark"
                  }
                >
                  <p className="heading">{event.date}</p>
                  <p>{event.company}</p>
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
        <span className="tag end is-medium is-danger">2020</span>
      </header>
    </div>
  );
};

export default Timeline;
