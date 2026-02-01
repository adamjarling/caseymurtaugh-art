import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import images from "./images-meta.json";
import { manifest } from "./manifest";

const WorkPage = async () => {
  return (
    <>
      <div className="container">
        <p className="pt-0 text-justify">
          Selections from my work. Click for info.
        </p>
        {images && <MasonryGallery images={images} manifest={manifest} />}
      </div>
    </>
  );
};

export default WorkPage;
