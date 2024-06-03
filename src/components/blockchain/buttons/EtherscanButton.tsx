import React from "react";

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<string>;
}

interface EtherscanButtonProps {
  walletConnectedState: boolean;
}

const EtherscanButton: React.FunctionComponent<EtherscanButtonProps> = ({
  walletConnectedState,
}) => {
  const handleEtherscanButtonClick = async () => {
    try {
      if (window.ethereum) {
        // Check if MetaMask is installed
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const currentAccount = accounts[0];

        // Open new tab with wallet information
        window.open(`https://etherscan.io/address/${currentAccount}#analytics`, '_blank');
      } else {
        // MetaMask is not installed
        alert("MetaMask is not installed");
      }
    } catch (error) {
      console.error("Error fetching wallet information:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleEtherscanButtonClick}
        // Disable button if no wallet is connected
        disabled={!walletConnectedState} 
        className={`bg-gradient-to-r from-orange-500 to-pink-500 ring-inset hover:ring-2 ring-white text-white font-medium md:w-40 w-full py-3 rounded-lg shadow-lg focus:transparent ${
          walletConnectedState ? "" : "blur-sm hover:ring-0 hover:ring-transparent"
        }`}
      >
        Etherscan
      </button>
    </>
  );
};

export default EtherscanButton;
