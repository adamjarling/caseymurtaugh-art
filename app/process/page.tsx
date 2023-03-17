import { promises as fs } from "fs";
import path from "path";

import MasonryGallery, { MasonryImage } from "@/components/Masonry";
import PageTitleBanner from "@/components/PageTitleBanner";

import { manifest } from "./manifest";

const sizeOf = require("image-size");

const folder = "student-process";

const StudentProcessPage = async () => {
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
      <PageTitleBanner>Student Process</PageTitleBanner>
      <div className="container">
        <p>
          The process of making art is a journey. It is a journey of discovery.
          Below are some photos sharing the process of making art with my
          students.
        </p>
      </div>

      {images && (
        <MasonryGallery dir={folder} images={images} manifest={manifest} />
      )}
    </>
  );
};

export default StudentProcessPage;
