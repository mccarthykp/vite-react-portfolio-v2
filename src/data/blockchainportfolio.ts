export interface BlockchainPortfolioItemData {
  title: string;
  subtitle: string;
  tags: string[];
  imgUrl: string;
  imgAlt: string;
  link: string;
  description: string;
  id: number; // Optional unique identifier
}

const blockchainportfolio: BlockchainPortfolioItemData[] = [
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
    title: 'TokenTracker',
    subtitle: 'Currency Monitoring',
    tags: ['CoinGecko API', 'Vite', 'React'],
    imgUrl: '/assets/imgs/tokentracker-logo.png',
    imgAlt: 'TokenTracker Logo',
    link: 'https://www.github.com/mccarthykp/TokenTracker',
    description: "TokenTracker is a web application that tracks the top 25 cryptocurrencies by market capitalization. It provides real-time updates and allows users to filter coins by price and 24-hour change.",
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
];

export default blockchainportfolio;
