import React from "react";

interface EmailButtonProps {
  text: string;
}

const EmailButton: React.FunctionComponent<EmailButtonProps> = ({ text }) => {

  return (
    <>
      <button
        className="bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-gray-300 font-semibold py-3 px-4 md:py-2 rounded-lg shadow-lg focus:transparent transition-bg duration-300"
        type="button"
      >
        {text}
      </button>
    </>
  );
};

export default EmailButton;
