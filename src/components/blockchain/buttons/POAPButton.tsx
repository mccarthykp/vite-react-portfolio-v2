import React, { useState } from "react";
// import ButtonTooltip from "../../ButtonTooltip";

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<string>;
}

interface POAPButtonProps {
  walletConnectedState: boolean;
}

const POAPButton: React.FunctionComponent<POAPButtonProps> = ({
  walletConnectedState,
}) => {
  const [poapClaimed, setPOAPClaimed] = useState(false);

  const handleDistribute = async () => {
    if (!walletConnectedState) {
      alert("Please connect your wallet first.");
      return;
    }

    // Connect to POAP API w/ key
    // Generate access token w/ auth token
    // POST/event/{id}/qr-codes to get qr_hash for event
    // GET/actions/claim-qr and pass qr_hash to get claim secret
    // Mint POAP directly to userAddress using POST/actions/claim-qr

    // if POAP claim is successful...
    setPOAPClaimed(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleDistribute}
        // Disable button if POAP is claimed or no wallet is connected
        disabled={poapClaimed || !walletConnectedState} 
        className={`
        ${!walletConnectedState ? 'blur-sm hover:ring-0 hover:ring-transparent' : ''}
        ${poapClaimed
          ? "bg-gray-600 cursor-default text-white font-medium py-3 px-6 md:w-40 w-full rounded-lg focus:transparent transition-bg duration-300 opacity-50"
          : "bg-gradient-to-r from-pink-500 to-yellow-500 ring-inset hover:ring-2 ring-white text-white font-medium py-3 md:w-40 w-full rounded-lg focus:transparent"
        } `}
      >
        {poapClaimed ? "Claimed" : "Claim POAP"}
      </button>
    </>
  );
};

export default POAPButton;
