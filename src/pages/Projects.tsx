import React from "react";
// Components
import Portfolio from "../components/Portfolio";
import EmailButton from "../components/buttons/EmailButton";
import GitHubButton from "../components/buttons/GitHubButton";
import LinkedInButton from "../components/buttons/LinkedInButton";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <body className="flex flex-col font-sans bg-gray-200 dark:bg-gray-900 min-h-screen py-10 md:py-20 select-none">
        <section className="flex flex-col text-center px-5 w-3/3 md:w-4/5 lg:w-1/2 mx-auto noselect">
          <Portfolio />
          <div className="w-1/1 flex-col py-4 text-center">
              <div className="flex flex-col md:flex-row">
                <EmailButton text={"mccarthy.kevin@proton.me"} />
                <div className="flex-col space-x-3 space-y-4 md:space-y-0 md:px-4 mx-auto md:m-0 md:flex-row">
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
}
