import React from "react";

interface WalletConnectButtonProps {
  walletConnectedState: boolean;
  onConnectWallet: () => Promise<void>;
}

const WalletConnectButton: React.FunctionComponent<WalletConnectButtonProps> = ({
  walletConnectedState,
  onConnectWallet,
}) => {
  if (walletConnectedState) {
    return null;
  }

  return (
    <>
      {!walletConnectedState && (
        <button
          onClick={onConnectWallet}
          // className="bg-gradient-to-r from-blue-200 to-teal-200 hover:to-lime-200 hover:from-teal-200 text-gray-900 font-medium py-1.5 px-6 rounded-lg shadow-lg focus:transparent"
          className="bg-slate-900 bg-opacity-35 bg-blur-lg font-medium text-slate-300 py-1.5 px-6 rounded-lg shadow-lg focus:transparent outline outline-2 outline-blue-300"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default WalletConnectButton;
