import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectsButton: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <>
      <button
        className="bg-teal-700 hover:bg-teal-600 text-white font-orbitron font-medium py-3 px-4 rounded-lg shadow-lg focus:transparent transition duration-300 tracking-widest"
        type="button"
        onClick={handleClick}
      >
        projects
      </button>
    </>
  );
};

export default ProjectsButton;
