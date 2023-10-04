import { Footer } from "@components/Footer/Footer";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { NavBar } from "@components/NavBar/NavBar";
import Image from "next/image";
import { Fact } from "@components/Fact/Fact";
import quoteIcon from "@assets/icons/quote.svg";
import { CORE_VALUES, MILESTONE_LIST } from "./contants";
import { MilestoneItem } from "@components/MilestoneItem/MilestoneItem";
import { Person } from "@components/Person/Person";
import styles from "./AboutUs.module.css";
import teamPhoto1 from "@assets/images/about-us/team-photo-1.jpg";
import teamPhoto2 from "@assets/images/about-us/team-photo-2.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader
        bgImageSrc="/images/page-headers/about-us.png"
        title="About Us"
      />

      {/* some intro */}
      <section className="py-14 px-8 w-screen container mx-auto max-w-6xl font-body">
        <p className="text-justify">
          Founded in 2010, 360DEGREES SYSTEMS CORPORATION is a Makati City-based
          company. Comprised of a team of experts, the company specializes in
          delivering comprehensive Turn-key Services to renowned Call Centers,
          BPOs, Shared Services, and Corporate Offices.
        </p>

        <Image src={teamPhoto1} alt="sample work" className="block my-8" />

        <p className="py-2 text-justify">
          We value the trust and confidence expressed by clients through repeat
          orders and established relationships.
        </p>
        <p className="py-2 text-justify">
          We aim to continuously improve our products by working hand in hand
          with end-users and come up with products that work best for them
          combined with timely delivery and committed service.
        </p>

      </section>

      {/* mission */}
      <section className={`py-14 lg:py-24 px-8 w-screen text-neutral-0 ${styles.missionSection}`}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="relative font-header z-10 text-h2 text-center font-bold mb-6">
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

      {/* our track record */}
      <section className="py-14 px-8 w-screen container mx-auto max-w-6xl">
        <h1 className="font-header text-h2 text-neutral-800 text-center font-bold mb-6">
          Our Track Record
        </h1>

        <div className="flex flex-wrap gap-4 justify-center items-center mx-auto max-w-6xl py-4">
          {/* first item */}
          <div className="flex flex-col items-center justify-start text-center">
            <div className="relative w-64 h-64 mb-2">
              <Image
                src="/images/about-us/track-record-area.png"
                sizes="400px"
                fill
                alt=""
              />
            </div>
            <div className="font-header font-bold text-primary-500 text-h4">
              130,000 sqm
            </div>
            <div className="font-body text-neutral-800 text-body1 font-bold uppercase w-52 leading-tight">
              TOTAL AREA
            </div>
            <div className="font-body text-neutral-800 text-body2 w-52">
              Fit-out various offices and call center facilities
            </div>
          </div>

          {/* second item */}
          <div className="flex flex-col items-center justify-start text-center">
            <div className="relative w-64 h-64 mb-2">
              <Image
                src="/images/about-us/track-record-carpet.png"
                sizes="400px"
                fill
                alt=""
              />
            </div>
            <div className="font-header font-bold text-primary-500 text-h4">
              100,000 sqm
            </div>
            <div className="font-body text-neutral-800 text-body1 font-bold uppercase w-52 leading-tight">
              CUSHION-BACK CARPET
            </div>
            <div className="font-body text-neutral-800 text-body2 w-52">
              Fit-out various offices and call center facilities
            </div>
          </div>

          {/* third item */}
          <div className="flex flex-col items-center justify-start text-center">
            <div className="relative w-64 h-64 mb-2">
              <Image
                src="/images/about-us/track-record-workstation.png"
                sizes="400px"
                fill
                alt=""
              />
            </div>
            <div className="font-header font-bold text-primary-500 text-h4">
              35,000 sets
            </div>
            <div className="font-body text-neutral-800 text-body1 font-bold uppercase w-52 leading-tight">
              WORKSTATIONS & SEATING SYSTEMS
            </div>
            <div className="font-body text-neutral-800 text-body2 w-52">
              Supply and Installation
            </div>
          </div>
        </div>
      </section>

      {/* our team */}
      <section className="py-14 px-8 w-screen bg-accent-50">
        <div className="container mx-auto max-w-6xl text-neutral-800">
          <h1 className="font-header text-h2 text-center font-bold">
            Our Team
          </h1>

          {/* <p className="font-body my-4 text-center">
            Some description about the founders and the team...
          </p> */}

          <div className="flex flex-wrap gap-7 justify-center mt-10">
            <div className="w-[320px]">
              <Person
                name="Gian Gofavis"
                title="CEO & Founder, Sales"
                photoSrc="/images/about-us/founder-Gian-Gofavis.jpg"
                website="https://www.360degreessystemscorporation.com/"
                linkedin="https://www.linkedin.com/in/gian-s-gofavis-9048739"
              />
            </div>
            <div className="w-[320px]">
              <Person
                name="Irene Reyes"
                title="President & Co-Founder, Operations"
                photoSrc="/images/about-us/founder-Irene-Reyes.jpg"
                website="https://www.360degreessystemscorporation.com/"
                linkedin="https://www.linkedin.com/in/irene-reyes-8510961a/"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-col gap-4 max-w-2xl mx-auto mt-8">
            <div className="relative min-w-xs w-full h-full">
              <Image src={teamPhoto2} alt="360degrees team" />
            </div>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis dui posuere, euismod lorem sed, pharetra felis. Nam eleifend
              vulputate felis et gravida. Morbi sed purus eget mauris congue
              suscipit id at lectus.
            </p> */}
          </div>
        </div>
      </section>

      {/* our milestones */}
      <section className="py-14 px-8 w-screen bg-gradient-to-b from-accent-50 to-neutral-0">
        <div className="container mx-auto max-w-6xl text-neutral-800">
          <h1 className="font-header text-h2 text-center font-bold">
            Our Milestones
          </h1>
{/*
          <p className="font-body my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            quis dui posuere, euismod lorem sed, pharetra felis. Nam eleifend
            vulputate felis et gravida. Morbi sed purus eget mauris congue
            suscipit id at lectus. Nulla facilisis tellus ex, ac feugiat est
            vulputate vel. Sed mollis felis est, eu laoreet enim pretium in.
            Pellentesque vulputate dignissim sollicitudin. Sed tempus risus sed
            lacus imperdiet, vel tempus nibh scelerisque. Suspendisse id dui
            turpis.
          </p> */}

          <div className="relative my-8 py-4 text-neutral-800">
            {MILESTONE_LIST.map((m, idx) => (
              <div key={idx} className="my-8">
                <MilestoneItem
                  direction={m.direction}
                  year={m.year}
                  mainEvent={m.mainEvent}
                  otherEvents={m.otherEvents ?? []}
                />
              </div>
            ))}

            <div className="absolute z-0 h-full top-0 left-1/2 -translate-x-1/2 solid border-l-2 border-neutral-800"></div>

            <div className="absolute z-0 h-3 -bottom-3 left-1/2 -translate-x-1/2 border-dotted border-l-2 border-neutral-800"></div>
          </div>

          <div className="-mt-3 text-h6 font-header font-bold text-center">
            Onwards to more exciting projects!{" "}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
