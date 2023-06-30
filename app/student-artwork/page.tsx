import { Manifest, ManifestStudentArtwork } from "@/types";
import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import PageTitleBanner from "@/components/PageTitleBanner";
import images from "./images-meta.json";
import { manifest } from "./manifest";

const folder = "student-artwork";

const StudentArtworkPage = async () => {
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
      {/* <PageTitleBanner>Student Artwork</PageTitleBanner> */}
      <div className="container py-8">
        <p>Click on an image for more information about each piece.</p>
      </div>
      {images && (
        <MasonryGallery dir={folder} images={images} manifest={newManifest} />
      )}
    </>
  );
};

export default StudentArtworkPage;
