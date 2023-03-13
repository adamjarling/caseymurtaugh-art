"use client";

import { motion } from "framer-motion";

import Block from "@/components/Block";
import HeroImage from "@/components/Hero";
import ParallaxHero from "@/components/ParallaxHero";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="container pt-8 pb-5">
      <motion.h2
        initial={{ x: -10 }}
        whileInView={{ x: 0 }}
        transition={{
          type: "spring",
        }}
        className="homepage-subtitle"
      >
        {children}
      </motion.h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <ParallaxHero
          headline=".art"
          imageUrl="/images/IMG_1272.jpg"
          altText="Hero"
        />

        <SectionHeader>Educator</SectionHeader>

        <div className="grid gap-2 grid-cols1 md:grid-cols-3">
          <Block
            bgImgSrc="/student-process/31.JPG"
            altText="Process"
            href="/process"
            label="Process"
          />
          <Block
            bgImgSrc="/student-artwork/IMG_0224.jpg"
            altText="Student artwork"
            href="/student-artwork"
            label="Student Artwork"
          />
          <Block
            bgImgSrc="/educator/IMG_6272.jpg"
            altText="Student with magnifying glass"
            href="/curriculum"
            label="Curriculum"
          />
        </div>

        <SectionHeader>Artist</SectionHeader>
        <div className="grid gap-2 grid-cols1 md:grid-cols-2">
          <Block
            bgImgSrc="/artist/IMG_8704.jpg"
            altText="Process"
            href="/"
            label="Work"
          />
          <Block
            bgImgSrc="/educator/IMG_7313.jpg"
            altText="Student artwork"
            href="/"
            label="Photos"
          />
        </div>

        <SectionHeader>Observer</SectionHeader>
        <div className="grid gap-2 grid-cols1 md:grid-cols-3">
          <Block
            bgImgSrc="/observer/IMG_4729.JPG"
            altText="Observer preview image 1"
            href="/about"
          />
          <Block
            bgImgSrc="/observer/IMG_5091.jpg"
            altText="Observer preview image 1"
            href="/about"
          />
          <Block
            bgImgSrc="/observer/IMG_4489.JPG"
            altText="Observer preview image 3"
            href="/about"
          />
        </div>
      </main>
    </>
  );
}
