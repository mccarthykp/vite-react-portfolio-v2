import React from "react";

interface TagProps {
  text: string;
}

const Tag: React.FunctionComponent<TagProps> = ({ text }) => {
  return (
    <>
      <p className="font-medium text-sm mt-1.5 dark:text-gray-300 rounded-lg shadow-lg focus:transparent lg:pr-3 lg:pt-1.5 lg:pb-1 lg:px-2.5 bg-zinc-900">
        {text}
      </p>
    </>
  );
};

export default Tag;
