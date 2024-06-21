export interface BlockchainPortfolioItemData {
  description: string;
  id: number;
  imgAlt: string;
  imgUrl: string;
  link: string;
  subtitle: string;
  tags: string[];
  title: string;
}

const blockchainportfolio: BlockchainPortfolioItemData[] = [
  {
    description: "Blockwell was founded to help ensure trust and transparency while streamlining healthcare operations in the U.S. Taking a holistic approach to data management, we seamlessly integrate secure and encrypted solutions for electronic prescriptions and decentralized health records.",
    id: 1,
    imgAlt: 'Blockwell Health Logo',
    imgUrl: '/assets/imgs/blockwell-health-logo.png',
    link: 'https://www.linkedin.com/company/blockwell-health',
    subtitle: 'Decentralized Health Management Platform',
    tags: ['HyperLedger Fabric', 'IPFS', 'Solidity'],
    title: 'Blockwell Health',
  },
  {
    description: "DEHR provides secure, encrypted storage, sharing, and access to patient health information. This enables healthcare providers to deliver personalized, interoperable care while streamlining administrative processes through robust access control, auditability, and decentralized storage solutions.",
    id: 2,
    imgAlt: 'DEHR Logo',
    imgUrl: '/assets/imgs/dehr-logo.png',
    link: 'https://www.linkedin.com/company/blockwell-health',
    subtitle: 'Electronic Health Records Service',
    tags: ['IPFS', 'Solidity'],
    title: 'DEHR',
  },
  {
    description: "FillRx is a comprehensive web and mobile application designed to seamlessly integrate patients, healthcare providers, and pharmacies, optimizing the prescription and fulfillment journey. Utilizing private blockchain technology, FillRx provides a secure, encrypted, and decentralized solution for the storage and transfer of electronic prescriptions.",
    id: 3,
    imgAlt: 'FillRX Logo',
    imgUrl: '/assets/imgs/fillrx-logo.png',
    link: 'https://www.linkedin.com/company/blockwell-health',
    subtitle: 'E-script Service',
    tags: ['Solidity'],
    title: 'FillRx',
  },
  {
    description: "TokenTracker is a web application that tracks the top 25 cryptocurrencies by market capitalization. It provides real-time updates and allows users to filter coins by price and 24-hour change.",
    id: 4,
    imgAlt: 'TokenTracker Logo',
    imgUrl: '/assets/imgs/tokentracker-logo.png',
    link: 'https://www.github.com/mccarthykp/TokenTracker',
    subtitle: 'Currency Monitoring',
    tags: ['CoinGecko API', 'React', 'TypeScript'],
    title: 'TokenTracker',
  },
  { 
    description: "SupplySync is designed to streamline supply chain management through smart contracts. This showcases the potential of decentralized technology and demonstrates basic functionalities required to create and manage supply chain processes.",
    id: 5,
    imgAlt: 'SupplySync Logo',
    imgUrl: '/assets/imgs/supply-sync-logo.png',
    link: 'https://www.github.com/mccarthykp/SupplySync',
    subtitle: 'Smart Contract',
    tags: ['Ganache', 'Solidity', 'Truffle'],
    title: 'SupplySync',
  },
];

export default blockchainportfolio;
