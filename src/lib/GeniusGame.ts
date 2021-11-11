import Utils from "./Utils";

export enum GeniusLevelsLength {
  EASY = 6,
  MEDIUM = 10,
  HARD = 14,
}

export type GameOnEvent<T> = (params: T) => void;

export type GameOnFinishParams = {
  status: boolean;
  points: number;
};

export type GameOnUpdateParams = {
  currentIndex: number;
  order: number[];
};

export type GameOnFinish = GameOnEvent<GameOnFinishParams>;
export type GameOnUpdate = GameOnEvent<GameOnUpdateParams>;

export interface GameProps {
  length: GeniusLevelsLength;
  onFinish?: GameOnFinish;
  onUpdate?: GameOnUpdate;
}

class GeniusGame {
  private order: number[] = [];
  private currentIndex: number = 1;
  private playing = false;
  private userSequence: number[] = [];
  private level!: GeniusLevelsLength;
  private onFinish!: GameOnFinish;
  private onUpdate!: GameOnUpdate;

  constructor({ length, onFinish, onUpdate }: GameProps) {
    this.onFinish = onFinish;
    this.onUpdate = onUpdate;
    this.level = length;
  }

  private generate() {
    const newOrder = Array(this.level)
      .fill(null)
      .map(() => Math.floor(Math.random() * (5 - 1) + 1));

    this.order = newOrder;
  }

  public async start() {
    this.reset();
    this.playing = true;
    this.generate();
    await Utils.sleep(500);
    this.onUpdate({
      currentIndex: this.currentIndex,
      order: this.getCurrentOrder(),
    });
  }

  public getCurrentOrder() {
    const copyOrder = [...this.order];
    copyOrder.length = this.currentIndex;
    return copyOrder;
  }

  private reset() {
    this.order = [];
    this.currentIndex = 1;
    this.playing = false;
    this.userSequence = [];
  }

  private finish(status: boolean, points: number) {
    this.onFinish && this.onFinish({ status, points });
    this.reset();
  }

  public async updateSequence(value: number) {
    if (!this.playing) return;

    this.userSequence.push(value);

    const currentOrder = this.getCurrentOrder();
    const sequenceIndex = this.userSequence.length - 1;

    if (this.userSequence[sequenceIndex] !== currentOrder[sequenceIndex]) {
      this.finish(false, this.userSequence.length);
      return;
    }

    if (this.userSequence.length !== this.currentIndex) {
      return;
    }

    this.userSequence = [];

    if (this.currentIndex === this.level) {
      this.finish(true, this.level);
      return;
    }

    this.currentIndex++;
    await Utils.sleep(1000);
    this.onUpdate({
      currentIndex: this.currentIndex,
      order: this.getCurrentOrder(),
    });
  }
}

export default GeniusGame;
