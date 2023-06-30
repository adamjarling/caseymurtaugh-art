import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import images from "./images-meta.json";
import { manifest } from "./manifest";

const WorkPage = async () => {
  return (
    <>
      <div className="container">
        <p className="pt-0 text-justify">
          Selections from my work. Click to see info.
        </p>
      </div>

      {images && <MasonryGallery images={images} manifest={manifest} />}
    </>
  );
};

export default WorkPage;
