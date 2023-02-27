import "./globals.css";

import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import Nav from "@/app/Nav";

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
      <body>
        <Nav links={links} />
        <>
          {children}
          <Script id="onRouteChange">{`
        (function (history) {
          var pushState = history.pushState;
          history.pushState = function(state){
            var result = pushState.apply(history, arguments);
            window.dispatchEvent(new Event("routeChange", state));
            return result;
          };
        })(window.history);
      `}</Script>
        </>
      </body>
    </html>
  );
}
