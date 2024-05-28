export interface PortfolioItemData {
  title: string;
  subtitle: string;
  tags: string[];
  imgUrl: string;
  imgAlt: string;
  link: string;
  description: string;
  id: number; // Optional unique identifier
}

const portfolio: PortfolioItemData[] = [
  {
    title: 'Blockwell Health',
    subtitle: 'Decentralized EHR Platform',
    tags: ['IPFS', 'HyperLedger Fabric'],
    imgUrl: '/assets/imgs/blockwell-health-logo.png',
    imgAlt: 'Blockwell Health Logo',
    link: 'https://www.linkedin.com/company/blockwell-health',
    description: "Blockwell was founded to help ensure trust and transparency while streamlining healthcare operations in the U.S. Taking a holistic approach to data management, we seamlessly integrate secure and encrypted solutions for electronic prescriptions and decentralized health records.",
    id: 1,
  },
  {
    title: 'Poppy & Ash',
    subtitle: 'Interior Design Studio',
    tags: ['PHP', 'Liquid'],
    imgUrl: '/assets/imgs/poppy-and-ash-logo.png',
    imgAlt: 'Poppy & Ash Logo',
    link: 'https://www.poppyandash.com/',
    description: "A custom Shopify storefront for an Indianapolis-based interior design studio. This was built using Shopify's CLI and reference theme tools in Liquid & PHP.",
    id: 2,
  },
  {
    title: 'SupplySync',
    subtitle: 'Smart Contract',
    tags: ['Solidity', 'Truffle', 'Ganache'],
    imgUrl: '/assets/imgs/supply-sync-logo.png',
    imgAlt: 'SupplySync Logo',
    link: 'https://www.github.com/mccarthykp/SupplySync',
    description: "SupplySync is designed to streamline supply chain management through smart contracts. This showcases the potential of decentralized technology and demonstrates basic functionalities required to create and manage supply chain processes.",
    id: 3,
  },
  {
    title: 'Tomato Trove',
    subtitle: 'Web Scraper',
    tags: ['Python', 'BeautifulSoup4'],
    imgUrl: '/assets/imgs/tomato-trove-logo.png',
    imgAlt: 'Tomato Trove Logo',
    link: 'https://www.github.com/mccarthykp/TomatoTrove',
    description: "A Rotten Tomatoes web scraper that functions with custom queried endpoints to serve scraped data. This was built in Python with BeautifulSoup4.",
    id: 4,
  },
  {
    title: 'TokenTracker',
    subtitle: 'Currency Monitoring',
    tags: ['CoinGecko API', 'Vite', 'React'],
    imgUrl: '/assets/imgs/tokentracker-logo.png',
    imgAlt: 'TokenTracker Logo',
    link: 'https://www.github.com/mccarthykp/TokenTracker',
    description: "TokenTracker is a web application that tracks the top 25 cryptocurrencies by market capitalization. It provides real-time updates and allows users to filter coins by price and 24-hour change.",
    id: 5,
  },
];

export default portfolio;
