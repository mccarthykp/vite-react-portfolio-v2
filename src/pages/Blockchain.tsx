import { useState } from "react";
// Components
import BackButton from "../components/buttons/BackButton";
import WalletConnectButton from "../components/blockchain/buttons/WalletConnectButton";
import ConnectedWallet from "../components/blockchain/buttons/ConnectedWallet";
import IntegrationInfo from "../components/blockchain/walletconditional/IntegrationInfo";
import BlockchainPortfolio from "../components/portfolio/BlockchainPortfolio";
import BlogContent from "../components/blockchain/content/BlogContent";
import DonateButton from "../components/blockchain/buttons/DonateButton";
import POAPButtton from "../components/blockchain/buttons/POAPButton";
import EtherscanButton from "../components/blockchain/buttons/EtherscanButton";
import WalletOverviewButton from "../components/blockchain/buttons/WalletOverviewButton";
import EmailButton from "../components/buttons/EmailButton";
import GitHubButton from "../components/buttons/GitHubButton";
import LinkedInButton from "../components/buttons/LinkedInButton";
import Footer from "../components/Footer";
// Utilities
import { connectWallet } from "../utils/walletConnectUtils";

const Blockchain: React.FunctionComponent = () => {
  const [walletConnectedState, setWalletConnectedState] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    try {
      await connectWallet(setWalletConnectedState, setUserAddress);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to MetaMask. Please try again.");
    }
  };

  return (
    <>
      <section className="flex flex-col font-sans bg-gray-200 dark:bg-gray-900 min-h-screen py-10 md:py-20 select-none">

        <div className="absolute top-0 right-0 mt-4 mr-4">
          <WalletConnectButton 
            walletConnectedState={walletConnectedState}
            onConnectWallet={handleConnectWallet}
          />
        </div>

        {walletConnectedState && (
          <ConnectedWallet userAddress={userAddress} />
        )}

        <div className="flex flex-col text-center px-5 w-3/3 md:w-4/5 lg:w-1/2 mx-auto noselect">
          <div className="flex flex-col items-start">
            <BackButton text={"back"} destination={"/home"} />
            <div className="flex flex-col pt-8 pb-4">
              <h1 className="md:text-left text-3x1 md:text-4xl font-bold dark:text-gray-300 underline underline-offset-12 decoration-4">
                Blockchain
              </h1>
            </div>

            <div className="flex flex-col items-start space-y-6 pb-4">

              <IntegrationInfo
                walletConnectedState={walletConnectedState}
              />

              <div className="flex flex-row space-x-5">
                <POAPButtton 
                  walletConnectedState={walletConnectedState}
                  // userAddress={userAddress}
                />
                
                <DonateButton 
                  walletConnectedState={walletConnectedState}
                  userAddress={userAddress}
                />
              </div>
              <div className="flex flex-row space-x-5">
                <EtherscanButton
                  walletConnectedState={walletConnectedState}
                />

                <WalletOverviewButton
                  walletConnectedState={walletConnectedState}
                />
              </div>
            </div>

            <h2 className="md:text-left text-3x1 md:text-1xl font-bold dark:text-gray-300 underline underline-offset-12 decoration-4 mt-6">
              Projects
            </h2>
            <div className="mt-6">
              <BlockchainPortfolio />
            </div>
            
          </div>
          
          <div className="mx-auto md:mx-0">
            <BlogContent />
          </div>
          
          <div className="w-1/1 flex-col py-4 text-center">
            <div className="flex flex-col md:flex-row">
              <div className="flex-col space-x-3 mx-auto md:m-0 md:flex-row">
                <EmailButton />
                <GitHubButton />
                <LinkedInButton />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blockchain;
