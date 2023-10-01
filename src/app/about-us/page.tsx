import { Footer } from "@components/Footer/Footer";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { NavBar } from "@components/NavBar/NavBar";
import Image from "next/image";
import teamImg from "@assets/images/unsplash_-uHVRvDr7pg.png";
import { Fact } from "@components/Fact/Fact";
import quoteIcon from "@assets/icons/quote.svg";
import { CORE_VALUES, MILESTONE_LIST } from "./contants";
import { MilestoneItem } from "@components/MilestoneItem/MilestoneItem";
import { Person } from "@components/Person/Person";
import teamPhoto from "@assets/images/about-us-team-1.png";

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

      {/* our track record */}
      <section className="py-14 px-8 w-screen container mx-auto max-w-6xl">
        <h1 className="font-header text-h2 text-neutral-800 text-center font-bold mb-6">
          Our Track Record
        </h1>
      </section>

      {/* our team */}
      <section className="py-14 px-8 w-screen bg-accent-50">
        <div className="container mx-auto max-w-6xl text-neutral-800">
          <h1 className="font-header text-h2 text-center font-bold">
            Our Team
          </h1>

          <p className="font-body my-4 text-center">
            Some description about the founders and the team...
          </p>

          <div className="flex flex-wrap gap-7 justify-center mt-10">
            <Person
              name="Rafaela Santos"
              title="Co-Founder"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc tortor, viverra ut aliquam id, aliquam vitae enim."
              photoSrc="/images/unsplash_92z4a5V7y4I.png"
              website="https://www.360degreessystemscorporation.com/"
              instagram="http://instagram.com/"
              linkedin="https://linkedin.com/"
              email="info@360degrees.com.ph"
            />
            <Person
              name="Isabella Reyes"
              title="Co-Founder"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc tortor, viverra ut aliquam id, aliquam vitae enim."
              photoSrc="/images/aiony-haust-3TLl_97HNJo-unsplash.jpg"
              website="https://www.360degreessystemscorporation.com/"
              instagram="http://instagram.com/"
              linkedin="https://linkedin.com/"
              email="info@360degrees.com.ph"
            />
          </div>

          <div className="flex flex-col-reverse lg:flex-col gap-4 max-w-2xl mx-auto mt-8">
            <div className="relative min-w-xs w-full h-full">
              <Image src={teamPhoto} alt="360degrees team" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis dui posuere, euismod lorem sed, pharetra felis. Nam eleifend
              vulputate felis et gravida. Morbi sed purus eget mauris congue
              suscipit id at lectus.
            </p>
          </div>
        </div>
      </section>

      {/* our milestones */}
      <section className="py-14 px-8 w-screen bg-gradient-to-b from-accent-50 to-neutral-0">
        <div className="container mx-auto max-w-6xl text-neutral-800">
          <h1 className="font-header text-h2 text-center font-bold">
            Our Milestones
          </h1>

          <p className="font-body my-4">
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
