import Head from "next/head";

const Layout = ({ children, title = "Jogo de memória!" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="h-screen bg-gray-800 flex items-center justify-center flex-col">
        {children}
      </main>
    </>
  );
};

export default Layout;
