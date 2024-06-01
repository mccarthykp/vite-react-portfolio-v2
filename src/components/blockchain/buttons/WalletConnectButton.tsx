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
          className="bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 text-gray-900 font-medium py-1.5 px-6 rounded-lg shadow-lg focus:transparent transition duration-300"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default WalletConnectButton;
