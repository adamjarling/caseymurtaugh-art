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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {images && <MasonryGallery dir={folder} images={images} />}
    </>
  );
};

export default AboutPage;
