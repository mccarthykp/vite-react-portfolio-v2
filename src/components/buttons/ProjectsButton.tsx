import React from "react";
import { useNavigate } from "react-router-dom";

interface ProjectsButtonProps {
  text: string;
}

const ProjectsButton: React.FunctionComponent<ProjectsButtonProps> = ({
  text,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <>
      <button
        className="relative bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-4 md:py-2 md:px-4 rounded-lg shadow-lg focus:transparent transition-bg duration-300"
        type="button"
        onClick={handleClick}
      >
        <span className="absolute inline-flex animate-ping h-3 w-3 rounded-full bg-green-400 opacity-75 mx-16 mt-0" />
        <span className="absolute inline-flex rounded-full h-3 w-3 bg-red-600 mx-16 mt-0" />
        {text}
      </button>
    </>
  );
};

export default ProjectsButton;
