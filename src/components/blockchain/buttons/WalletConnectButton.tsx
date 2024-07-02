import React from "react";

interface WalletConnectButtonProps {
  onConnectWallet: () => Promise<void>;
}

const WalletConnectButton: React.FunctionComponent<WalletConnectButtonProps> = ({
  onConnectWallet,
}) => {
  const handleConnectClick = async () => {
    await onConnectWallet(); // Call the provided function when the button is clicked
  };

  return (
    <>
      <button
        onClick={handleConnectClick}
        className="bg-slate-900 bg-opacity-40 dark:hover:bg-teal-100 dark:hover:bg-opacity-5 hover:bg-opacity-65 text-blue-100 hover:text-teal-200 py-1.5 px-6 rounded-lg hover:shadow-lg hover:shadow-teal-900 focus:transparent outline outline-2 outline-blue-300 hover:outline-teal-200 transition-all duration-200 font-orbitron font-light tracking-widest text-xs md:text-sm"
      >
        Connect Wallet
      </button>
    </>
  );
};

export default WalletConnectButton;
