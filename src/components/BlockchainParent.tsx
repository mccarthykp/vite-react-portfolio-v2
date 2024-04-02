import React, { useState } from "react";
import DonateButton from "./buttons/blockchain/DonateButton";
import Blockchain from "../pages/Blockchain";

const BlockchainParent: React.FC = () => {
  const [walletConnectedState, setWalletConnectedState] =
    useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<string>("");

  return (
    <div>
      <DonateButton
        walletConnectedState={walletConnectedState}
        setWalletConnectedState={setWalletConnectedState}
        userAddress={userAddress}
        setUserAddress={setUserAddress}
      />
      <Blockchain
        walletConnectedState={walletConnectedState}
        userAddress={userAddress}
        setWalletConnectedState={setWalletConnectedState}
        setUserAddress={setUserAddress}
      />
    </div>
  );
};

export default BlockchainParent;
