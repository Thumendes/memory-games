import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

const students = [
  "Ana Laura Dieguez Pessoa",
  "Aressa Bravo Lopes Muradas",
  "Letícia Maria da Costa Salla",
  "Luiza Aparecida Horta de Paula",
  "Maria Clara Regis Vieira",
  "Reginaldo Mello Moreira Couto",
  "Taciane Silva Mendes",
  "Victor Oliveira de Araújo",
];

const HomePage = () => {
  return (
    <Layout>
      <div className="mb-16 px-4 text-center pt-16 z-10">
        <h1 className="text-4xl font-bold">
          Trabalho interdisciplinar enfermagem 2º período
        </h1>
      </div>

      <div className="absolute top-16 right-1/4 opacity-50">
        <Image
          src="/home/pieces.png"
          alt="Quebra cabeça!"
          height={200}
          width={200}
        />
      </div>

      <div className="mb-16 px-4 text-center">
        <p className="max-w-2xl text-2xl">
          {`Alunos: `}
          {students.map((student, index) => (
            <span key={index} className="hover:text-black text-gray-500">
              {student}
              {index !== students.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </div>

      <div className="mb-8 px-4 text-center">
        <span className="text-4xl font-bold">Sua memória está em dia?</span>
      </div>

      <ul className="flex gap-8 pb-16">
        <Link href="/genius" passHref>
          <li className="relative hover:bg-gray-300 text-gray-400 hover:text-gray-900 transition cursor-pointer w-40 h-40 lg:w-52 lg:h-52 p-4 bg-gray-200 flex items-center justify-center rounded-lg">
            <Image
              src="/home/genius.png"
              alt="Jogo de Memória"
              className="object-cover"
              width={200}
              height={200}
            />
            <span className="absolute bottom-4 left-4 font-bold text-xl">
              Genius
            </span>
          </li>
        </Link>
        <Link href="/memory" passHref>
          <li className="relative hover:bg-gray-300 text-gray-400 hover:text-gray-900 transition cursor-pointer w-40 h-40 lg:w-52 lg:h-52 p-4 bg-gray-200 flex items-center justify-center rounded-lg">
            <Image
              src="/home/memory.png"
              alt="Jogo de Memória"
              className="object-cover"
              width={200}
              height={200}
            />
            <span className="absolute bottom-4 left-4 font-bold text-xl">
              Jogo de Memória
            </span>
          </li>
        </Link>
      </ul>
    </Layout>
  );
};

export default HomePage;
