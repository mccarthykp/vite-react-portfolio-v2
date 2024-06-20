import blockchainportfolio, { BlockchainPortfolioItemData } from "../../data/blockchainportfolio.ts";
import BlockchainPortfolioItem from "./BlockchainPortfolioItem.tsx";

export default function BlockchainPortfolio() {
  return (
    <>
      <div className="flex flex-col">
        {blockchainportfolio.map((project: BlockchainPortfolioItemData) => (
          <BlockchainPortfolioItem
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
