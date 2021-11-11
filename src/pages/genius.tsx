import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Block from "../components/Genius/Block";
import Layout from "../components/Layout";
import { blocks } from "../data/blocks";
import { useConfetti } from "../hooks/useConfetti";
import GeniusGame, {
  GameOnFinish,
  GameOnUpdate,
  GeniusLevelsLength,
} from "../lib/GeniusGame";
import Instrument, { Notes } from "../lib/Instrument";
import Utils from "../lib/Utils";

const levelsLabels = {
  [GeniusLevelsLength.EASY]: "Modo fácil",
  [GeniusLevelsLength.MEDIUM]: "Modo médio",
  [GeniusLevelsLength.HARD]: "Modo difícil",
};

const GeniusPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlights, setHighlights] = useState<number>();
  const [gamePlayingNotes, setGamePlayingNotes] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(null);
  const [level, setLevel] = useState<GeniusLevelsLength>(
    GeniusLevelsLength.EASY
  );

  const instrumentRef = useRef<Instrument>(null);
  const gameRef = useRef<GeniusGame>(null);
  const { trigger } = useConfetti();

  useEffect(() => {
    instrumentRef.current = new Instrument("triangle");
  }, []);

  const playNote = useCallback(async (key: number) => {
    instrumentRef.current.play(blocks[key].frequency, blocks[key].octave);
    setHighlights(key);
    await Utils.sleep(200);
    setHighlights(undefined);
  }, []);

  const playNotes = useCallback(
    async (order: number[]) => {
      for (const key of order) {
        playNote(key);
        await Utils.sleep(750);
      }
    },
    [playNote]
  );

  const checkNote = (key: number) => {
    if (!gameRef.current) return;

    gameRef.current.updateSequence(key);
  };

  const handlePlay = (key: number) => async () => {
    if (gamePlayingNotes) return;

    playNote(key);

    if (isPlaying) {
      checkNote(key);
    }
  };

  const handleGameFinish: GameOnFinish = useCallback(
    ({ points, status }) => {
      const templateOk = `Parabéns! Você ganhou com ${points} pontos!`;
      const templateFail = `Opa! Tente novamente. Você chegou até ${points} pontos!`;

      if (!status) {
        toast.error(templateFail);
      } else {
        toast.success(templateOk);
        trigger();
      }

      setIsPlaying(false);
    },
    [trigger]
  );

  const handleGameUpdate: GameOnUpdate = useCallback(
    async ({ order, currentIndex }) => {
      setCurrentIndex(currentIndex);
      setGamePlayingNotes(true);
      await playNotes(order);
      setGamePlayingNotes(false);
    },
    [playNotes]
  );

  const handleStart = useCallback(() => {
    setIsPlaying(true);

    gameRef.current = new GeniusGame({
      length: level,
      onFinish: handleGameFinish,
      onUpdate: handleGameUpdate,
    });

    gameRef.current.start();
  }, [level, handleGameUpdate, handleGameFinish]);

  return (
    <Layout goBack>
      {isPlaying && (
        <div className="mb-8 max-w-sm w-full text-2xl font-bold flex justify-between">
          <span className="text-gray-400">{levelsLabels[level]}</span>
          <span className="text-gray-800">
            {currentIndex} {currentIndex === 1 ? "nota" : "notas"}
          </span>
          {!gamePlayingNotes && <span>Sua vez!</span>}
        </div>
      )}

      <ul className="grid grid-cols-2 gap-6 mb-8">
        {[1, 2, 3, 4].map((number) => (
          <Block
            key={number}
            value={number}
            highlight={highlights === number}
            onClick={handlePlay(number)}
          />
        ))}
      </ul>

      {!isPlaying && (
        <div className="flex gap-4">
          <button
            className="text-white px-4 py-3 rounded-lg bg-gray-600"
            onClick={handleStart}
          >
            Começar
          </button>

          <select
            value={level}
            onChange={(event) => setLevel(+event.target.value)}
            className="outline-none px-4 py-3 rounded-lg bg-gray-100 border border-gray-400"
          >
            <option value={GeniusLevelsLength.EASY}>
              {levelsLabels[GeniusLevelsLength.EASY]}
            </option>
            <option value={GeniusLevelsLength.MEDIUM}>
              {levelsLabels[GeniusLevelsLength.MEDIUM]}
            </option>
            <option value={GeniusLevelsLength.HARD}>
              {levelsLabels[GeniusLevelsLength.HARD]}
            </option>
          </select>
        </div>
      )}
    </Layout>
  );
};

export default GeniusPage;
