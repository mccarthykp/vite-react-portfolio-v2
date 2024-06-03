import React from "react";
import { useNavigate } from "react-router-dom";

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
}

const WalletOverviewButton: React.FunctionComponent<WalletOverviewButtonProps> = ({
  walletConnectedState,
}) => {
  const navigate = useNavigate();

  const handleWalletOverviewButtonClick = async () => {
    try {
      if (window.ethereum) {
        // Check if MetaMask is installed
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const currentAccount = accounts[0];

        // Open new tab with wallet address
        navigate('/wallet-overview', { state: { address: currentAccount } });
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
        onClick={handleWalletOverviewButtonClick}
        // Disable button if no wallet is connected
        disabled={!walletConnectedState} 
        className={`bg-gradient-to-r from-pink-500 to-yellow-500 ring-inset hover:ring-2 ring-white text-white font-medium md:w-40 w-full py-3 rounded-lg shadow-lg focus:transparent ${
          walletConnectedState ? "" : "blur-sm hover:ring-0 hover:ring-transparent"
        }`}
      >
        Wallet Overview
      </button>
    </>
  );
};

export default WalletOverviewButton;
