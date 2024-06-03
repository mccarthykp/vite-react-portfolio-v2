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
        className="relative bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 px-4 md:py-2 md:px-4 rounded-lg shadow-lg focus:transparent transition duration-300"
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default ProjectsButton;
