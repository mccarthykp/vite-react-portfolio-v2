import React from "react";

interface ResumeButtonProps {
  text: string;
}

const ResumeButton: React.FunctionComponent<ResumeButtonProps> = ({ text }) => {
  const openResume = () => {
    const resumeUrl = 'src/assets/docs/KevinMcCarthy_Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      <button
        className="bg-teal-600 hover:bg-teal-500 text-white font-semibold mt-4 py-3 px-4 md:px-4 rounded-lg shadow-lg focus:transparent transition-bg duration-300"
        type="button"
        onClick={openResume}
      >
        {text}
      </button>
    </>
  );
};

export default ResumeButton;
