import axios from "axios";

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
  userAddress: string;
}

const DonateButton: React.FunctionComponent<WalletConnectButtonProps> = ({
  walletConnectedState,
  userAddress,
}) => {

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
    <>
      <button
        type="button"
        onClick={handleDonate}
        disabled={!walletConnectedState}
        className={`bg-gradient-to-r from-green-400 to-blue-500 ring-inset hover:ring-2 ring-white text-white font-medium py-3 px-6 rounded-lg shadow-lg focus:transparent ${walletConnectedState ? '' : 'blur-sm'}`}
      >
        Buy me a coffee!
      </button>
    </>
  );
};

export default DonateButton;
