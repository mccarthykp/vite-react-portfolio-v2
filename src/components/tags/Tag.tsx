import React from "react";

interface TagProps {
  text: string;
}

const Tag: React.FunctionComponent<TagProps> = ({ text }) => {
  return (
    <>
      <p className="font-medium text-sm mt-1.5 dark:text-gray-300 rounded-lg shadow-lg focus:transparent lg:pt-1.5 lg:pb-1 bg-zinc-900">
        {text}
      </p>
    </>
  );
};

export default Tag;
