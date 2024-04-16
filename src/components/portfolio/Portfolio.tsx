import portfolio, { PortfolioItemData } from "../../data/portfolio.ts";
import PortfolioItem from "./PortfolioItem.tsx";

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col">
        {portfolio.map((project: PortfolioItemData) => (
          <PortfolioItem
            title={project.title}
            subtitle={project.subtitle}
            tags={project.tags}
            imgUrl={project.imgUrl}
            imgAlt={project.imgAlt}
            link={project.link}
            description={project.description}
            key={project.id}
          />
        ))}
      </div>
    </>
  );
}
