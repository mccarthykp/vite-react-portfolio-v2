import React, { ReactNode } from 'react';

interface EmailTooltipProps {
  children: ReactNode;
  message: string;
}

const EmailTooltip: React.FunctionComponent<EmailTooltipProps> = ({ children, message }) => {
  return (
  <div className="group inline-flex relative">
      {children}
      <span className="absolute left-1/2 transform -translate-x-1/2 top-full scale-0 transition-all rounded-md bg-neutral-800 dark:bg-neutral-800 mt-1.5 px-2.5 py-1.5 text-xs text-white group-hover:scale-100 min-w-max">{message}</span>
  </div>
  );
};

export default EmailTooltip;
