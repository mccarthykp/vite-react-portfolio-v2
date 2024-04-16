const ConnectedWallet = ({ userAddress }: { userAddress: string | null}) => {
  // Since userAddress is passed as a prop, we don't need to use useState here.

  // Function to truncate the wallet address
  const truncateAddress = (address: string, length: number) => {
    const visibleChars = length * 2; // 2 hex characters per byte
    const start = address.slice(0, visibleChars / 2);
    const end = address.slice(-visibleChars / 2);
    return `${start}...${end}`;
  };

  // If userAddress is null or undefined, display a loading message
  if (!userAddress) {
    return (
      <div className="absolute top-0 right-0 mt-4 mr-4 text-gray-400">
        Loading...
      </div>
    );
  }

  // Display the truncated userAddress
  return (
    <div className="absolute top-0 right-0 mt-4 mr-4 text-gray-400">
      <span className="text-green-300">Connected</span>: {truncateAddress(userAddress, 8)}
    </div>
  );
};

export default ConnectedWallet;
