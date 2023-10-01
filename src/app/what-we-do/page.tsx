import { Fact } from "@components/Fact/Fact";
import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import { PageHeader } from "@components/PageHeader/PageHeader";
import sampOfferingImg from "@assets/images/samp-offering.png";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader bgImageSrc="/images/page-headers/what-we-do.png" title="What We Do" />

      {/* some intro */}
      <section className="py-14 px-8 w-screen container mx-auto max-w-6xl font-body text-neutral-800">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
          dui posuere, euismod lorem sed, pharetra felis. Nam eleifend vulputate
          felis et gravida. Morbi sed purus eget mauris congue suscipit id at
          lectus. Nulla facilisis tellus ex, ac feugiat est vulputate vel. Sed
          mollis felis est, eu laoreet enim pretium in. Pellentesque vulputate
          dignissim sollicitudin.
        </p>
      </section>

      {/* Offering 1 */}
      <section className="mb-16 w-screen flex justify-center bg-neutral-100">
        <div className="flex flex-col lg:flex-row items-stretch justify-stretch">
          {/* description */}
          <div className="p-8 flex items-center justify-end lg:w-4/5 lg:-ml-4">
            <div className="lg:w-[450px]">
              <Fact
                bgNum="01"
                color="primary"
                title="Acoustic"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget augue at lorem cursus ultrices a finibus enim. Fusce blandit sem odio, ut maximus turpis tempor sed."
              />
            </div>
          </div>

          {/* photo */}
          <div className="w-full max-h-min">
            <Image src={sampOfferingImg} alt="acoustic" />
          </div>
        </div>
      </section>

      {/* Offering 2 */}
      <section className="mb-16 w-screen flex justify-center">
        <div className="flex flex-col lg:flex-row-reverse items-stretch justify-stretch">
          {/* description */}
          <div className="p-8 flex items-center justify-start lg:w-4/5 lg:pl-16">
            <div className="lg:w-[450px]">
              <Fact
                bgNum="02"
                color="primary"
                title="Carpets"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget augue at lorem cursus ultrices a finibus enim. Fusce blandit sem odio, ut maximus turpis tempor sed."
              />
            </div>
          </div>

          {/* photo */}
          <div className="w-full max-h-min">
            <Image src={sampOfferingImg} alt="acoustic" />
          </div>
        </div>
      </section>

      {/* Offering 3 */}
      <section className="mb-16 w-screen flex justify-center bg-neutral-100">
        <div className="flex flex-col lg:flex-row items-stretch justify-stretch">
          {/* description */}
          <div className="p-8 flex items-center justify-end lg:w-4/5 lg:-ml-4">
            <div className="lg:w-[450px]">
              <Fact
                bgNum="03"
                color="primary"
                title="Accent & Seating Systems"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget augue at lorem cursus ultrices a finibus enim. Fusce blandit sem odio, ut maximus turpis tempor sed."
              />
            </div>
          </div>

          {/* photo */}
          <div className="w-full max-h-min">
            <Image src={sampOfferingImg} alt="acoustic" />
          </div>
        </div>
      </section>

      {/* Offering 4 */}
      <section className="mb-16 w-screen flex justify-center">
        <div className="flex flex-col lg:flex-row-reverse items-stretch justify-stretch">
          {/* description */}
          <div className="p-8 flex items-center justify-start lg:w-4/5 lg:pl-16">
            <div className="lg:w-[450px]">
              <Fact
                bgNum="04"
                color="primary"
                title="Systems Furniture"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget augue at lorem cursus ultrices a finibus enim. Fusce blandit sem odio, ut maximus turpis tempor sed."
              />
            </div>
          </div>

          {/* photo */}
          <div className="w-full max-h-min">
            <Image src={sampOfferingImg} alt="acoustic" />
          </div>
        </div>
      </section>

      {/* Offering 5 */}
      <section className="mb-16 w-screen flex justify-center bg-neutral-100">
        <div className="flex flex-col lg:flex-row items-stretch justify-stretch">
          {/* description */}
          <div className="p-8 flex items-center justify-end lg:w-4/5 lg:-ml-4">
            <div className="lg:w-[450px]">
              <Fact
                bgNum="05"
                color="primary"
                title="Specialized Features"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget augue at lorem cursus ultrices a finibus enim. Fusce blandit sem odio, ut maximus turpis tempor sed."
              />
            </div>
          </div>

          {/* photo */}
          <div className="w-full max-h-min">
            <Image src={sampOfferingImg} alt="acoustic" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
