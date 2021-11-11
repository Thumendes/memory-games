import Layout from "../../components/Layout";
import Card from "../../components/Memory/Card";
import Modal from "../../components/Modal";
import list from "../../data/list";
import { useConfetti } from "../../hooks/useConfetti";
import useMemoryGame from "../../hooks/useMemoryGame";
import Router from "next/router";
import { useState } from "react";

const MemoryPage = () => {
  const { trigger } = useConfetti();
  const [gameFinished, setGameFinished] = useState(false);

  const handleCloseModal = () => {
    setCardHightligh(null);

    if (gameFinished) {
      trigger();
      setGameFinished(false);
      Router.push("/memory/info");
    }
  };

  const {
    cardHightligh,
    cards,
    selected,
    secondSelected,
    finished,
    setCardHightligh,
    handleSelectCard,
  } = useMemoryGame({ list, onFinish: () => setGameFinished(true) });

  return (
    <Layout goBack>
      <div className="grid grid-cols-3 grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-2">
        {cards.map((card, index) => {
          const isSelected = [selected, secondSelected].some(
            (item) => item && item.id === card.id
          );

          return (
            <Card
              key={index}
              card={card}
              onSelect={handleSelectCard}
              selected={isSelected}
              finished={finished.includes(card.key)}
            />
          );
        })}
      </div>

      {cardHightligh && (
        <Modal item={cardHightligh} onClose={handleCloseModal} />
      )}
    </Layout>
  );
};

export default MemoryPage;
