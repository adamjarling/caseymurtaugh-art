import CurriculumItem from "./item";
import { Metadata } from "next";
import PageTitleBanner from "@/components/PageTitleBanner";
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
      <div className="container pt-0 mx-auto">
        {manifest.map((m, i) => (
          <CurriculumItem key={i} item={m} i={i} />
        ))}
      </div>
    </>
  );
}
