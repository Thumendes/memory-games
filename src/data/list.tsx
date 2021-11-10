import Image from "next/image";

export type ListItem = {
  id?: number;
  key: number;
  value: JSX.Element;
};

const imagesArray: ListItem[] = Array(6)
  .fill(null)
  .map((_, index) => index + 1)
  .map((value) => ({
    key: value,
    value: (
      <Image
        src={`/memory/${value}.png`}
        alt="Card para jogo da memória!"
        height={200}
        width={200}
      />
    ),
  }));

const list: ListItem[] = [...imagesArray];

export default list;
