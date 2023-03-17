import { promises as fs } from "fs";
import path from "path";

import MasonryGallery, { MasonryImage } from "@/components/Masonry";
import PageTitleBanner from "@/components/PageTitleBanner";

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
      <PageTitleBanner>Me</PageTitleBanner>
      <div className="container">
        <p>
          Hi, I&apos;m Casey, an artist and educator living in Rogers Park,
          Chicago. I&apos;m a graduate of the School of the Art Institute of
          Chicago, where I studied Art Education. I have taught art in Public
          Schools for over 10 years, and I currently teach at Senn High School.
          I&apos;m also an artist who paints, makes sun catchers, and does
          graphic design for worthy local garage rock bands. I enjoy walking
          along the beach, playing with my cat, traveling outside the USA, and
          hot yoga.
        </p>
      </div>

      {images && <MasonryGallery dir={folder} images={images} />}
    </>
  );
};

export default AboutPage;
