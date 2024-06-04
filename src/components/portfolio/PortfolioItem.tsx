import React from "react";

interface PortfolioItemProps {
  title: string;
  subtitle: string;
  tags: string[];
  imgUrl: string;
  imgAlt: string;
  link: string;
  description: string;
}

const PortfolioItem: React.FunctionComponent<PortfolioItemProps> = ({
  title,
  subtitle,
  tags,
  imgUrl,
  imgAlt,
  link,
  description,
}) => {
  return (
    <div className="backdrop-blur-sm p-6 mb-8 rounded-lg shadow-lg hover:shadow-2xl bg-neutral-800 dark:bg-slate-800 dark:bg-opacity-25 hover:dark:bg-opacity-35 text-gray-300 dark:text-gray-800 mx-auto transition-bg duration-300">
      {/* <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      > */}
        <div className="flex flex-row">
          <div className="flex py-4 px-4">
            <img
              className="rounded-lg w-20 h-20"
              src={imgUrl}
              alt={imgAlt}
              draggable="false"
            />
          </div>
          <div className="flex flex-col items-start py-4 px-2">
            <p className="font-medium dark:text-gray-300">{title}</p>
            <p className="font-light dark:text-gray-300">{subtitle}</p>
            <div className="flex flex-wrap">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-400 py-1 px-2.5 rounded-lg mr-2 mt-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="flex text-left pt-1 pb-4 px-4 dark:text-gray-300">
          {description}
        </p>
        <a
          className="flex max-w-fit text-sm max-h-fit ml-4 mb-4 text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          draggable="false"
        >
          view project &#8599;
        </a>
      {/* </a> */}
    </div>
  );
};

export default PortfolioItem;
