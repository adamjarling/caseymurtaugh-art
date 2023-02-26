"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "react-image-lightbox";
import Image from "next/image";
import "react-image-lightbox/style.css";
import { type MasonryImage } from "./page";
import styles from "../page.module.css";
import "react-image-lightbox/style.css";

interface Props {
  dir: string;
  images: MasonryImage[];
}

const MasonryGallery: React.FC<Props> = ({ dir, images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        {images.map((image, index) => (
          <div key={image.filename}>
            {/* <img
              src={image}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(index)}
              style={{ width: "100%", cursor: "pointer" }}
            /> */}
            <Image
              onClick={() => handleImageClick(index)}
              width={image.width}
              height={image.height}
              alt={"alt"}
              src={`/${dir}/${image.filename}`}
              placeholder="blur"
              blurDataURL={`/${dir}/${image.filename}`}
            />
          </div>
        ))}
      </Masonry>
      {isOpen && (
        <Lightbox
          mainSrc={`/${dir}/${images[photoIndex].filename}`}
          nextSrc={`/${dir}/${
            images[(photoIndex + 1) % images.length].filename
          }`}
          prevSrc={`/${dir}/${
            images[(photoIndex + images.length - 1) % images.length].filename
          }`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
};

export default MasonryGallery;
