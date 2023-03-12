import { promises as fs } from "fs";
import path from "path";
import { getPlaiceholder, type IGetPlaiceholderReturn } from "plaiceholder";

import MasonryGallery from "@/components/Masonry";
import { Manifest, ManifestStudentArtwork } from "@/types";

import { manifest } from "./manifest";

const folder = "student-artwork";

const StudentArtworkPage = async () => {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );

  // Generate a blur loading image and image sizing
  const promises: any[] = [];
  imageFilenames.forEach((ifn) =>
    promises.push(getPlaiceholder(`/${folder}/${ifn}`))
  );
  const responses = await Promise.all<IGetPlaiceholderReturn>(promises);
  const images = responses.map((response) => ({
    ...response.img,
    placeholder: "blur",
    blurDataURL: response.base64,
  }));

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
      <h1 className="page-title">Student Artwork</h1>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {images && (
        <MasonryGallery dir={folder} images={images} manifest={newManifest} />
      )}
    </>
  );
};

export default StudentArtworkPage;
