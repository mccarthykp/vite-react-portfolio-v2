export interface PortfolioItemData {
  description: string;
  id: number;
  imgAlt: string;
  imgUrl: string;
  link: string;
  subtitle: string;
  tags: string[];
  title: string;
}

const portfolio: PortfolioItemData[] = [
  {
    description: "Blockwell was founded to help ensure trust and transparency while streamlining healthcare operations in the U.S. Taking a holistic approach to data management, we seamlessly integrate secure and encrypted solutions for electronic prescriptions and decentralized health records.",
    id: 1,
    imgAlt: 'Blockwell Health Logo',
    imgUrl: '/assets/imgs/blockwell-health-logo.png',
    link: 'https://www.linkedin.com/company/blockwell-health',
    subtitle: 'Decentralized Healthcare Platform',
    tags: ['HyperLedger Fabric', 'IPFS'],
    title: 'Blockwell Health',
  },
  {
    description: "Inspired by Cyberpunk 2077, this is an implementation of the Breach Protocol Quickhack minigame. This was built using React with Vite, TypeScript and Tailwind CSS.",
    id: 2,
    imgAlt: 'Breach Protocol Logo',
    imgUrl: '/assets/imgs/breach-protocol-logo.png',
    link: 'https://github.com/mccarthykp/BreachProtocol',
    subtitle: 'Hacking Minigame',
    tags: ['React', 'TypeScript'],
    title: 'Breach Protocol',
  },
  // {
  //   title: 'Poppy & Ash',
  //   subtitle: 'Interior Design Studio',
  //   tags: ['Liquid', 'PHP'],
  //   imgUrl: '/assets/imgs/poppy-and-ash-logo.png',
  //   imgAlt: 'Poppy & Ash Logo',
  //   link: 'https://www.poppyandash.com/',
  //   description: "A custom Shopify storefront for an Indianapolis-based interior design studio. This was built using Shopify's CLI and reference theme tools in Liquid & PHP.",
  //   id: 3,
  // },
  {
    description: "SupplySync is designed to streamline supply chain management through smart contracts. This showcases the potential of decentralized technology and demonstrates basic functionalities required to create and manage supply chain processes.",
    id: 3,
    imgAlt: 'SupplySync Logo',
    imgUrl: '/assets/imgs/supply-sync-logo.png',
    link: 'https://www.github.com/mccarthykp/SupplySync',
    subtitle: 'Smart Contract',
    tags: ['Ganache', 'Solidity', 'Truffle'],
    title: 'SupplySync',
  },
  {
    description: "FillRx is a comprehensive web and mobile application designed to seamlessly integrate patients, healthcare providers, and pharmacies, optimizing the prescription and fulfillment journey. Utilizing private blockchain technology, FillRx provides a secure, encrypted, and decentralized solution for the storage and transfer of electronic prescriptions.",
    id: 4,
    imgAlt: 'FillRX Logo',
    imgUrl: '/assets/imgs/fillrx-logo.png',
    link: 'https://www.linkedin.com/company/blockwell-health',
    subtitle: 'E-script Service',
    tags: ['Solidity'],
    title: 'FillRx',
  },
  {
    description: "A Rotten Tomatoes web scraper that functions with custom queried endpoints to serve scraped data. This was built in Python with BeautifulSoup4.",
    id: 5,
    imgAlt: 'Tomato Trove Logo',
    imgUrl: '/assets/imgs/tomato-trove-logo.png',
    link: 'https://www.github.com/mccarthykp/TomatoTrove',
    subtitle: 'Web Scraper',
    tags: ['BeautifulSoup4', 'Python'],
    title: 'Tomato Trove',
  },
  {
    description: "DEHR provides secure, encrypted storage, sharing, and access to patient health information. This enables healthcare providers to deliver personalized, interoperable care while streamlining administrative processes through robust access control, auditability, and decentralized storage solutions.",
    id: 6,
    imgAlt: 'DEHR Logo',
    imgUrl: '/assets/imgs/dehr-logo.png',
    link: 'https://www.linkedin.com/company/blockwell-health',
    subtitle: 'EHR Service',
    tags: ['IPFS', 'Solidity'],
    title: 'DEHR',
  },
  {
    description: "TokenTracker is a web application that tracks the top 25 cryptocurrencies by market capitalization. It provides real-time updates and allows users to filter coins by price and 24-hour change.",
    id: 7,
    imgAlt: 'TokenTracker Logo',
    imgUrl: '/assets/imgs/tokentracker-logo.png',
    link: 'https://www.github.com/mccarthykp/TokenTracker',
    subtitle: 'Currency Monitoring',
    tags: ['CoinGecko API', 'TypeScript'],
    title: 'TokenTracker',
  },
];

export default portfolio;
