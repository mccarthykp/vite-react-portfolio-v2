import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  text: string;
}

const BackButton: React.FunctionComponent<BackButtonProps> = ({ text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <button
        className="flex bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:transparent transition-bg duration-300"
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default BackButton;
