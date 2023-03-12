import { promises as fs } from "fs";
import path from "path";
import { getPlaiceholder, type IGetPlaiceholderReturn } from "plaiceholder";

import MasonryGallery from "@/components/Masonry";

const folder = "student-process";

const StudentProcessPage = async () => {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );
  console.log(imageFilenames);

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

  return (
    <>
      <section className="max-w-3xl py-8 mx-auto text-center">
        Something goes here
      </section>
      {images && <MasonryGallery dir={folder} images={images} />}
    </>
  );
};

export default StudentProcessPage;
