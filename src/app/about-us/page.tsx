import { Footer } from "@components/Footer/Footer";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { NavBar } from "@components/NavBar/NavBar";
import Image from "next/image";
import teamImg from "@assets/images/unsplash_-uHVRvDr7pg.png";
import { Fact } from "@components/Fact/Fact";
import quoteIcon from "@assets/icons/quote.svg";

const CORE_VALUES = [
  {
    title: "Innovation",
    description:
      "We believe in continuously evolving and improving our techniques, tools, and strategies to provide unique and creative construction solutions.",
    bgNum: "1",
  },
  {
    title: "Reliability",
    description:
      "We are committed to delivering on our promises, meeting deadlines, and ensuring the highest quality in our work.",
    bgNum: "2",
  },
  {
    title: "Speed",
    description:
      "We value our clients' time and strive to complete our projects promptly without compromising on quality.",
    bgNum: "3",
  },
  {
    title: "Partnership",
    description:
      "We promote a collaborative environment, working closely with our clients and stakeholders to achieve mutual success.",
    bgNum: "4",
  },
  {
    title: "Attention to Detail",
    description:
      "We are meticulous in our work, ensuring every detail is attended to, reflecting our family-led, ambitious culture.",
    bgNum: "5",
  },
];

export default function AboutUs() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader bgImageSrc="/images/about-us.png" title="About Us" />

      {/* some intro */}
      <section className="py-14 px-8 w-screen container mx-auto max-w-6xl font-body">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
          dui posuere, euismod lorem sed, pharetra felis. Nam eleifend vulputate
          felis et gravida. Morbi sed purus eget mauris congue suscipit id at
          lectus. Nulla facilisis tellus ex, ac feugiat est vulputate vel. Sed
          mollis felis est, eu laoreet enim pretium in. Pellentesque vulputate
          dignissim sollicitudin.
        </div>

        <div className="py-8 gap-8 lg:gap-0 flex flex-wrap justify-center items-center mx-auto">
          <Image src={teamImg} alt="sample work" className="lg:w-1/2 block" />

          <div className="lg:px-10 lg:w-1/2">
            Founded in 2010, 360degrees Systems Corporation is a Makati
            City-based company. Comprised of a team of experts, the company
            specializes in delivering comprehensive Turn-key Services to
            renowned Call Centers, BPOs, Shared Services, and Corporate Offices.
          </div>
        </div>
      </section>

      {/* mission */}
      {/* <section className="py-14 px-8 w-screen container mx-auto max-w-6xl">
        <h1 className="font-header text-h2 text-neutral-800 text-center font-bold">
          Our Mission
        </h1>
      </section> */}

      {/* vision */}
      <section className="py-14 px-8 w-screen container mx-auto max-w-6xl">
        <h1 className="font-header text-h2 text-neutral-800 text-center font-bold my-6">
          Our Vision
        </h1>
        <div className="relative mx-16 lg:mx-32">
          <div className="relative leading-9 z-10 font-semibold text-neutral-800 text-h5 font-header text-left lg:px-4">
            To be the global leader in the construction industry, recognized for
            creating the best offices in the world. We envision to build a
            future where our designs enhance work productivity, inspire
            partnership and fun, while showcasing our professionalism.
          </div>
          <Image
            src={quoteIcon}
            alt="quote"
            width={56}
            className="absolute z-0 top-0 left-0"
          />
        </div>
      </section>

      {/* core values */}
      <section className="py-14 px-8 w-screen bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-header text-h2 text-neutral-800 text-center font-bold">
            Our Core Values
          </h1>

          <ol className="my-8 lg:ml-24 lg:mt-20 flex flex-wrap gap-16 justify-center">
            {CORE_VALUES.map((val, idx) => (
              <li key={idx} className=" lg:w-1/3">
                <Fact
                  title={val.title}
                  description={val.description}
                  bgNum={val.bgNum}
                  color="accent"
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* commitment */}
      {/* our team */}
      {/* our milestones */}

      <Footer />
    </>
  );
}
