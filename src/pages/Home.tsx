// Components
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import ResumeButton from "../components/buttons/ResumeButton";
import ProjectsButton from "../components/buttons/ProjectsButton";
import BlockchainButton from "../components/blockchain/buttons/BlockchainButton";
import EmailButton from "../components/buttons/EmailButton";
import GitHubButton from "../components/buttons/GitHubButton";
import LinkedInButton from "../components/buttons/LinkedInButton";

export default function Home() {
  return (
    <>
      <section className="lg:w-auto px-5 py-20 md:py-40 font-sans bg-neutral-300 dark:bg-gray-900 min-h-screen flex flex-col select-none background-color: #04242c;">
        <div className="w-1/1 lg:w-3/4 mx-auto">
          <Intro />
          <div className="lg:min-w-min flex flex-col space-y-4 md:space-x-4 md:flex-row">
            <ResumeButton text={"Resume"} />
            <ProjectsButton text={"Projects"} />
            <BlockchainButton text={"Blockchain"} />
            <div className="flex-col space-x-4 space-y-4 md:space-y-0 mx-auto md:m-0 md:flex-row">
              <EmailButton />
              <GitHubButton />
              <LinkedInButton />
            </div>
          </div>
          <div className="mt-4">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
