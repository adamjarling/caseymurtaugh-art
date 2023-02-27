import React from "react";
import casey from "../../public/images/IMG_9823.jpg";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Image src={casey} alt="Casey artwork" />
      <section className="text-center section">Some text goes here</section>
    </>
  );
};

export default About;
