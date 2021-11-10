import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Card from "../components/Memory/Card";
import list, { ListItem } from "../data/list";
import Utils from "../lib/Utils";

const MemoryPage = () => {
  const [cards, setCards] = useState<ListItem[]>([]);
  const [selected, setSelected] = useState<ListItem>(null);
  const [finished, setFinished] = useState<number[]>([]);
  const [secondSelected, setSecondSelected] = useState<ListItem>(null);

  function start() {
    const newList = [...list, ...list].map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    setFinished([]);
    setCards(Utils.shuffle(newList));
  }

  useEffect(() => {
    start();
  }, []);

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
        toast.success("Parabéns o jogo acabou!");
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

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            onSelect={handleSelectCard}
            selected={
              (selected && selected.id === card.id) ||
              (secondSelected && secondSelected.id === card.id)
            }
            finished={finished.includes(card.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryPage;
