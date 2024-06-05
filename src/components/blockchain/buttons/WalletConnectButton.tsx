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
          className="bg-slate-900 bg-opacity-40 hover:bg-teal-100 hover:bg-opacity-5 text-blue-100 hover:text-teal-200 py-1.5 px-6 rounded-lg hover:shadow-lg hover:shadow-teal-900 focus:transparent outline outline-2 outline-blue-300 hover:outline-teal-200 transition-all duration-200 font-orbitron font-light tracking-widest text-xs md:text-sm"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default WalletConnectButton;
