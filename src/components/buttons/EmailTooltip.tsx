import React from "react";

interface TooltipProps {
  text: string;
  visible: boolean;
  position: {
    top: number;
    left: number;
    height: number;
  };
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  text,
  visible,
  position,
}) => {
  const tooltipStyle: React.CSSProperties = {
    top: `${position.top + 5}px`,
    left: `${position.left}px`,
    display: visible ? "block" : "none",
  };

  return (
    <>
      <div
        className="absolute bg-gray-800 text-white text-sm p-2 rounded-md shadow-lg"
        style={tooltipStyle}
      >
        {text}
      </div>
    </>
  );
};

export default Tooltip;
