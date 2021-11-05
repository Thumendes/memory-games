import { KeyboardEvent, useEffect, useRef, useState } from "react";
import Block from "../components/Block";
import { blocks } from "../data/blocks";
import Instrument, { Notes } from "../lib/Instrument";
import sleep from "../lib/sleep";

const notes = {
  z: { note: "C", octave: 4 },
  x: { note: "D", octave: 4 },
  c: { note: "E", octave: 4 },
  v: { note: "F", octave: 4 },
  b: { note: "G", octave: 4 },
  n: { note: "A", octave: 4 },
  m: { note: "B", octave: 4 },
  ",": { note: "C", octave: 5 },
};

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [order, setOrder] = useState<number[]>([]);
  const [countNote, setCountNote] = useState(0);
  const [highlights, setHighlights] = useState<number>();
  const instrumentRef = useRef<Instrument>(null);

  useEffect(() => {
    instrumentRef.current = new Instrument("triangle");

    window.onkeydown = (event) => {
      const note = notes[event.key];

      if (!note) return;

      instrumentRef.current.play(note.note, note.octave);
    };
  }, []);

  function handleStart() {
    const newOrder = Array(10)
      .fill(null)
      .map(() => Math.floor(Math.random() * (5 - 1) + 1));

    setIsPlaying(true);
    setOrder(newOrder);
    setCountNote(0);
    play(newOrder);
  }

  async function highlight(key: number) {
    setHighlights(key);
    await sleep(200);
    setHighlights(undefined);
  }

  async function play(order: number[]) {
    console.log(order);
    for (const item of order) {
      instrumentRef.current.play(blocks[item].frequency, blocks[item].octave);
      highlight(item);

      await sleep(750);
    }

    console.log("Sua vez!");
  }

  function checkNote(key: number) {
    const isMiss = order[countNote] !== key;

    if (isMiss) {
      return console.log("ERROU!");
    }

    console.log("ACERTOU!");

    if (countNote === order.length - 1) {
      setIsPlaying(false);
      return console.log("ACABOUUU!");
    }

    setCountNote(countNote + 1);
  }

  function handlePlay(note: Notes, octave = 4, key: number) {
    return async () => {
      instrumentRef.current.play(note, octave);
      if (isPlaying) checkNote(key);
      highlight(key);
    };
  }

  return (
    <main className="h-screen bg-gray-800 flex items-center justify-center flex-col">
      <ul className="grid grid-cols-2 gap-6 mb-8">
        {[1, 2, 3, 4].map((number) => (
          <Block
            key={number}
            value={number}
            highlight={highlights === number}
            onClick={handlePlay(
              blocks[number].frequency,
              blocks[number].octave,
              number
            )}
          />
        ))}
      </ul>

      {!isPlaying && (
        <button
          className="text-white px-4 py-3 rounded-lg bg-gray-600"
          onClick={handleStart}
        >
          Começar
        </button>
      )}
    </main>
  );
};

export default HomePage;
