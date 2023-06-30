import type { Manifest } from "@/types";
import MasonryGallery from "@/components/Masonry";
import images from "./images-meta.json";
import { manifest } from "./manifest";

const newManifest: Manifest = {};
// Object.keys(manifest).forEach((key) => {
//   // @ts-ignore
//   const obj: ManifestStudentArtwork = manifest[key];
//   newManifest[key] = {
//     // @ts-ignore
//     title: obj.title || "",
//     description: obj.description || "",
//   };
// });

const PhotosPage = async () => {
  return (
    <>
      <div className="container">
        <p className="pt-0 text-justify">Some of my photos.</p>
      </div>

      {images && <MasonryGallery images={images} manifest={manifest} />}
    </>
  );
};

export default PhotosPage;
