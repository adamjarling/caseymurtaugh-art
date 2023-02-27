import { promises as fs } from "fs";
import path from "path";

import MasonryGallery, { type MasonryImage } from "@/components/Masonry";
const sizeOf = require("image-size");

const GalleryPage = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/student-process");
  const imageFilenames = await fs.readdir(imageDirectory);
  const images = imageFilenames.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: ifn,
      ...dimensions,
    };
  });

  return (
    <>
      <section className="max-w-3xl py-8 mx-auto text-center">
        {/* My role goes beyond simply imparting knowledge to my students.
        For many, it's an opportunity to inspire and empower the next generation
        of leaders, thinkers, and artists. For one Chicago Public Schools high
        school teacher, art is not just a passion but also an integral part of
        their classroom curriculum. This teacher's unique approach to
        integrating their own creative process into the classroom has not only
        fostered a love for the arts in their students but has also allowed them
        to express themselves in ways they never thought possible. In this
        article, we'll take a closer look at this teacher's process of making
        art in the classroom and how it has positively impacted their students'
        lives. */}
        Something goes here
      </section>
      <MasonryGallery dir="student-process" images={images} />
    </>
  );
};

export default GalleryPage;
