import { useEffect, useState } from "react";

const SESSION_KEY = 'walletConnection';

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<string>;
}

export const useWalletConnection = () => {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Function to check if the device is mobile
  const isMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    return /android|iPad|iPhone|iPod/i.test(userAgent);
  };

  // Function to connect MetaMask and initiate signing
  const connectAndSign = async () => {
    try {
      // Check if MetaMask is available
      if (!window.ethereum) {
        if (isMobile()) {
          // Construct deep link for MetaMask Mobile
          const deepLink = `https://metamask.app.link/dapp/www.kevinmccarthy.dev/sign-message?address=${userAddress}`;
          window.location.href = deepLink;
          return;
        } else {
          alert("Please install MetaMask extension to connect your wallet.");
          return;
        }
      }

      // Request accounts from MetaMask
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (Array.isArray(accounts) && accounts.length > 0) {
        const userAddress = accounts[0];
        console.log(`Wallet Address: ${userAddress}`);

        // Call function to sign message after connecting the wallet
        await signMessage(userAddress, window.ethereum);
      } else {
        throw new Error("No accounts found in MetaMask.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to connect to MetaMask or sign message. Please try again.");
    }
  };

  // Function to sign a message
  const signMessage = async (account: string, provider: EthereumProvider) => {
    try {
      const message = "Sign in to verify your identity.";

      // Request MetaMask to sign the message
      const rawSignature = await provider.request({
        method: "personal_sign",
        params: [message, account],
      });

      console.log("Signature:", rawSignature);

      // Set isConnected to true upon successful signing
      setIsConnected(true);

      // Store connection details in session storage
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ isConnected: true, userAddress: account }));

      // Redirect back to your website after signing
      window.location.href = 'https://www.kevinmccarthy.dev'; // Adjust URL as needed
    } catch (error) {
      console.error("Failed to sign message:", error);
      alert("Failed to sign message.");
    }
  };

  // Function to disconnect wallet
  const disconnect = () => {
    setUserAddress(null);
    setIsConnected(false);
    sessionStorage.removeItem(SESSION_KEY);
  };

  // Load wallet connection state from session storage on component mount
  useEffect(() => {
    const storedData = sessionStorage.getItem(SESSION_KEY);
    if (storedData) {
      const { isConnected, userAddress } = JSON.parse(storedData);
      setIsConnected(isConnected);
      setUserAddress(userAddress);
    }
    setIsLoading(false); // Set loading to false after data is loaded
  }, []);

  return { userAddress, isConnected, connectAndSign, disconnect, isLoading };
};
