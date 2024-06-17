import { useState } from "react";

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<string>;
}

export const useWalletConnection = () => {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  // Function to handle wallet connection and signing
  const connectAndSign = async (provider: EthereumProvider | undefined) => {
    try {
      // Check if provider is undefined
      if (!provider) {
        alert("Please install MetaMask extension to connect your wallet.");
        return;
      }

      // Request accounts from the Ethereum provider
      const rawAccounts = await provider.request({
        method: "eth_requestAccounts",
      });

      // Handle the case where rawAccounts might be undefined or null
      if (!rawAccounts) {
        alert(
          "Failed to connect to MetaMask. Please make sure MetaMask is installed and try again."
        );
        return;
      }

      const accounts = rawAccounts as unknown as string[];

      if (Array.isArray(accounts) && accounts.length > 0) {
        // Set user address
        setUserAddress(accounts[0]);
        console.log(`Wallet Address: ${accounts[0]}`);

        // Call function to sign auth message after connecting the wallet
        await signMessage(accounts[0], provider);
      } else {
        throw new Error("No accounts found in MetaMask.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to connect to MetaMask. Please try again.");
    }
  };

  // Function to sign message
  const signMessage = async (account: string, provider: EthereumProvider) => {
    try {
      const message = "Sign in to verify your identity.";

      // Request the Ethereum provider to sign the message
      const rawSignature = await provider.request({
        method: "personal_sign",
        params: [message, account],
      });

      // Handle the signature as needed (send to backend for verification, etc.)
      console.log("Signature:", rawSignature);

      // Set isConnected to true upon successful signing
      setIsConnected(true);
    } catch (error) {
      console.error("Failed to sign message:", error);
      alert("Failed to sign message.");
    }
  };

  return { userAddress, isConnected, connectAndSign };
};