import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ListItem } from "../data/list";
import Utils from "../lib/Utils";

interface MemoryGameHookProps {
  onFinish?: () => void;
  list: ListItem[];
}

function useMemoryGame(props: MemoryGameHookProps) {
  const { onFinish, list } = props;

  const [cards, setCards] = useState<ListItem[]>([]);
  const [selected, setSelected] = useState<ListItem>(null);
  const [finished, setFinished] = useState<number[]>([]);
  const [secondSelected, setSecondSelected] = useState<ListItem>(null);

  const start = useCallback(() => {
    const newList: ListItem[] = [...list, ...list].map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    const shuffledList = Utils.shuffle(newList);

    setFinished([]);
    setCards(shuffledList);
  }, [list]);

  useEffect(() => {
    start();
  }, [start]);

  async function handleSelectCard(card: ListItem) {
    if (finished.includes(card.key)) return;
    if (selected && secondSelected) return;

    if (!selected) {
      return setSelected(card);
    }

    const isEqual = selected.key === card.key;
    const isSameCard = selected.id === card.id;

    if (isEqual && !isSameCard) {
      const newFinished = [...finished, card.key];
      setFinished(newFinished);

      if (newFinished.length === list.length) {
        onFinish && onFinish();
        await Utils.sleep(2000);
        start();
      }
    }

    if (!isEqual && !isSameCard) {
      setSecondSelected(card);
      await Utils.sleep(1000);
      setSecondSelected(null);
    }

    setSelected(null);
  }

  return { cards, handleSelectCard, selected, secondSelected, finished };
}

export default useMemoryGame;
