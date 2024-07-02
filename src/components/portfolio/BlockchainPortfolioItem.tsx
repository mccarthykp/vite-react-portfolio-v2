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
  // hover:backdrop-blur-none
  // dark:hover:bg-opacity-35
  return (
    <div className="
      group lg:p-8 md:p-6 p-5
      mb-8 mx-auto
      transition-bg duration-300
      backdrop-blur-sm
      dark:backdrop-blur-sm

      bg-zinc-800
      bg-opacity-90
      dark:bg-zinc-800
      dark:bg-opacity-20
      dark:hover:bg-opacity-5
      
      text-gray-500
      dark:text-gray-800

      corner-outline
      hover:corner-outline-hover
      dark:dark-corner-outline
      dark:hover:dark-corner-outline-hover"
    >
      <div className="flex flex-row">
        <div className="flex py-4 px-4">
          <img
            className="rounded-lg min-w-20 min-h-20 max-w-20 max-h-20"
            src={imgUrl}
            alt={imgAlt}
            draggable="false"
          />
        </div>
        <div className="flex flex-col items-start py-3 px-2 transition-all duration-300">
          <p className="font-rajdhani font-bold tracking-wide md:text-2xl text-xl text-neutral-400 group-hover:text-slate-600 dark:text-neutral-400 dark:group-hover:text-slate-300 duration-500">{title}</p>
          <p className="font-rajdhani font-medium dark:font-light tracking-wide text-neutral-400 dark:text-neutral-300 group-hover:text-slate-600 dark:group-hover:text-slate-200 text-md duration-500">{subtitle}</p>
          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className=" 
                text-neutral-500 group-hover:text-slate-800
                dark:text-neutral-400 dark:group-hover:text-slate-300 
                
                bg-neutral-300 group-hover:bg-slate-500 bg-opacity-45 group-hover:bg-opacity-30
                dark:bg-gray-700 dark:group-hover:bg-slate-800 dark:bg-opacity-45 
                
                font-rajdhani font-medium dark:font-normal tracking-wide md:text-sm text-xs
                py-1 px-1.5 mr-2 mt-1 rounded-lg transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p
        className="
            flex text-left pt-1 pb-4 px-4 transition-colors duration-900 font-rajdhani font-normal tracking-wide text-md
            
            text-neutral-400
            group-hover:text-slate-600

            dark:text-neutral-400
            dark:group-hover:text-slate-300">
          {description}
      </p>
      <a
        className="flex max-w-fit font-rajdhani font-normal tracking-wide text-md max-h-fit ml-4 mb-4

        text-neutral-400
        hover:text-slate-600
        dark:text-neutral-500
        dark:hover:text-slate-300
        " 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <span 
          className="
            bg-left-bottom bg-gradient-to-r
            from-pink-600 to-orange-500
          dark:from-blue-300 dark:to-pink-400 
          
            bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] h-0.5 transition-all ease-in-out duration-300">
        view project
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex size-3 ml-2 mt-1 transition-colors ease-in-out duration-200">
          <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  );
};

export default PortfolioItem;
