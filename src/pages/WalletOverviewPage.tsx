import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Components
import BackButton from "../components/buttons/BackButton";
import EmailButton from "../components/buttons/EmailButton";
import GitHubButton from "../components/buttons/GitHubButton";
import LinkedInButton from "../components/buttons/LinkedInButton";
import Footer from "../components/Footer";
// Utilities

const WalletOverviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const address = location.state?.address;

  useEffect(() => {
    // If userAddress is null or undefined, go back to blockchain page
    if (!address) {
      navigate('/blockchain');
      return;
    }
    // logic for wallet address information here
    // Fetch token balances and NFTs

  }, [address, navigate]);

  return (
    <>
      <section className="scroll-smooth flex flex-col font-sans bg-gray-200 dark:bg-zinc-950 min-h-screen py-10 select-none">
        <div className="flex flex-col px-4 w-3/3 md:w-4/5 lg:w-1/2 mx-auto noselect">
          <div className="flex flex-col items-start">
            <BackButton text={"back"} destination={"/blockchain"} />
            <div className="flex flex-col py-8">
              <h1 className="md:text-4xl text-3xl font-orbitron font-extrabold tracking-wide dark:text-gray-200 underline underline-offset-12 decoration-2">
                Wallet Overview
              </h1>
            </div>
          </div>
          <p className="flex dark:text-red-400 font-rajdhani font-normal tracking-wide">Wallet Address: {address}</p>
          {/* display wallet information here */}
          <div className="w-1/1 flex-col py-4 text-center">
            <div className="flex flex-col md:flex-row">
              <div className="flex-col space-x-3 md:space-y-0 mx-auto md:m-0 md:flex-row">
                <EmailButton />
                <GitHubButton />
                <LinkedInButton />
              </div>
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

export default WalletOverviewPage;
