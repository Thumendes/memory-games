import { frequenciesOctaves } from "../data/frequencies";

export type Notes =
  | "C"
  | "C#"
  | "D"
  | "Eb"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "Bb"
  | "B";

export type NotesFrequencies = {
  [key in Notes]: number;
};

export type NotesFrequenciesOctaves = {
  [key: number]: NotesFrequencies;
};

class Instrument {
  private context!: AudioContext;
  private oscillator!: OscillatorNode;
  private gain!: GainNode;

  constructor(private type: OscillatorType) {
    this.context = new AudioContext();
  }

  public play(note: Notes, octave = 4) {
    this.oscillator = this.context.createOscillator();
    this.gain = this.context.createGain();
    this.oscillator.type = this.type;
    this.oscillator.connect(this.gain);
    this.gain.connect(this.context.destination);
    this.oscillator.frequency.value = frequenciesOctaves[octave][note];
    this.oscillator.start(0);
    this.gain.gain.exponentialRampToValueAtTime(
      0.00001,
      this.context.currentTime + 1
    );
  }
}

export default Instrument;
