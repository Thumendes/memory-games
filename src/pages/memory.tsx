import Card from "../components/Memory/Card";
import list from "../data/list";
import useMemoryGame from "../hooks/useMemoryGame";

const MemoryPage = () => {
  const { cards, handleSelectCard, selected, secondSelected, finished } =
    useMemoryGame({ list });

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
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
    </div>
  );
};

export default MemoryPage;
