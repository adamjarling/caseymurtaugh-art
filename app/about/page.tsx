import Image from "next/image";

import casey from "@/public/images/IMG_9823.jpg";

const About = () => {
  return (
    <>
      <Image src={casey} alt="Casey artwork" />
      <section className="section">
        <h2>Educator</h2>
      </section>

      <section className="section">
        <h2>Artist</h2>
      </section>

      <section className="section">
        <h2>Observer</h2>
      </section>
    </>
  );
};

export default About;
