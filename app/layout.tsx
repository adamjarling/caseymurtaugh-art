import "./globals.css";
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

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <style jsx global>
        {`
          :root {
            --font-lato: ${lato.style.fontFamily};
            --font-nova-mono: ${novaMono.style.fontFamily};
          }
        `}
      </style> */}
      <body>{children}</body>
    </html>
  );
}
