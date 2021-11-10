import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";

const Card = ({ card, onSelect, selected, finished }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (finished) {
      return setIsFlipped(true);
    }

    setIsFlipped(selected);
  }, [finished, selected]);

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div
        onClick={() => onSelect(card)}
        className="w-40 h-40 border-2 border-gray-200 flex items-center justify-center rounded-lg p-4"
      >
        <Image src="/brain.svg" alt="Brain" height={200} width={200} />
      </div>
      <div
        onClick={() => onSelect(card)}
        className="w-40 h-40 border-2 border-gray-200 flex items-center justify-center rounded-lg p-1"
      >
        {selected || finished ? <span>{card.value}</span> : ""}
      </div>
    </ReactCardFlip>
  );
};

export default Card;
