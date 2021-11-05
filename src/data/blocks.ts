import { Notes } from "../lib/Instrument";

type Blocks = {
  [key: number]: {
    color: "blue" | "red" | "green" | "yellow";
    frequency: Notes;
    octave: number;
  };
};

export const blocks: Blocks = {
  1: {
    color: "blue",
    frequency: "C",
    octave: 4,
  },
  2: {
    color: "red",
    frequency: "E",
    octave: 4,
  },
  3: {
    color: "green",
    frequency: "G",
    octave: 4,
  },
  4: {
    color: "yellow",
    frequency: "C",
    octave: 5,
  },
};
