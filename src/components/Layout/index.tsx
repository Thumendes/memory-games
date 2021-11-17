import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title = "Jogo de memória!", goBack = false }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="min-h-screen h-full bg-gray-50">
        {goBack && (
          <header className="p-4 fixed top-0 w-full">
            <Link href="/">
              <a className="text-gray-600 text-lg">Voltar</a>
            </Link>
          </header>
        )}
        <div className="min-h-screen flex items-center justify-center flex-col">
          {children}
        </div>
        {/* <footer className="p-4 fixed bottom-0 w-full">
          <div className="text-right text-sm text-gray-400">
            <span>2021 Arthur Mendes - </span>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 font-semibold hover:text-indigo-500"
              href="https://www.instagram.com/thumendess/"
            >
              @thumendess
            </a>
          </div>
        </footer> */}
      </main>
    </>
  );
};

export default Layout;
