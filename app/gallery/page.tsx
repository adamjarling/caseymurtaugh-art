import { promises as fs } from "fs";
import path from "path";
import React from "react";
import styles from "../page.module.css";
import { Gallery } from "./Gallery";
import MasonryGallery from "./Masonry";
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
      <MasonryGallery dir="student-process" images={images} />
    </>
  );
};

export default GalleryPage;
