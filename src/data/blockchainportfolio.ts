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
];

export default blockchainportfolio;
