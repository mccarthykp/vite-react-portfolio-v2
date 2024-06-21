import React from "react";

const ResumeButton: React.FunctionComponent = () => {
  const openResume = () => {
    const resumeUrl = 'public/assets/docs/KevinMcCarthy_Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      <button
        className="bg-teal-700 hover:bg-teal-600 text-white font-orbitron font-medium py-3 px-4 rounded-lg shadow-lg focus:transparent transition duration-300 tracking-widest"
        type="button"
        onClick={openResume}
      >
        resume
      </button>
    </>
  );
};

export default ResumeButton;
