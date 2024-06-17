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
    tags: ['HyperLedger Fabric', 'IPFS'],
    imgUrl: '/assets/imgs/blockwell-health-logo.png',
    imgAlt: 'Blockwell Health Logo',
    link: 'https://www.linkedin.com/company/blockwell-health',
    description: "Blockwell was founded to help ensure trust and transparency while streamlining healthcare operations in the U.S. Taking a holistic approach to data management, we seamlessly integrate secure and encrypted solutions for electronic prescriptions and decentralized health records.",
    id: 1,
  },
  {
    title: 'Breach Protocol',
    subtitle: 'Hacking Minigame',
    tags: ['React', 'TypeScript', 'Vite'],
    imgUrl: '/assets/imgs/breach-protocol-logo.png',
    imgAlt: 'Breach Protocol Logo',
    link: 'https://github.com/mccarthykp/BreachProtocol',
    description: "Inspired by Cyberpunk 2077, this is an implementation of the Breach Protocol Quickhack minigame. This was built using React with Vite, TypeScript and Tailwind CSS.",
    id: 2,
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
    title: 'SupplySync',
    subtitle: 'Smart Contract',
    tags: ['Ganache', 'Solidity', 'Truffle'],
    imgUrl: '/assets/imgs/supply-sync-logo.png',
    imgAlt: 'SupplySync Logo',
    link: 'https://www.github.com/mccarthykp/SupplySync',
    description: "SupplySync is designed to streamline supply chain management through smart contracts. This showcases the potential of decentralized technology and demonstrates basic functionalities required to create and manage supply chain processes.",
    id: 3,
  },
  {
    title: 'FillRx',
    subtitle: 'E-script Service',
    tags: ['Solidity'],
    imgUrl: '/assets/imgs/fillrx-logo.png',
    imgAlt: 'FillRX Logo',
    // link: 'https://www.github.com/mccarthykp/FillRx',
    link: 'https://www.linkedin.com/company/blockwell-health',
    description: "FillRx is a comprehensive web and mobile application designed to seamlessly integrate patients, healthcare providers, and pharmacies, optimizing the prescription and fulfillment journey. Utilizing private blockchain technology, FillRx provides a secure, encrypted, and decentralized solution for the storage and transfer of electronic prescriptions.",
    id: 4,
  },
  {
    title: 'Tomato Trove',
    subtitle: 'Web Scraper',
    tags: ['BeautifulSoup4', 'Python'],
    imgUrl: '/assets/imgs/tomato-trove-logo.png',
    imgAlt: 'Tomato Trove Logo',
    link: 'https://www.github.com/mccarthykp/TomatoTrove',
    description: "A Rotten Tomatoes web scraper that functions with custom queried endpoints to serve scraped data. This was built in Python with BeautifulSoup4.",
    id: 5,
  },
  {
    title: 'DEHR',
    subtitle: 'Electronic Health Records Service',
    tags: ['IPFS', 'Solidity'],
    imgUrl: '/assets/imgs/dehr-logo.png',
    imgAlt: 'DEHR Logo',
    // link: 'https://www.github.com/mccarthykp/DEHR',
    link: 'https://www.linkedin.com/company/blockwell-health',
    description: "DEHR provides secure, encrypted storage, sharing, and access to patient health information. This enables healthcare providers to deliver personalized, interoperable care while streamlining administrative processes through robust access control, auditability, and decentralized storage solutions.",
    id: 6,
  },
  {
    title: 'TokenTracker',
    subtitle: 'Currency Monitoring',
    tags: ['CoinGecko API', 'React', 'TypeScript', 'Vite'],
    imgUrl: '/assets/imgs/tokentracker-logo.png',
    imgAlt: 'TokenTracker Logo',
    link: 'https://www.github.com/mccarthykp/TokenTracker',
    description: "TokenTracker is a web application that tracks the top 25 cryptocurrencies by market capitalization. It provides real-time updates and allows users to filter coins by price and 24-hour change.",
    id: 7,
  },
];

export default portfolio;
