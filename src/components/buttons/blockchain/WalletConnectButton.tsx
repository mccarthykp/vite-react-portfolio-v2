declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<string>;
}

interface WalletConnectButtonProps {
  walletConnectedState: boolean;
  setWalletConnectedState: React.Dispatch<React.SetStateAction<boolean>>;
  userAddress: string;
  setUserAddress: React.Dispatch<React.SetStateAction<string>>;
}

const WalletConnectButton: React.FunctionComponent<WalletConnectButtonProps> = ({
  walletConnectedState,
  setWalletConnectedState,
  userAddress,
  setUserAddress
}) => {
  const handleConnectWallet = async () => {
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
      } else {
        throw new Error("No accounts found in MetaMask.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to connect to MetaMask. Please try again.");
    }
    console.log("userAddress:", userAddress);
  };

  return (
    <>
      {!walletConnectedState && (
        <button
          onClick={handleConnectWallet}
          className="bg-gradient-to-r from-green-400 to-blue-500 ring-inset hover:ring-2 ring-white text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:transparent transition-bg duration-300"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default WalletConnectButton;
