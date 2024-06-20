import React from "react";
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
      <section className="scroll-smooth py-10 md:py-40 font-sans bg-neutral-300 dark:bg-zinc-950 min-h-screen flex flex-col select-none">
        <div className="px-5 w-3/3 md:max-w-screen-md lg:max-w-screen-lg mx-auto">
          <Intro />
          <div className="flex flex-col md:flex-row md:mt-4 mt-0">
            <div className="lg:min-w-min md:space-x-4 md:mt-0 mt-2 flex md:flex-row flex-col md:space-y-0 space-y-4">
              <ResumeButton />
              <ProjectsButton />
              <BlockchainButton />
            </div>
            <div className="flex space-x-4 md:ml-4 mx-auto md:mt-0 mt-8">
              <EmailButton />
              <GitHubButton />
              <LinkedInButton />
            </div>
          </div>
          <div className="mt-4 md:mt-8">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
