import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nova_Mono, Lato } from "next/font/google";

const novaMono = Nova_Mono({
  subsets: ["latin"],
  variable: "--font-nova-mono",
  weight: "400",
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "300",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-lato: ${lato.style.fontFamily};
            --font-nova-mono: ${novaMono.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
