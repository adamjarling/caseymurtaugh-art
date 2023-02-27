import Image from "next/image";

import casey from "@/public/images/IMG_9823.jpg";

const About = () => {
  return (
    <>
      <Image src={casey} alt="Casey artwork" />
      <section className="text-center section">Some text goes here</section>
    </>
  );
};

export default About;
