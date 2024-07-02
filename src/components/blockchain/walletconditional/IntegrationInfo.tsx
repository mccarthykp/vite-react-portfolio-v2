import React from "react";

interface IntegrationInfoProps {
  isConnected: boolean;
}

const IntegrationInfo: React.FunctionComponent<IntegrationInfoProps> = ({
  isConnected,
}) => {
  return (
    <>
      {isConnected ? (
        <p className="flex mt-3 bg-neutral-300 dark:bg-opacity-0 bg-opacity-40 rounded-lg pr-2 dark:text-gray-300 items-center font-rajdhani font-normal tracking-wide md:text-md text-sm">
          <span className="text-blue-900 dark:text-blue-200 mr-2 text-2xl">&#9432;</span>
          I'm working on new integrations, check back soon to see more!
        </p>
      ) : (
        <p className="flex mt-4 bg-neutral-300 dark:bg-opacity-0 bg-opacity-40 rounded-lg pr-2 dark:text-red-300 items-center font-rajdhani font-medium dark:font-normal tracking-wide md:text-md text-sm">
          <span className="text-red-900 dark:text-red-200 mr-2 text-xl">&#10060;</span>
          Please connect your wallet to view.
        </p>
      )}
    </>
  );
};

export default IntegrationInfo;
