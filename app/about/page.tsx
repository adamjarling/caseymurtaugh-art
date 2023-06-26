import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import PageTitleBanner from "@/components/PageTitleBanner";
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

  return (
    <>
      {/* <PageTitleBanner>Me</PageTitleBanner> */}
      <div className="container">
        <p className="py-8 text-justify">
          My name is Casey Murtaugh, an artist and educator living and working
          in Chicago, USA. My artmaking and teaching practices are both exciting
          and challenging for me. I work very intently to understand these
          challenges as seeds for personal growth, and am in a constant state of
          learning. I take photographs of people and street art in cities I
          visit around the world. I make paintings and collages inspired by what
          I see in them. I have a regular hot yoga practice which helps keep me
          mentally and physically fit. I share an apartment with my musician
          husband, Adam, and loving cat, Topanga, on a street which overlooks
          Lake Michigan. We can hear the waves when our windows are open. I
          &apos;ve been teaching visual art in public schools for the past 10
          years.
        </p>
      </div>

      {images && <MasonryGallery dir={folder} images={images} />}
    </>
  );
};

export default AboutPage;
