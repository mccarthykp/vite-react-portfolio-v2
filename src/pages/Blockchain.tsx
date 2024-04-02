// Components
import React from "react";
import BackButton from "../components/buttons/BackButton";
import ConnectedWallet from "../components/buttons/blockchain/ConnectedWallet";
import DonateButton from "../components/buttons/blockchain/DonateButton";
import EmailButton from "../components/buttons/EmailButton";
import GitHubButton from "../components/buttons/GitHubButton";
import LinkedInButton from "../components/buttons/LinkedInButton";
import Footer from "../components/Footer";

interface BlockchainProps {
  walletConnectedState: boolean;
  userAddress: string;
  setWalletConnectedState: React.Dispatch<React.SetStateAction<boolean>>;
  setUserAddress: React.Dispatch<React.SetStateAction<string>>;
}

const Blockchain: React.FunctionComponent<BlockchainProps> = ({
  walletConnectedState,
  userAddress,
  setWalletConnectedState,
  setUserAddress,
}) => {
  return (
    <>
      <body className="flex flex-col font-sans bg-gray-200 dark:bg-gray-900 min-h-screen py-10 md:py-20 select-none">
        <section className="flex flex-col text-center px-5 w-3/3 md:w-4/5 lg:w-1/2 mx-auto noselect">
          <div className="flex flex-col items-start">
            <BackButton text={"back"} />
            <div className="flex flex-col py-8">
              <h1 className="text-3x1 md:text-4xl font-bold dark:text-gray-300 underline underline-offset-12 decoration-4">
                Blockchain
              </h1>
            </div>
          </div>

          {walletConnectedState && (
            <div className="absolute top-0 right-0 mt-4 mr-4 text-gray-400">
              <ConnectedWallet userAddress={userAddress} />
            </div>
          )}

          <div className="w-1/1 flex-col py-4 text-center">
            <div className="flex flex-col md:flex-row">
              <div className="mr-3">
                <DonateButton
                  walletConnectedState={walletConnectedState}
                  userAddress={userAddress}
                  setWalletConnectedState={setWalletConnectedState}
                  setUserAddress={setUserAddress}
                />
              </div>
              <div className="flex-col space-x-3 space-y-4 md:space-y-0 mx-auto md:m-0 md:flex-row">
                <EmailButton />
                <GitHubButton />
                <LinkedInButton />
              </div>
            </div>
            <Footer />
          </div>
        </section>
      </body>
    </>
  );
};

export default Blockchain;
