import Image from "next/image";
import bioPic from "public/images/IMG_1133.jpg";

const AboutPage = async () => {
  return (
    <>
      {/* <PageTitleBanner>Me</PageTitleBanner> */}
      <div className="container">
        <p className="pt-0 text-justify">
          I am an artist and educator currently living and working in{" "}
          <strong>Vienna, Austria</strong>, following over a decade of practice
          in Chicago, USA. My work exists at the intersection of institutional
          structure and creative agency, where I treat the school environment
          not just as a workplace, but as raw material for inquiry. 
        </p>
        <p className="pt-0 text-justify">
          My artmaking and teaching are inseparable, collaborative processes.
          Whether in a Chicago public school or an international academy in
          Vienna, I prioritize student input, personal stories, and
          inquiry-based questions as the "seeds" for both curriculum and my own
          visual research. I am fascinated by the messy process of making art
          and how it allows students to develop unique ideas and real-world
          connections. 
        </p>
        <p className="pt-0 text-justify">
          My current research involves collecting the sensory "bits and pieces"
          of institutional life - the rhythmic pulse of school hallways, the
          movement of people through historic spaces, and the visual glitches
          found in the cracks of daily routines. This practice of active
          collection informs my photography, mixed media, and installation work.
        </p>
        <p className="pt-0 text-justify">
          With a <strong>Master of Arts in Interdisciplinary Arts</strong> from
          Columbia College and a <strong>Master of Arts</strong> in Teaching
          from the School of the <strong>Art Institute of Chicago</strong>, my
          background is rooted in collaboration. I aim to motivate my students
          and myself to be active, lifelong learners and reflective members of
          the world. 
        </p>
        <p className="pt-0 text-justify">
          When I am not in the studio or the classroom, I sustain my creative
          practice through a dedicated yoga and meditation practice, exploring
          how endurance and routine can fuel artistic growth. I share my life
          and creative journey with my musician partner, Adam, as we navigate
          the transition from the waves of Lake Michigan to the historic streets
          of Vienna. {" "}
        </p>

        <Image src={bioPic} alt="Casey Murtaugh" />
      </div>
    </>
  );
};

export default AboutPage;
