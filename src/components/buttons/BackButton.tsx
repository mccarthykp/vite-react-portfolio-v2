import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  text: string;
  destination: string;
}

const BackButton: React.FunctionComponent<BackButtonProps> = ({ text, destination }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(destination);
  };

  return (
    <>
      <button
        className="flex bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg focus:transparent transition duration-300"
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default BackButton;
