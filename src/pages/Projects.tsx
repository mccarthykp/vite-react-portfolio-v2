import React from "react";
// Components
import Portfolio from "../components/portfolio/Portfolio";
import BackButton from "../components/buttons/BackButton";
import EmailButton from "../components/buttons/EmailButton";
import GitHubButton from "../components/buttons/GitHubButton";
import LinkedInButton from "../components/buttons/LinkedInButton";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <section className="scroll-smooth flex flex-col bg-neutral-300 dark:bg-zinc-950 min-h-screen py-10 select-none">
        <div className="flex flex-col px-5 w-3/3 md:max-w-screen-md lg:max-w-screen-lg mx-auto noselect">
          <div className="flex flex-col items-start">
            <BackButton text={"back"} destination={"/home"} />
            <div className="flex flex-col py-8">
              <h1 className="md:text-4xl text-3xl font-orbitron font-extrabold tracking-wide dark:text-gray-200 underline underline-offset-12 decoration-1">
                Projects
              </h1>
            </div>
          </div>
          <div className="mt-2">
            <Portfolio />
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
}
