import { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    console.log(
      "%cKole vei!",
      "color: #ae00ff; font-size: 48px; font-weight: bold;"
    );
    console.log("Viva a enfermagem! 👩‍⚕️👨‍⚕️💉🩺");
    console.log(
      `https://www.instagram.com/thumendess/ %c@thumendess`,
      "font-weight: bold;"
    );
    console.log(
      `https://www.instagram.com/leh.28/ %c@leh.28`,
      "font-weight: bold;"
    );
  }, []);

  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
