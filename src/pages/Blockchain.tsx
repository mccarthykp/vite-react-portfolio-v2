// Components
import BackButton from "../components/buttons/BackButton";
import WalletConnectButton from "../components/blockchain/buttons/WalletConnectButton";
import ConnectedWallet from "../components/blockchain/buttons/ConnectedWallet";
import IntegrationInfo from "../components/blockchain/walletconditional/IntegrationInfo";
import BlockchainPortfolio from "../components/portfolio/BlockchainPortfolio";
import BlogContent from "../components/blockchain/content/BlogContent";
import DonateButton from "../components/blockchain/buttons/DonateButton";
// import POAPButtton from "../components/blockchain/buttons/POAPButton";
import EtherscanButton from "../components/blockchain/buttons/EtherscanButton";
// import WalletOverviewButton from "../components/blockchain/buttons/WalletOverviewButton";
import EmailButton from "../components/buttons/EmailButton";
import GitHubButton from "../components/buttons/GitHubButton";
import LinkedInButton from "../components/buttons/LinkedInButton";
import Footer from "../components/Footer";
import { useWalletConnection } from "../utils/walletConnectUtils";

const Blockchain: React.FunctionComponent = () => {
  const { connectAndSign, disconnect, isConnected, isLoading, userAddress } = useWalletConnection();

  if (isLoading) {
    return (
      <div className="bg-blockchain dark:dark-bg-blockchain flex justify-center items-center font-sans bg-neutral-300 dark:bg-gray-900 min-h-screen py-10 select-none">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <section className="scroll-smooth bg-blockchain dark:dark-bg-blockchain flex flex-col font-sans bg-neutral-300 dark:bg-gray-900 min-h-screen py-10 select-none">

        <div className="flex flex-col px-5 w-3/3 md:max-w-screen-md lg:max-w-screen-lg mx-auto noselect">
          <div className="flex flex-row justify-between">
            <BackButton text={"back"} destination={"/home"} />

            {!isConnected && (
              <WalletConnectButton 
              onConnectWallet={() => connectAndSign(window.ethereum)}
              />
            )}

            {isConnected && (
              <ConnectedWallet userAddress={userAddress} onDisconnect={disconnect} />
            )}
          </div>

          <div className="flex flex-col items-start">
            <div className="flex flex-col pt-8 pb-4">
              <h1 className="md:text-4xl text-3xl font-orbitron font-extrabold tracking-wide dark:text-gray-200 underline underline-offset-12 decoration-2">
                Blockchain
              </h1>
            </div>

            <div className="flex flex-col space-y-4 pb-4 w-full">

              <IntegrationInfo
                isConnected={isConnected}
              />

              <div className="flex md:flex-row md:space-y-0 md:space-x-5 flex-col items-center space-y-4">
                <DonateButton 
                  isConnected={isConnected}
                  userAddress={userAddress}
                />

                <EtherscanButton
                  isConnected={isConnected}
                />
              </div>
              {/* <div className="flex md:flex-row md:space-y-0 md:space-x-5 flex-col items-center space-y-4">
                <POAPButtton 
                  isConnected={isConnected}
                  // userAddress={userAddress}
                />
                
                <WalletOverviewButton
                  isConnected={isConnected}
                />
              </div> */}
            </div>

            <h2 className="md:text-left md:text-3xl text-2xl font-orbitron font-extrabold tracking-wide dark:text-gray-300 underline underline-offset-12 decoration-1 mt-6">
              Projects
            </h2>
            <div className="mt-10">
              <BlockchainPortfolio />
            </div>
            
          </div>
          
          <div className="mx-auto md:mx-0">
            <BlogContent />
          </div>
          
          <div className="flex flex-col w-1/1 text-center">
            <div className="flex space-x-3 mx-auto md:m-0 md:flex-row">
              <EmailButton />
              <GitHubButton />
              <LinkedInButton />
            </div>
            <div className="mt-4">
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blockchain;
