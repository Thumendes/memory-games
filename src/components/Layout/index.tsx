const Layout = ({ children }) => {
  return (
    <main className="h-screen bg-gray-800 flex items-center justify-center flex-col">
      {children}
    </main>
  );
};

export default Layout;
