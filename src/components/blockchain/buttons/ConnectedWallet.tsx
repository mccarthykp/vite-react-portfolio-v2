import React from "react";
// Utilities
import { truncateAddress } from "../../../utils/truncateAddressUtil.ts";
import ButtonTooltip from "../../ButtonTooltip.tsx";

interface ConnectedWalletProps {
  userAddress: string | null;
  onDisconnect: () => void;
}

const ConnectedWallet: React.FunctionComponent<ConnectedWalletProps> = ({ userAddress, onDisconnect  }) => {

  // If userAddress is null or undefined, display nothing
  if (!userAddress) {
    return null;
  }

  // Display the truncated userAddress
  return (
    <div className="bg-neutral-300 dark:bg-opacity-0 bg-opacity-40 rounded-lg md:text-lg text-md font-rajdhani font-normal tracking-wide text-zinc-950 dark:text-gray-200 content-center">
      <ButtonTooltip message="Disconnect">
        <span onClick={onDisconnect} className="text-red-400 mr-2 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-flex size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
        </span>
      </ButtonTooltip>
      <span className="text-teal-900 font-rajdhani font-medium tracking-wide dark:text-teal-300">
        Connected
      </span>: {truncateAddress(userAddress, 8)}
    </div>
  );
};

export default ConnectedWallet;
