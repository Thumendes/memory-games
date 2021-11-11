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

  const Wrapper = ({ children }) => (
    <div
      onClick={() => onSelect(card)}
      className="bg-white w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 border-gray-200 rounded-lg p-2"
    >
      {children}
    </div>
  );

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <Wrapper>
        <Image src="/brain.svg" alt="Brain" height={200} width={200} />
      </Wrapper>
      <Wrapper>{selected || finished ? <div>{card.value}</div> : ""}</Wrapper>
    </ReactCardFlip>
  );
};

export default Card;
