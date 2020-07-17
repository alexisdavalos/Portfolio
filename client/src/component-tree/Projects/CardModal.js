import React from "react";

const CardModal = ({ modal, setModal, darkMode, project }) => {
  return (
    <>
      {modal ? (
        <div className="modal">
          <div
            className="modal-background"
            onClick={() => setModal(!modal)}
          ></div>
          <div className="modal-card">
            <section
              className={
                darkMode
                  ? "modal-card-body has-background-dark"
                  : "modal-card-body"
              }
            >
              <button
                className="delete"
                onClick={() => setModal(!modal)}
                aria-label="close"
              ></button>
              <div className="image is-3by1">
                <img src={project.img} alt="" />
              </div>
              <div className="content">
                <h2 className={darkMode ? "has-text-light" : "has-text-dark"}>
                  {project.name}
                </h2>
                <p className={darkMode ? "has-text-light" : "has-text-dark"}>
                  {project.description}
                </p>
                <br />
                <p>Categories:</p>
                {project.hashtags.map((hashtag, index) => (
                  <span
                    className={darkMode ? "tag is-light" : "tag is-dark"}
                    key={Math.random()}
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
                      ? "button is-light is-rounded"
                      : "button is-dark is-rounded"
                  }
                >
                  <strong>Visit Project</strong>
                </a>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default CardModal;
