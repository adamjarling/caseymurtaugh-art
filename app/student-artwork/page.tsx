import { promises as fs } from "fs";
import path from "path";

import MasonryGallery, { MasonryImage } from "@/components/Masonry";
import PageTitleBanner from "@/components/PageTitleBanner";
import { Manifest, ManifestStudentArtwork } from "@/types";

import { manifest } from "./manifest";

const sizeOf = require("image-size");

const folder = "student-artwork";

const StudentArtworkPage = async () => {
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

  const newManifest: Manifest = {};
  Object.keys(manifest).forEach((key) => {
    // @ts-ignore
    const obj: ManifestStudentArtwork = manifest[key];
    newManifest[key] = {
      // @ts-ignore
      title: obj.artist || "",
      description: `Grade ${obj.grade}; Materials: ${obj.materials}; ${obj.description}; ${obj.year}`,
    };
  });

  return (
    <>
      <PageTitleBanner>Student Artwork</PageTitleBanner>
      <div className="container">
        <p>
          Here are some art pieces from the students I have taught over the
          years.
        </p>
      </div>
      {images && (
        <MasonryGallery dir={folder} images={images} manifest={newManifest} />
      )}
    </>
  );
};

export default StudentArtworkPage;
