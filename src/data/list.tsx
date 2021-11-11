import Image from "next/image";

export type ListItem = {
  id?: number;
  name: string;
  description: string;
  key: number;
  value: JSX.Element;
};

const dataObj = {
  1: {
    name: "Remédio",
    description:
      "Você costuma tomar seus remédios em dia? Sabia que toma-los no horário certo aumenta sua eficácia?",
  },
  2: {
    name: "Atividade física",
    description:
      "Manter seu corpo ativo auxilia na prevenção de doenças, obesidade, sedentarismo, dor nas articulações, te mantem disposto e alivia o estresse!",
  },
  3: {
    name: "Lazer",
    description:
      "Tenha sempre um momento de lazer, fazer o que te agrada e relaxa, pois essa é uma forma de cuidar da sua saúde física e mental!",
  },
  4: {
    name: "Higiene",
    description:
      "É muito importante que a higiene seja mantida para prevenção de doenças e para seu bem-estar. São exemplos: lavar bem as mãos, escovar os dentes, tomar banho.",
  },
  5: {
    name: "Alimentação saudável",
    description:
      "Uma alimentação saudável é essencial pra sua saúde corporal. Quanto mais colorido o seu prato melhor! Coma verduras e legumes, mantenha seu prato sempre diversificado.",
  },
  6: {
    name: "Hidratação",
    description:
      "Sabia que a água proteje nossos órgãos vitais e os ajuda a absorver melhor os nutrientes? Por isso tente beber, em média, 2L por dia!! Tenha sempre uma garrafinha de agua por perto!",
  },
};

export const memoryGameFinalMessage = `Com esse jogo, aprendemos que existem varios fatores que te mantem saudável e ativo, cuidando do corpo e consequentemente da mente. Dessa forma melhorando sua qualidade de vida. Se cuide!! 

Obrigada por jogar`;

const imagesArray: ListItem[] = Array(6)
  .fill(null)
  .map((_, index) => index + 1)
  .map((value) => ({
    key: value,
    description: dataObj[value].description,
    name: dataObj[value].name,
    value: (
      <Image
        src={`/memory/${value}.png`}
        alt="Card para jogo da memória!"
        className="object-cover"
        height={200}
        width={200}
      />
    ),
  }));

const list: ListItem[] = [...imagesArray];

export default list;
