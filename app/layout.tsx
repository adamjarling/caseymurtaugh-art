import "./globals.css";
import { Montserrat } from "next/font/google";
import Nav from "./Nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const links = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/process",
    label: "Process",
  },
  {
    href: "/student-artwork",
    label: "Student Artwork",
  },
  {
    href: "/curriculum",
    label: "Curriculum",
  },
  {
    href: "/cv",
    label: "CV",
  },
];

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      {/* <style jsx global>
        {`
          :root {
            --font-lato: ${lato.style.fontFamily};
            --font-nova-mono: ${novaMono.style.fontFamily};
          }
        `}
      </style> */}
      <body>
        <Nav links={links} />
        {children}
      </body>
    </html>
  );
}
