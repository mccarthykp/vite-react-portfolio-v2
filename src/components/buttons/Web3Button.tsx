import React from "react";
import { useNavigate } from "react-router-dom";

interface Web3ButtonProps {
  text: string;
}

const Web3Button: React.FunctionComponent<Web3ButtonProps> = ({ text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blockchain");
  };

  return (
    <>
      <button
        className="bg-gradient-to-bl from-yellow-500 to-pink-500 drop-shadow-md ring-inset hover:ring-2 ring-white text-white font-semibold py-3 px-4 md:py-2 md:px-4 rounded-lg shadow-lg focus:transparent"
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default Web3Button;
