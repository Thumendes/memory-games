import router from "next/router";
import Layout from "../../components/Layout";

const MemoryInfoPage = () => {
  return (
    <Layout goBack>
      <div className="max-w-xl p-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">Parabéns 🎉🥳</h1>
        <p className="text-lg text-gray-600 mb-16">
          Com esse jogo, aprendemos que existem varios fatores que te mantem
          saudável e ativo, cuidando do corpo e consequentemente da mente. Dessa
          forma melhorando sua qualidade de vida. Se cuide!!
        </p>

        <div className="flex flex-col items-center">
          <p className="text-4xl mb-8">Obrigada por jogar!</p>

          <button
            className="bg-gray-300 px-6 py-4 text-lg rounded-xl text-gray-600"
            onClick={() => router.back()}
          >
            Jogar novamente
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MemoryInfoPage;
