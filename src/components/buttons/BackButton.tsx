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
        className="group flex text-white font-orbitron font-medium tracking-widest py-3 px-3 dark:px-0 rounded-lg shadow-lg focus:transparent transition duration-300 bg-neutral-900 dark:bg-transparent"
        type="button"
        onClick={handleClick}
      >
        <div className="flex items-center">
          <div className="group-hover:-translate-x-2 transition transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-1 self-center">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
            </svg>
          </div>
          {text}
        </div>
      </button>
    </>
  );
};

export default BackButton;
