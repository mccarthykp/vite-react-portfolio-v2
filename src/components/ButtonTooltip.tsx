import React, { ReactNode } from 'react';

interface ButtonTooltipProps {
  children: ReactNode;
  message: string;
}

const ButtonTooltip: React.FunctionComponent<ButtonTooltipProps> = ({ children, message }) => {
  return (
  <div className="group inline-flex relative">
      {children}
      <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 scale-0 transition-all rounded bg-gray-800 px-2.5 py-2 text-xs text-white whitespace-no-wrap group-hover:scale-100 min-w-max">{message}</span>
  </div>
  );
};

export default ButtonTooltip;
