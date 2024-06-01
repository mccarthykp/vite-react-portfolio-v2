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
    <div className="absolute top-0 right-0 mt-4 mr-4 text-gray-400">
      <span className="text-green-300">Connected</span>: {truncateAddress(userAddress, 8)}
    </div>
  );
};

export default ConnectedWallet;
