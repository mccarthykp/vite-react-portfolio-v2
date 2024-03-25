import React from "react";
import portfolio, { PortfolioItemData } from "../data/portfolio.ts";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-start">
          <div className="flex flex-col py-8">
            <h1 className="text-3x1 md:text-4xl font-bold dark:text-gray-300 underline underline-offset-12 decoration-4">
              Projects
            </h1>
          </div>
        </div>

        {portfolio.map((project: PortfolioItemData) => (
          <PortfolioItem
            title={project.title}
            subtitle={project.subtitle}
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

export default Portfolio;
