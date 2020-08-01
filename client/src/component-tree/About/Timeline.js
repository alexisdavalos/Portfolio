import React from "react";
import { events } from "./data/Events.js";
const Timeline = ({ darkMode }) => {
  // color variables
  let textColor = darkMode ? "has-text-light" : "has-text-dark";
  let color = darkMode ? "light" : "dark";
  return (
    <>
      <ul className="steps has-content-centered is-small has-gaps">
        {events ? (
          events.map((event) => {
            return (
              <li className={`steps-segment ${color}`}>
                {event.type === "dark" ? (
                  <span className="steps-marker">
                    <span class="icon">
                      <img src={event.img} alt={event.role} />
                    </span>
                  </span>
                ) : (
                  <span class={`steps-marker is-hollow ${color}`}></span>
                )}

                <div className="steps-content">
                  <p className={`heading is-size-6  ${textColor}`}>
                    {event.date}
                  </p>
                  <b>
                    <p className={`heading is-size-7  ${textColor}`}>
                      {event.company}
                    </p>
                  </b>
                  <p className={`heading is-size-8  ${textColor}`}>
                    {event.role}
                  </p>
                </div>
              </li>
            );
            // }
          })
        ) : (
          <></>
        )}
      </ul>
    </>
  );
};

export default Timeline;
