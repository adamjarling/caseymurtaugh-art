"use client";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";

import Image from "next/image";
import { type IGetPlaiceholderReturn } from "plaiceholder";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import styles from "@/app/page.module.css";

export type MasonryImage = IGetPlaiceholderReturn["img"] & {
  placeholder: any;
  blurDataURL: string;
};

interface Props {
  dir: string;
  images: MasonryImage[];
  manifest?: {
    [key: string]: {
      title?: string;
      description?: string;
    };
  };
}

function getInfo(src: string, manifest: any) {
  if (!src || !manifest) return "";
  const arr = src.split("/");
  const fileName = src.split("/")[arr.length - 1];

  const info = manifest[fileName];

  return info || "";
}

const MasonryGallery: React.FC<Props> = ({ dir, images = [], manifest }) => {
  const [photoIndex, setPhotoIndex] = useState(-1);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    //700: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        {images.map((image, index) => (
          <div key={image.src}>
            <Image
              {...image}
              onClick={() => handleImageClick(index)}
              alt={"alt"}
              className="cursor-pointer"
            />
          </div>
        ))}
      </Masonry>
      <Lightbox
        open={photoIndex >= 0}
        index={photoIndex}
        close={() => setPhotoIndex(-1)}
        slides={images.map((i) => ({
          src: i.src,
          key: i.src,
          width: i.width,
          height: i.height,
          title: getInfo(i.src, manifest)?.title || "",
          description: getInfo(i.src, manifest)?.description || "",
        }))}
        plugins={[Captions]}
        captions={{
          descriptionTextAlign: "center",
        }}
      />
    </>
  );
};

export default MasonryGallery;
