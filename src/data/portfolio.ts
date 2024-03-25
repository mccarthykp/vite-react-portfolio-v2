export interface PortfolioItemData {
  title: string;
  subtitle: string;
  imgUrl: string;
  imgAlt: string;
  link: string;
  description: string;
  id: number; // Optional unique identifier
}

const portfolio: PortfolioItemData[] = [
  {
    title: 'Poppy & Ash',
    subtitle: 'Interior Design Studio',
    imgUrl: '/assets/imgs/poppy-and-ash-logo.png',
    imgAlt: 'Poppy & Ash Logo',
    link: 'https://www.poppyandash.com/',
    description: "A custom Shopify storefront for an Indianapolis-based interior design studio. This was built using Shopify's CLI and reference theme tools in Liquid & PHP.",
    id: 1,
  },
  {
    title: 'SupplySync',
    subtitle: 'Smart Contract',
    imgUrl: '/assets/imgs/supply-sync-logo.png',
    imgAlt: 'SupplySync Logo',
    link: 'https://www.github.com/mccarthykp/SupplySync',
    description: "A smart contract for an operational supply chain flow that includes a manufacturer, supplier, and consumer. This was written in Solidity with Truffle & Ganache.",
    id: 2,
  },
  {
    title: 'Tomato Trove',
    subtitle: 'Web Scraper',
    imgUrl: '/assets/imgs/tomato-trove-logo.png',
    imgAlt: 'Tomato Trove Logo',
    link: 'https://www.github.com/mccarthykp/TomatoTrove',
    description: "A Rotten Tomatoes web scraper that functions with custom queried endpoints to serve scraped data. This was built in Python with BeautifulSoup4.",
    id: 3,
  },
  {
    title: 'Your Project?',
    subtitle: 'Contact me!',
    imgUrl: '/assets/imgs/your-project-logo.png',
    imgAlt: 'Default Project Logo',
    link: '',
    description: "I am available for freelance and contract work. If you have a project in mind, please reach out via email and I will respond within 1-2 business days.",
    id: 4,
  },
];

export default portfolio;
