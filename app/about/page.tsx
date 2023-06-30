import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Image from "next/image";
import Link from "next/link";
import PageTitleBanner from "@/components/PageTitleBanner";
import SectionHeader from "@/components/SectionHeader";
import bioPic from "public/images/IMG_1133.jpg";
import { promises as fs } from "fs";
import path from "path";

const sizeOf = require("image-size");

const folder = "observer";

const AboutPage = async () => {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );

  const images = imageFilenames.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${folder}/${ifn}`,
      ...dimensions,
    };
  });

  const btnClass = "";

  return (
    <>
      {/* <PageTitleBanner>Me</PageTitleBanner> */}
      <div className="container">
        <p className="pt-0 text-justify">
          When I&apos;m not traveling I live and work in Chicago as an artist
          and educator. My artmaking and teaching practices are both exciting
          and challenging. I work intently to understand these challenges as
          seeds for personal growth, and am in a constant state of learning. The
          people and street art in Chicago and cities around the world inspire
          my photography, paintings and collages. A regular hot yoga practice
          helps keep me mentally and physically fit, and provides additional
          insights for creative work. I share an apartment with my musician
          partner Adam, and loving cat, Topanga, on a street which overlooks
          Lake Michigan. We can hear the waves when our windows are open.
        </p>

        <Image src={bioPic} alt="Casey Murtaugh" />
      </div>

      {/* <section className="pb-8">
        <SectionHeader>Photos</SectionHeader>
        {images && <MasonryGallery dir={folder} images={images} />}
      </section>

      <section className="pb-8">
        <SectionHeader>Artwork</SectionHeader>
      </section> */}
    </>
  );
};

export default AboutPage;
