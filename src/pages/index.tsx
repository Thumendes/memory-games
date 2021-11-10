import Link from "next/link";

const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto h-screen flex flex-col items-center justify-center gap-12">
      <span className="text-4xl font-bold">
        Trabalho interdisciplinar enfermagem 2º período
      </span>
      <p>Alunos:..........</p>
      <span className="text-5xl font-bold">Sua memória está em dia?</span>
      <ul className="flex gap-4">
        <Link href="/genius" passHref>
          <li className="w-60 h-60 bg-gray-500 flex items-center justify-center rounded-lg">
            Genius
          </li>
        </Link>
        <Link href="/memory" passHref>
          <li className="w-60 h-60 bg-gray-500 flex items-center justify-center rounded-lg">
            Memória
          </li>
        </Link>
      </ul>
    </main>
  );
};

export default HomePage;
