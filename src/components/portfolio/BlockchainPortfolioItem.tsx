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
    <div className="
      group rounded-sm p-6 mb-8 mx-auto
      shadow-lg hover:shadow-2xl
      transition-bg duration-300

      dark:bg-gray-800
      dark:bg-opacity-30
      dark:hover:bg-opacity-45
      dark:text-gray-800
      dark-corner-outline
      hover:dark-corner-outline-hover
      
      bg-zinc-800
      text-gray-300"
    >
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
          <p className="font-medium text-gray-300 group-hover:text-gray-200">{title}</p>
          <p className="font-light text-gray-300 group-hover:text-gray-200">{subtitle}</p>
          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className=" 
                text-slate-800
                dark:text-slate-400 dark:group-hover:text-slate-300 
                
                bg-gray-300
                dark:bg-slate-700
                dark:bg-opacity-45 
                
                text-xs py-1 px-1.5 mr-2 mt-1 rounded-lg transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="group-hover:text-gray-200 flex text-left pt-1 pb-4 px-4 dark:text-gray-300 transition-colors duration-900">
        {description}
      </p>
      <a
        className="flex max-w-fit text-sm max-h-fit ml-4 mb-4 text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300
        
        transition-all duration-300 ease-in-out
        "
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <span className="bg-left-bottom bg-gradient-to-r from-blue-300 to-pink-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out h-0.5">
          view project
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex size-3 ml-2 mt-1">
          <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  );
};

export default PortfolioItem;
