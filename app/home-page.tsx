"use client";

import Block from "@/components/Block";
import Grid from "@/components/Grid";
import HeroImage from "@/components/Hero";
import ParallaxHero from "@/components/ParallaxHero";
import ParallaxVideo from "@/components/ParallaxVideo";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main>
        <ParallaxVideo headline="" videoUrl="/IMG_9825.mp4" altText="Hero" />

        <section className="py-8">
          <SectionHeader>Educator</SectionHeader>
          <Grid>
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
          </Grid>
        </section>

        <SectionHeader>Artist</SectionHeader>
        <Grid cols={2}>
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
        </Grid>

        {/* <SectionHeader>Observer</SectionHeader>
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
        </div> */}
      </main>
    </>
  );
}
