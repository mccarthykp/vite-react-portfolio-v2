import { Dispatch, SetStateAction } from "react";

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<string>;
}

export const connectWallet = async (
  setWalletConnectedState: React.Dispatch<React.SetStateAction<boolean>>,
  setUserAddress: Dispatch<SetStateAction<string | null>>
) => {
  if (!window.ethereum) {
    alert("Please install MetaMask extension to make a donation.");
    return;
  }

  try {
    const rawAccounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const accounts = rawAccounts as unknown as string[];

    if (Array.isArray(accounts) && accounts.length > 0) {
      setWalletConnectedState(true);
      setUserAddress(accounts[0]);
      console.log(`Wallet Address: ${accounts[0]}`);
    } else {
      throw new Error("No accounts found in MetaMask.");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to connect to MetaMask. Please try again.");
  }
};
