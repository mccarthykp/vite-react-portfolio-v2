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

const WalletConnectButton: React.FunctionComponent<
  WalletConnectButtonProps
> = ({
  walletConnectedState,
  setWalletConnectedState,
  userAddress,
  setUserAddress,
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
          className="bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 text-gray-900 font-medium py-1.5 px-6 rounded-lg shadow-lg focus:transparent transition duration-300"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default WalletConnectButton;
