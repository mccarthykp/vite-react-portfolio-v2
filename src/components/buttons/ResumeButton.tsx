import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  text: string;
}

const BackButton: React.FunctionComponent<BackButtonProps> = ({ text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-4 py-3 px-4 md:px-4 rounded-lg shadow-lg focus:transparent transition-bg duration-300"
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default BackButton;
