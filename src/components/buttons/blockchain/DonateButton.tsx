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
  setUserAddress,
}) => {
  const handleConnectWallet = async () => {
    if (!window.ethereum) {
      // MetaMask extension not detected
      alert("Please install MetaMask extension to make a donation.");
      return;
    }

    try {
      // Request permission to connect MetaMask
      const rawAccounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const accounts = rawAccounts as unknown as string[];

      if (Array.isArray(accounts) && accounts.length > 0) {
        // Wallet connected successfully
        setWalletConnectedState(true);
        setUserAddress(accounts[0]);
      } else {
        throw new Error("Invalid accounts data received from MetaMask.");
      }
    } catch (error) {
      // Handle error
      console.error(error);
      alert("Failed to connect to MetaMask. Please try again.");
    }
  };

  const handleDonate = async () => {
    if (!walletConnectedState) {
      alert("Please connect your wallet first.");
      return;
    }

    if (!window.ethereum) {
      // MetaMask extension not detected
      alert("Please install MetaMask extension to make a donation.");
      return;
    }

    try {
      // Fetch current exchange rate from CoinGecko API
      const options = {
        url: "/v3/simple/price",
        method: "get",
        baseURL: "https://api.coingecko.com/api",
        params: {
          ids: "ethereum",
          vs_currencies: "usd",
        },
        headers: {
          "x-cg-demo-api-key": import.meta.env.VITE_COIN_GECKO_API_KEY,
        },
      };

      console.log("Fetching exchange rate...");
      const response = await axios.request(options);

      console.log("Exchange rate response:", response.data);
      const ethToUsdExchangeRate = response.data.ethereum.usd;

      console.log("ETH to USD exchange rate:", ethToUsdExchangeRate);

      // Calculate donation amount in ETH (assuming $5 USD)
      const donationAmountUSD = 5;
      console.log("Donation amount in USD:", donationAmountUSD);

      const donationAmountETH = donationAmountUSD / ethToUsdExchangeRate;
      console.log("Donation amount in ETH:", donationAmountETH);

      // Convert donation amount from ETH to wei and account for decimals
      const noDecimal = Math.round(donationAmountETH * Math.pow(10, 18));
      const donationAmountInWei = `0x${noDecimal.toString(16)}`;

      // Trigger MetaMask donation flow
      // Get provider and send transaction
      console.log("Sending transaction to MetaMask...");
      const result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: userAddress,
            to: "0x0BCB197132Ac1206c54341e44Ef062424473488B", // My wallet address
            value: donationAmountInWei, // Convert ETH to wei
          },
        ],
      });
      console.log("Transaction result:", result);

      // Check if the transaction was successful
      if (result) {
        alert("Donation successful!");
      } else {
        alert("Transaction failed. Please try again.");
      }
    } catch (error) {
      // Handle error
      console.error(error);
      alert("Failed to start donation process. Please try again.");
    }
  };

  return (
    <>
      <button
        onClick={walletConnectedState ? handleDonate : handleConnectWallet}
        className="bg-gradient-to-r from-green-400 to-blue-500 ring-inset hover:ring-2 ring-white text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:transparent transition-bg duration-300"
      >
        {walletConnectedState ? "Buy me a coffee!" : "Connect Wallet"}
      </button>
    </>
  );
};

export default DonateButton;
