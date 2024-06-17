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
    subtitle: 'Decentralized Health Management Platform',
    tags: ['AWS', 'IPFS', 'Solidity', 'HyperLedger Fabric'],
    imgUrl: '/assets/imgs/blockwell-health-logo.png',
    imgAlt: 'Blockwell Health Logo',
    link: 'https://www.linkedin.com/company/blockwell-health',
    description: "Blockwell was founded to help ensure trust and transparency while streamlining healthcare operations in the U.S. Taking a holistic approach to data management, we seamlessly integrate secure and encrypted solutions for electronic prescriptions and decentralized health records.",
    id: 1,
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
    id: 2,
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
    id: 3,
  },
  {
    title: 'TokenTracker',
    subtitle: 'Currency Monitoring',
    tags: ['Vite', 'React', 'TypeScript', 'CoinGecko API'],
    imgUrl: '/assets/imgs/tokentracker-logo.png',
    imgAlt: 'TokenTracker Logo',
    link: 'https://www.github.com/mccarthykp/TokenTracker',
    description: "TokenTracker is a web application that tracks the top 25 cryptocurrencies by market capitalization. It provides real-time updates and allows users to filter coins by price and 24-hour change.",
    id: 4,
  },
  {
    title: 'SupplySync',
    subtitle: 'Smart Contract',
    tags: ['Truffle', 'Ganache', 'Solidity'],
    imgUrl: '/assets/imgs/supply-sync-logo.png',
    imgAlt: 'SupplySync Logo',
    link: 'https://www.github.com/mccarthykp/SupplySync',
    description: "SupplySync is designed to streamline supply chain management through smart contracts. This showcases the potential of decentralized technology and demonstrates basic functionalities required to create and manage supply chain processes.",
    id: 5,
  },
];

export default blockchainportfolio;
