import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

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
        className="w-40 h-40 bg-gray-100 flex items-center justify-center rounded-lg"
      ></div>
      <div
        onClick={() => onSelect(card)}
        className={`w-40 h-40 bg-gray-100 flex items-center justify-center rounded-lg ${
          selected ? "bg-green-500" : ""
        } ${finished ? "bg-indigo-500" : ""}`}
      >
        {selected || finished ? <span>{card.value}</span> : ""}
      </div>
    </ReactCardFlip>
  );
};

export default Card;
