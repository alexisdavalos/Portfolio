import React from "react";
import Loader from "react-loader-spinner";

const Card = ({ project, darkMode }) => {
  return (
    <div className="card">
      <div className="card-image">
        {project.img ? (
          <img src={project.img} alt={project.name} />
        ) : (
          <Loader type="ThreeDots" color="#333" height={100} width={100} />
        )}
      </div>
      <div
        className={
          darkMode
            ? "card-content has-background-light has-text-dark-ter"
            : "card-content has-background-dark has-text-white-ter"
        }
      >
        <div className="content">
          <h2 className={darkMode ? "has-text-dark" : "has-text-light"}>
            {project.name}
          </h2>
          <p>{project.description}</p>
          <br />
          <p>Categories:</p>
          {project.hashtags.map((hashtag, index) => (
            <span
              className={darkMode ? "tag is-dark" : "tag is-light"}
              key={index}
            >
              {hashtag}
            </span>
          ))}
          <br />
          <br />
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              darkMode
                ? "button is-dark is-rounded"
                : "button is-light is-rounded"
            }
          >
            <strong>Visit Project</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
