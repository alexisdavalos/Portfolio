import React, { useState } from "react";
import CardModal from "./CardModal.js";

const Card = ({ project, darkMode }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {/* Card Modal Component */}
      <CardModal
        modal={modal}
        setModal={setModal}
        darkMode={darkMode}
        project={project}
      />
      {/* Card Modal Component End */}

      {/* Card Component */}
      <div className="card" onClick={() => setModal(!modal)}>
        <div className="card-image is-square">
          <button className="button is-light is-rounded is-outlined">
            Learn More
          </button>
          <img src={project.img} alt={project.description} />
        </div>
      </div>
      {/* Card Component End */}
    </>
  );
};

export default Card;
