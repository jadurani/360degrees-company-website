import { Fact } from "@components/Fact/Fact";
import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import { OfferingGallery } from "@components/OfferingGallery/OfferingGallery";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { OFFERINGS } from "./offerings.constant";

export default function WhatWeDo() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader
        bgImageSrc="/images/page-headers/what-we-do.png"
        title="What We Do"
      />

      {/* Introduction */}
      <section className="py-14 px-8 w-screen container mx-auto max-w-6xl font-body text-neutral-800">
        <p className="text-justify">
          Celebrate innovation with 360Degrees. Beyond traditional design and
          construction, we specialize in crafting ergonomic furniture, creating
          inspiring office spaces, and turning product ideas into reality. We
          prioritize meticulous attention to detail, ensuring every element
          aligns with your vision. Our solutions enhance well-being and
          productivity in modern workspaces, offering a competitive edge. Join
          us in transforming your business with innovative, adaptable spaces and
          stand-out products.
        </p>
      </section>

      {/* Offering 1 */}
      <section className="lg:mb-16 w-screen flex flex-col lg:flex-row bg-neutral-100">
        {/* description */}
        <div className="px-8 py-16 lg:min-h-[560px] flex items-center justify-end basis-2/5">
          <div className="lg:w-[450px]">
            <Fact
              bgNum="01"
              color="primary"
              title="Acoustic"
              description="Elevate your workspace acoustics and comfort with our innovative acoustic panels. Our panels are meticulously designed to reduce noise and create a peaceful environment, making it easier to focus and collaborate effectively. Crafted with precision and style in mind, they seamlessly blend into your space, adding a touch of sophistication. Whether you're looking to transform a noisy office into a serene haven or optimize audio quality in any environment, our acoustic panels are the solution."
            />
          </div>
        </div>

        <div className="basis-3/5 lg:max-w-5xl">
          <OfferingGallery {...OFFERINGS[0]} />
        </div>
      </section>

      {/* Offering 2 */}
      <section className="lg:mb-16 w-screen flex flex-col lg:flex-row-reverse">
        {/* description */}
        <div className="px-8 py-16 lg:min-h-[560px] flex items-center justify-start basis-2/5 lg:pl-16">
          <div className="lg:w-[450px]">
            <Fact
              bgNum="02"
              color="primary"
              title="Carpets"
              description="Discover the perfect blend of style, durability, and customizability in our carpets. Crafted with care, our carpets offer a plush, comfortable feel underfoot while enhancing the aesthetics of your space. Designed for lasting performance, they are made to withstand the demands of daily use. Beyond their visual appeal, our carpets excel at sound dampening, creating a quieter, more peaceful environment. With a wide array of colors and patterns to choose from, you can easily personalize your space and make it uniquely yours. Upgrade your surroundings with our versatile carpets."
            />
          </div>
        </div>

        <div className="basis-3/5 lg:max-w-5xl">
          <OfferingGallery {...OFFERINGS[1]} />
        </div>
      </section>

      {/* Offering 3 */}
      <section className="lg:mb-16 w-screen flex flex-col lg:flex-row bg-neutral-100">
        {/* description */}
        <div className="px-8 py-16 lg:min-h-[560px] flex items-center justify-end basis-2/5">
          <div className="lg:w-[450px]">
            <Fact
              bgNum="03"
              color="primary"
              title="Accent & Seating Systems"
              description="Our seating systems seamlessly blend cutting-edge technology with durability to redefine your office experience. Designed to support your well-being during long hours, our chairs provide the reliability and quality you need. Explore how our solutions can transform your workspace, offering a new level of support and efficiency."
            />
          </div>
        </div>

        <div className="basis-3/5 lg:max-w-5xl">
          <OfferingGallery {...OFFERINGS[2]} />
        </div>
      </section>

      {/* Offering 2 */}
      <section className="lg:mb-16 w-screen flex flex-col lg:flex-row-reverse">
        {/* description */}
        <div className="px-8 py-16 lg:min-h-[560px] flex items-center justify-start basis-2/5 lg:pl-16">
          <div className="lg:w-[450px]">
            <Fact
              bgNum="04"
              color="primary"
              title="Systems Furniture"
              description="Our workstations are the epitome of adaptability, consisting of modular elements like walls, work surfaces, overhead bins, drawers, and shelving. These components can be easily configured to cater to your specific needs, fostering a workspace that truly reflects your requirements. While we offer professional installation services for precision and efficiency, some of our cubicle systems are designed to empower users to make configuration adjustments without the need for specialized training. At 360Degrees, we empower you to design your workspace for maximum comfort, functionality, and productivity."
            />
          </div>
        </div>

        <div className="basis-3/5 lg:max-w-5xl">
          <OfferingGallery {...OFFERINGS[3]} />
        </div>
      </section>

      {/* Offering 5 */}
      <section className="lg:mb-16 w-screen flex flex-col lg:flex-row bg-neutral-100">
        {/* description */}
        <div className="px-8 py-16 lg:min-h-[560px] flex items-center justify-end basis-2/5">
          <div className="lg:w-[450px]">
            <Fact
              bgNum="05"
              color="primary"
              title="Specialized Features"
              description="At 360Degrees, we believe that workspaces should inspire creativity and innovation. That's why we specialize in creating one-of-a-kind, customized features that redefine the traditional office environment. From whimsical ball pits to exhilarating slides, and daring rock climbing walls to serene waterfalls, our team brings your wildest ideas to life. These unique customizations are more than just office decor; they're a testament to your company's commitment to fostering a vibrant, dynamic, and inspiring workspace. Elevate your workplace with these extraordinary, tailored features that make your space truly exceptional."
            />
          </div>
        </div>

        <div className="basis-3/5 lg:max-w-5xl">
          <OfferingGallery {...OFFERINGS[4]} />
        </div>
      </section>

      <Footer />
    </>
  );
}
