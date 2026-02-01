import { Manifest, ManifestStudentArtwork } from "@/types";

import MasonryGallery from "@/components/Masonry";
import PageTitleBanner from "@/components/PageTitleBanner";
import images from "./images-meta.json";
import { manifest } from "./manifest";

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
      <div className="container">
        <p>
          Student artwork from{" "}
          <a
            href="https://www.sennhs.org/"
            target="_blank"
            className="border-b border-gray-500 border-dashed hover:border-0"
          >
            Senn High School
          </a>
          , Chicago USA. Click for more info.
        </p>
        {images && <MasonryGallery images={images} manifest={newManifest} />}
      </div>
    </>
  );
};

export default StudentArtworkPage;
