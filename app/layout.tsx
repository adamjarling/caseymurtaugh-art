import "./globals.css";

import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Nav from "@/components/Nav";
import NavTailwind from "@/components/NavTailwind";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Casey Murtaugh",
    template: "%s | Casey Murtaugh",
  },
  description: "Artist and Educator",
  openGraph: {
    title: "Casey Murtaugh - Artist and Educator",
    description: "Showcasing the ..",
    url: "https://caseymurtaugh.art",
    siteName: "Casey Murtaugh Art",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent("/images/IMG_9823.jpg")}`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const links = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/artist",
    label: "Artist",
  },
  {
    href: "/educator",
    label: "Educator",
  },
  // {
  //   href: "/curriculum",
  //   label: "Curriculum",
  // },
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
      <body>
        {/* <Nav links={links} /> */}
        <NavTailwind />
        <div className="pt-4">
          {children}
          <Footer />
        </div>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA}');
            `}
        </Script>
      </body>
    </html>
  );
}
