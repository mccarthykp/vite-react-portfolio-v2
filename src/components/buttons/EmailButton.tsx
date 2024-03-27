import React, { useState } from "react";
import Tooltip from "./EmailTooltip";

const EmailButton = () => {
  const [tooltipText, setTooltipText] = useState("Copy Email");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    top: 0,
    left: 0,
    height: 0,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("mccarthy.kevin@proton.me");
    setTooltipText("Copied!");
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipText("Copy Email");
      setTooltipVisible(false);
    }, 2000);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + rect.height,
      left: rect.left,
      height: rect.height,
    });
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <>
      <button
        className="bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white font-semibold py-4 px-2 rounded-lg shadow-lg focus:transparent transition-bg duration-300"
        type="button"
        onClick={handleCopy}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Tooltip
          text={tooltipText}
          visible={tooltipVisible}
          position={tooltipPosition}
        />
        <svg className="h-4 w-8" viewBox="0 0 6.35 6.35">
          <path
            d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
            fill="currentColor"
          />
        </svg>
      </button>
    </>
  );
};

export default EmailButton;
