import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import PageTitleBanner from "@/components/PageTitleBanner";
import images from "./images-meta.json";
import { manifest } from "./manifest";

const folder = "student-process";

// How do I import a JSON file in TypeScript?
// https://stackoverflow.com/questions/49996456/how-do-i-import-a-json-file-in-typescript

const StudentProcessPage = async () => {
  return (
    <>
      <div className="container">
        <p className="pt-0 text-justify">Students at work.</p>

        {images && <MasonryGallery images={images} manifest={manifest} />}
      </div>
    </>
  );
};

export default StudentProcessPage;
