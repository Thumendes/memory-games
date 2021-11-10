import React, { createContext, useContext, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Utils from "../lib/Utils";

interface ConfettiContextProps {
  trigger(): Promise<void>;
}

const ConfettiContext = createContext({} as ConfettiContextProps);

export const useConfetti = () => useContext(ConfettiContext);

const ConfettiContextProvider = ({ children }) => {
  const { height, width } = useWindowSize();
  const [isParty, setIsParty] = useState(false);

  async function trigger() {
    setIsParty(true);
    await Utils.sleep(2000);
    setIsParty(false);
  }

  return (
    <ConfettiContext.Provider value={{ trigger }}>
      {children}
      {width !== Infinity && height !== Infinity && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={isParty ? 1000 : 0}
        />
      )}
    </ConfettiContext.Provider>
  );
};

export default ConfettiContextProvider;
