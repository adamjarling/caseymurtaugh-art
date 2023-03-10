import { Metadata } from "next";

import PageTitleBanner from "@/components/PageTitleBanner";

import CurriculumItem from "./item";
import { manifest } from "./manifest";

const description = "Public education art curriculum...";

export const metadata: Metadata = {
  title: "Curriculum",
  description,
  openGraph: {
    title: "Curriculum - Casey Murtaugh Educator",
    description,
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent("/student-process/IMG_7908.jpg")}`,
      },
    ],
  },
};

export default function CurriculumPage() {
  return (
    <>
      <PageTitleBanner>Curriculum</PageTitleBanner>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="container mx-auto">
        {manifest.map((m, i) => (
          <CurriculumItem key={i} item={m} i={i} />
        ))}
      </div>
    </>
  );
}
