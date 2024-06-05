import React from "react";
import { useNavigate } from "react-router-dom";

const BlockchainButton: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blockchain");
  };

  return (
    <>
      <button
        className="bg-gradient-to-bl from-yellow-500 to-pink-500 drop-shadow-md ring-inset hover:ring-2 ring-white text-white font-orbitron font-medium tracking-widest py-3 px-4 rounded-lg shadow-lg focus:transparent"
        onClick={handleClick}
      >
        blockchain
      </button>
    </>
  );
};

export default BlockchainButton;
