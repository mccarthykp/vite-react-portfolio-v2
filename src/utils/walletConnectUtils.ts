import { useEffect, useState } from "react";

const SESSION_KEY = 'walletConnection';

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<string>;
}

const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor;
  return /android|iPad|iPhone|iPod/i.test(userAgent);
};

export const useWalletConnection = () => {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const connectAndSign = async (provider: EthereumProvider | undefined) => {
    try {
      if (!provider) {
        if (isMobile()) {
          // Construct the deep link URL with the correct redirection path
          const deepLinkUrl = 'https://metamask.app.link/dapp/www.kevinmccarthy.dev/blockchain';
          window.location.href = deepLinkUrl;
          return;
        } else {
          alert("Please install MetaMask extension to connect your wallet.");
          return;
        }
      }

      const rawAccounts = await provider.request({
        method: "eth_requestAccounts",
      });

      if (!rawAccounts) {
        alert(
          "Failed to connect to MetaMask. Please make sure MetaMask is installed and try again."
        );
        return;
      }

      const accounts = rawAccounts as unknown as string[];

      if (Array.isArray(accounts) && accounts.length > 0) {
        setUserAddress(accounts[0]);
        console.log(`Wallet Address: ${accounts[0]}`);
        await signMessage(accounts[0], provider);
      } else {
        throw new Error("No accounts found in MetaMask.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to connect to MetaMask. Please try again.");
    }
  };

  const signMessage = async (account: string, provider: EthereumProvider) => {
    try {
      const message = "Sign in to verify your identity.";

      const rawSignature = await provider.request({
        method: "personal_sign",
        params: [message, account],
      });

      console.log("Signature:", rawSignature);

      setIsConnected(true);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ isConnected: true, userAddress: account }));

      // After signing, you can optionally redirect here if needed
      // window.location.href = '/dashboard'; // Redirect to your dashboard or another page
    } catch (error) {
      console.error("Failed to sign message:", error);
      alert("Failed to sign message.");
    }
  };

  const disconnect = () => {
    setUserAddress(null);
    setIsConnected(false);
    sessionStorage.removeItem(SESSION_KEY);
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem(SESSION_KEY);
    if (storedData) {
      const { isConnected, userAddress } = JSON.parse(storedData);
      setIsConnected(isConnected);
      setUserAddress(userAddress);
    }
    setIsLoading(false);
  }, []);

  return { userAddress, isConnected, connectAndSign, disconnect, isLoading };
};
