export type ListItem = {
  id?: number;
  key: number;
  value: JSX.Element;
};

const list = [
  {
    key: 1,
    value: <img src="/memory/1.jpeg" alt="Card para jogo da memória!" />,
  },
  {
    key: 2,
    value: <img src="/memory/2.jpeg" alt="Card para jogo da memória!" />,
  },
  {
    key: 3,
    value: <img src="/memory/3.jpeg" alt="Card para jogo da memória!" />,
  },
  {
    key: 4,
    value: <img src="/memory/4.jpeg" alt="Card para jogo da memória!" />,
  },
  {
    key: 5,
    value: <img src="/memory/5.jpeg" alt="Card para jogo da memória!" />,
  },
  {
    key: 6,
    value: <img src="/memory/6.jpeg" alt="Card para jogo da memória!" />,
  },
];

export default list;
