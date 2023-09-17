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
      <section className="py-14 lg:py-24 px-8 w-screen relative text-neutral-0 bg-neutral-800">
        <div className="relative container mx-auto max-w-6xl">
          <h1 className="font-header text-h2 text-center font-bold mb-6">
            Our Mission
          </h1>
          <div className="relative leading-9 z-10 font-semibold text-h5 font-header text-left lg:px-4 mx-16 lg:mx-32">
            To revolutionize the construction industry by providing innovative
            and creative solutions for corporate and commercial spaces, call
            centers, and BPOs. We are committed to delivering reliable, fast,
            and professional services that generate awesome and
            partnership-driven environments for our clients.
          </div>
        </div>
      </section>

      {/* vision */}
      <section className="py-14 px-8 w-screen container mx-auto max-w-6xl">
        <h1 className="font-header text-h2 text-neutral-800 text-center font-bold mb-6">
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
      <section className="py-14 px-8 w-screen bg-gradient-to-b from-accent-50 to-neutral-0">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-header text-h2 text-neutral-800 text-center font-bold">
            Our Milestones
          </h1>

          <p className="font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            quis dui posuere, euismod lorem sed, pharetra felis. Nam eleifend
            vulputate felis et gravida. Morbi sed purus eget mauris congue
            suscipit id at lectus. Nulla facilisis tellus ex, ac feugiat est
            vulputate vel. Sed mollis felis est, eu laoreet enim pretium in.
            Pellentesque vulputate dignissim sollicitudin. Sed tempus risus sed
            lacus imperdiet, vel tempus nibh scelerisque. Suspendisse id dui
            turpis.
          </p>

          <div className="relative my-8 py-4 text-neutral-800">
            <div className="relative z-10 flex mt-8 flex-col">
              <div className="font-bold my-2 font-header text-h3 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto">
                2010
              </div>

              <div className="absolute left-1/2 translate-x-1/3">
                <div className="relative min-h-[98px] flex items-center -mt-2 font-bold my-2 min-w-[200px] max-w-[350px] font-header text-h5 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto">
                  Company was founded
                  <span className="rotate-180 absolute -left-6 -ml-[2.5px] top-1/2 -translate-y-1/2">
                    <svg
                      width="49"
                      height="52"
                      viewBox="0 0 49 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.6274 48.2563L3.05176e-05 25.6289L22.6274 3.00144L45.2549 25.6289L22.6274 48.2563Z"
                        fill="#FAFAFA"
                      />
                      <path
                        d="M24.043 1.59033L24.041 1.59234L48.0573 25.6025L24.0149 49.6528L24.0086 49.6464L22.5988 51.0552V48.231L22.6036 48.2357L45.2294 25.6024L22.6251 3.00482L22.6288 3.00109V0.177002L24.043 1.59033Z"
                        fill="#444041"
                      />
                    </svg>
                  </span>
                </div>

                <div className="my-2 min-w-[200px] max-w-[350px] font-header text-h6 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto">
                  Signed first fit-out project for a 2,000 sqm Cebu site
                </div>
              </div>

              {/* <div className="font-bold my-2 min-w-[200px] max-w-[350px] text-center font-header text-h6 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto">
                Company was founded
              </div>

              <div className="font-bold my-2 min-w-[200px] max-w-[350px] text-center font-header text-h6 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto">
                Signed first fit-out project for a 2,000 sqm Cebu site
              </div> */}
            </div>

            <div className="absolute z-0 h-full top-0 left-1/2 -translate-x-1/2 solid border-l-2 border-neutral-800"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
