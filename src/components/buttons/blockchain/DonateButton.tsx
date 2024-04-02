import axios from "axios";

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<string>;
}

interface DonateButtonProps {
  walletConnectedState: boolean;
  setWalletConnectedState: React.Dispatch<React.SetStateAction<boolean>>;
  userAddress: string;
  setUserAddress: React.Dispatch<React.SetStateAction<string>>;
}

const DonateButton: React.FunctionComponent<DonateButtonProps> = ({
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

  const handleDonate = async () => {
    if (!walletConnectedState) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const ethToUsdExchangeRate = await fetchEthToUsdExchangeRate();

      const donationAmountUSD = 5;
      const donationAmountETH = donationAmountUSD / ethToUsdExchangeRate;
      const donationAmountInWei = toWei(donationAmountETH);

      const result = await sendTransaction(donationAmountInWei);
      if (result) {
        alert("Donation successful!");
      } else {
        alert("Transaction failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to start donation process. Please try again.");
    }
  };

  const fetchEthToUsdExchangeRate = async (): Promise<number> => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    );
    return response.data.ethereum.usd;
  };

  const toWei = (amount: number): string => {
    const noDecimal = Math.round(amount * Math.pow(10, 18));
    return `0x${noDecimal.toString(16)}`;
  };

  const sendTransaction = async (amountInWei: string): Promise<boolean> => {
    const result = await window.ethereum?.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: userAddress,
          to: "0x0BCB197132Ac1206c54341e44Ef062424473488B", // My wallet address
          value: amountInWei,
        },
      ],
    });
    return Boolean(result);
  };

  return (
    <button
      onClick={walletConnectedState ? handleDonate : handleConnectWallet}
      className="bg-gradient-to-r from-green-400 to-blue-500 ring-inset hover:ring-2 ring-white text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:transparent transition-bg duration-300"
    >
      {walletConnectedState ? "Buy me a coffee!" : "Connect Wallet"}
    </button>
  );
};

export default DonateButton;
