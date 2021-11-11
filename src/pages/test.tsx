import { useEffect } from "react";
import GeniusGame, { GeniusLevelsLength } from "../lib/GeniusGame";

const TestPage = () => {
  useEffect(() => {
    const game = new GeniusGame({
      length: GeniusLevelsLength.MEDIUM,
    });

    window.addEventListener("keypress", (event) => {
      if (event.key === "s") {
        return game.start();
      }

      const availableKeys: { [key: string]: number } = {
        q: 1,
        w: 2,
        e: 3,
        r: 4,
      };

      const key = availableKeys[event.key];

      if (key) game.updateSequence(key);
    });
  }, []);

  return <div></div>;
};

export default TestPage;
