import { promises as fs } from "fs";
import path from "path";
import React from "react";
import styles from "../page.module.css";
import MasonryGallery from "../Masonry";
const sizeOf = require("image-size");

const { container, main, title } = styles;

export type MasonryImage = {
  filename: string;
  height: number;
  orientation: number;
  width: number;
  type: string;
};

const GalleryPage = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/student-artwork");
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
        Something goes here
      </section>
      <MasonryGallery dir="student-artwork" images={images} />
    </>
  );
};

export default GalleryPage;
