import Layout from "../components/Layout";
import Card from "../components/Memory/Card";
import Modal from "../components/Modal";
import list from "../data/list";
import { useConfetti } from "../hooks/useConfetti";
import useMemoryGame from "../hooks/useMemoryGame";

const MemoryPage = () => {
  const { trigger } = useConfetti();

  const {
    cardHightligh,
    setCardHightligh,
    handleSelectCard,
    cards,
    selected,
    secondSelected,
    finished,
  } = useMemoryGame({ list, onFinish: trigger });

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
        <Modal item={cardHightligh} onClose={() => setCardHightligh(null)} />
      )}
    </Layout>
  );
};

export default MemoryPage;
