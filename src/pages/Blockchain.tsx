import React, { useState } from "react";
import BackButton from "../components/buttons/BackButton";
import ConnectedWallet from "../components/blockchain/buttons/ConnectedWallet";
import WalletConnectButton from "../components/blockchain/buttons/WalletConnectButton";
import BlogContent from "../components/blockchain/content/BlogContent"
import DonateButton from "../components/blockchain/buttons/DonateButton";
import EmailButton from "../components/buttons/EmailButton";
import GitHubButton from "../components/buttons/GitHubButton";
import LinkedInButton from "../components/buttons/LinkedInButton";
import Footer from "../components/Footer";

const Blockchain: React.FunctionComponent = () => {
  const [walletConnectedState, setWalletConnectedState] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<string>("");

  return (
    <>
      <section className="flex flex-col font-sans bg-gray-200 dark:bg-gray-900 min-h-screen py-10 md:py-20 select-none">

        <div className="absolute top-0 right-0 mt-4 mr-4">
          <WalletConnectButton
            walletConnectedState={walletConnectedState}
            setWalletConnectedState={setWalletConnectedState}
            userAddress={userAddress}
            setUserAddress={setUserAddress}
          />
        </div>

        {walletConnectedState && (
          <ConnectedWallet userAddress={userAddress} />
        )}

        <div className="flex flex-col text-center px-5 w-3/3 md:w-4/5 lg:w-1/2 mx-auto noselect">
          <div className="flex flex-col items-start">
            <BackButton text={"back"} />
            <div className="flex flex-col py-8">
              <h1 className="md:text-left text-3x1 md:text-4xl font-bold dark:text-gray-300 underline underline-offset-12 decoration-4">
                Blockchain
              </h1>

              

              <div className="mt-10">
                <DonateButton 
                  walletConnectedState={walletConnectedState}
                  userAddress={userAddress}
                />
              </div>
            </div>
          </div>
          
          <div className="mx-auto md:mx-0">
            <BlogContent />
          </div>
          
          <div className="w-1/1 flex-col py-4 text-center">
            <div className="flex flex-col md:flex-row">
              <div className="flex-col space-x-3 space-y-4 md:space-y-0 mx-auto md:m-0 md:flex-row">
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
