import React from "react";
// import ButtonTooltip from "../../ButtonTooltip";

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<string>;
}

interface WalletOverviewButtonProps {
  walletConnectedState: boolean;
  userAddress: string;
}

const WalletOverviewButton: React.FunctionComponent<WalletOverviewButtonProps> = ({
  walletConnectedState,
  // userAddress,
}) => {
  const handleWalletOverviewClick = async () => {
    try {
      if (window.ethereum) {
        // Check if MetaMask is installed
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const currentAccount = accounts[0];

        // Open new tab with wallet information
        window.open(`https://etherscan.io/address/${currentAccount}`, '_blank');
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
        onClick={handleWalletOverviewClick}
        // Disable button if no wallet is connected
        disabled={!walletConnectedState} 
        className={`bg-gradient-to-r from-green-400 to-blue-500 ring-inset hover:ring-2 ring-white text-white font-medium w-45 py-3 w-40 rounded-lg shadow-lg focus:transparent ${
          walletConnectedState ? "" : "blur-sm hover:ring-0 hover:ring-transparent"
        }`}
      >
        Wallet Overview
      </button>
    </>
  );
};

export default WalletOverviewButton;
