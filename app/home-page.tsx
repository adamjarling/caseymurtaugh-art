"use client";

import { motion } from "framer-motion";

import Block from "@/components/Block";
import HeroImage from "@/components/Hero";
import ParallaxHero from "@/components/ParallaxHero";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-5">
      <motion.h2
        initial={{ x: -100 }}
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
          headline="Headline goes here"
          imageUrl="/images/IMG_1272.jpg"
          altText="Hero"
        />

        <SectionHeader>Educator</SectionHeader>

        <div className="grid gap-2 grid-cols1 md:grid-cols-3">
          <Block
            bgImgSrc="/student-process/IMG_6075.JPG"
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
        {/* <div className="grid gap-2 grid-cols1 md:grid-cols-3">
          <Block
            bgImgSrc="/travel/IMG_1584.JPG"
            altText="Travel"
            href="/"
            // label="Process"
          />
          <Block
            bgImgSrc="/travel/IMG_3403.jpg"
            altText="Student artwork"
            href="/"
            // label="Student Artwork"
          />
          <Block
            bgImgSrc="/travel/IMG_3403.jpg"
            altText="Student artwork"
            href="/"
            // label="Student Artwork"
          />
        </div> */}

        <HeroImage
          //headline="Headline goes here"
          imageUrl="/travel/IMG_3403.jpg"
          altText="Hero"
        />
      </main>
    </>
  );
}
