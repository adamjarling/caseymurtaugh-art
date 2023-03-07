"use client";

import Block from "@/components/Block";
import HeroImage from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main>
        <HeroImage
          headline="Headline goes here"
          imageUrl="/images/IMG_1272.jpg"
          altText="Hero"
        />

        <section className="section">
          <h2 className="homepage-subtitle">Educator</h2>
        </section>

        <div className="grid gap-2 grid-cols1 md:grid-cols-2">
          <Block
            bgImgSrc="/student-process/IMG_6075.JPG"
            altText="Process"
            href="/"
            label="Process"
          />
          <Block
            bgImgSrc="/student-artwork/IMG_0220.jpg"
            altText="Student artwork"
            href="/"
            label="Student Artwork"
          />
        </div>

        <section className="section">
          <h2 className="homepage-subtitle">Artist</h2>
        </section>
        <div className="grid gap-2 grid-cols1 md:grid-cols-2">
          <Block
            bgImgSrc="/student-process/IMG_6075.JPG"
            altText="Process"
            href="/"
            label="Process"
          />
          <Block
            bgImgSrc="/student-artwork/IMG_0220.jpg"
            altText="Student artwork"
            href="/"
            label="Student Artwork"
          />
        </div>

        <section className="section">
          <h2 className="homepage-subtitle">Observer</h2>
        </section>
        <div className="grid gap-2 grid-cols1 md:grid-cols-2">
          <Block
            bgImgSrc="/student-process/IMG_6075.JPG"
            altText="Process"
            href="/"
            label="Process"
          />
          <Block
            bgImgSrc="/student-artwork/IMG_0220.jpg"
            altText="Student artwork"
            href="/"
            label="Student Artwork"
          />
        </div>
      </main>
    </>
  );
}
