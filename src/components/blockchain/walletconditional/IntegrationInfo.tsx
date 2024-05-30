import React from "react";

interface IntegrationInfoProps {
  walletConnectedState: boolean;
}

const IntegrationInfo: React.FunctionComponent<IntegrationInfoProps> = ({
  walletConnectedState,
}) => {
  return (
    <>
      {walletConnectedState ? (
        <p className="flex mt-3 dark:text-gray-300 text-sm items-center">
          <span className="text-blue-900 dark:text-blue-200 mr-2 text-2xl">&#9432;</span>
          I'm working on new integrations, check back soon to see more!
        </p>
      ) : (
        <p className="flex mt-6 dark:text-red-300 text-sm items-center">
          <span className="text-red-900 dark:text-red-200 mr-2 text-1xl">&#10060;</span>
          Please connect your wallet to view.
        </p>
      )}
    </>
  );
};

export default IntegrationInfo;
