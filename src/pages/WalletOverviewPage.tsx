import { useParams } from "react-router-dom";
// Components
import BackButton from "../components/buttons/BackButton";
import EmailButton from "../components/buttons/EmailButton";
import GitHubButton from "../components/buttons/GitHubButton";
import LinkedInButton from "../components/buttons/LinkedInButton";
import Footer from "../components/Footer";

const WalletOverviewPage = () => {
  const { address: rawAddress } = useParams<{ address: string }>();
  // Removes url prefix
  const address = rawAddress?.replace("address=", "");

  // Use the address parameter to fetch and display wallet information

  return (
    <>
      <body className="flex flex-col font-sans bg-gray-200 dark:bg-gray-900 min-h-screen py-10 md:py-20 select-none">
        <section className="flex flex-col text-center px-5 w-3/3 md:w-4/5 lg:w-1/2 mx-auto noselect">
          <div className="flex flex-col items-start">
            <BackButton text={"back"} destination={"/blockchain"} />
            <div className="flex flex-col py-8">
              <h1 className="text-3x1 md:text-4xl font-bold dark:text-gray-300 underline underline-offset-12 decoration-4">
                Wallet Overview
              </h1>
            </div>
          </div>
          <p className="flex dark:text-gray-300">Wallet Address: {address}</p>
          {/* wallet overview content here */}
          <div className="w-1/1 flex-col py-4 text-center">
            <div className="flex flex-col md:flex-row">
              <div className="flex-col space-x-3 md:space-y-0 mx-auto md:m-0 md:flex-row">
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

export default WalletOverviewPage;
