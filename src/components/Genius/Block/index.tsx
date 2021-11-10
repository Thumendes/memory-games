import { LiHTMLAttributes } from "react";
import { blocks } from "../../../data/blocks";

interface BlockProps extends LiHTMLAttributes<HTMLLIElement> {
  value: number;
  highlight?: boolean;
}

const Block: React.FC<BlockProps> = ({ value, highlight = false, ...rest }) => {
  return (
    <li
      {...rest}
      className={`w-32 h-32 md:w-40 md:h-40 bg-${blocks[value].color}-${
        highlight ? "300" : "500"
      } rounded-lg font-bold text-white text-2xl flex items-center justify-center`}
    >
      {value}
    </li>
  );
};

export default Block;
