import React from "react";

interface ConnectedWalletProps {
  userAddress: string;
}

const ConnectedWallet: React.FC<ConnectedWalletProps> = ({ userAddress }) => {
  // Function to truncate the wallet address
  const truncateAddress = (address: string, length: number) => {
    const visibleChars = length * 2; // 2 hex characters per byte
    const start = address.slice(0, visibleChars / 2);
    const end = address.slice(-visibleChars / 2);
    return `${start}...${end}`;
  };

  return (
    <div className="absolute top-0 right-0 mt-4 mr-4 text-gray-400">
      Connected: {truncateAddress(userAddress, 8)}
    </div>
  );
};

export default ConnectedWallet;
