import React from "react";
// Utilities
import { truncateAddress } from "../../../utils/truncateAddressUtil.ts";

interface ConnectedWalletProps {
  userAddress: string | null;
}

const ConnectedWallet: React.FunctionComponent<ConnectedWalletProps> = ({ userAddress }) => {

  // If userAddress is null or undefined, display nothing
  if (!userAddress) {
    return null;
  }

  // Display the truncated userAddress
  return (
    <div className="bg-neutral-300 dark:bg-opacity-0 bg-opacity-40 rounded-lg font-medium dark:font-light text-zinc-950 dark:text-gray-200">
      <span className="text-teal-900 font-medium dark:text-teal-300">Connected</span>: {truncateAddress(userAddress, 8)}
    </div>
  );
};

export default ConnectedWallet;
