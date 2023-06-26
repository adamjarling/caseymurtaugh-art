import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import PageTitleBanner from "@/components/PageTitleBanner";
import { promises as fs } from "fs";
import { manifest } from "./manifest";
import path from "path";

const sizeOf = require("image-size");

const folder = "student-process";

const StudentProcessPage = async () => {
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

  return (
    <>
      {/* <PageTitleBanner>Student Process</PageTitleBanner> */}
      <div className="container">
        <p className="pt-8 text-justify">
          My artmaking process and teaching practice are interconnected and
          inform one another. I work with an eclectic group of students from all
          around the city of Chicago and in one of the most ethnically diverse
          neighborhoods and schools in our city. I prioritize utilizing their
          input, feedback, questions and personal stories as ingredients for
          building engaging and innovative curriculum. I consider this to be
          part of a collaborative artistic partnership between students and
          myself.
        </p>
        <p className="pb-8 text-justify">
          I am interested in helping students to develop their own ideas & to
          make real-world connections through the messy process of making art. I
          work hard to build trusting relationships with students in order to
          create an environment where they feel comfortable to play with art
          materials and their own unique ideas. I often hear students comment
          about how our class is their favorite part of the day - a dedicated
          space & time for them to freely experiment with projects they&apos;ve
          actively helped to shape.
        </p>
      </div>

      {images && (
        <MasonryGallery dir={folder} images={images} manifest={manifest} />
      )}
    </>
  );
};

export default StudentProcessPage;
