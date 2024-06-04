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
          className="bg-slate-900 bg-opacity-40 hover:bg-opacity-65 text-slate-200 hover:text-slate-400 py-1.5 px-6 rounded-lg hover:shadow-lg focus:transparent outline outline-2 outline-blue-300 hover:outline-teal-200 transition-all duration-300"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default WalletConnectButton;
