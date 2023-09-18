import { Footer } from "@components/Footer/Footer";
import Image from "next/image";
import passionImg from "@assets/images/unsplash_TamMbr4okv4.png";
import { ProjectThumbnail } from "@components/ProjectThumbnail/ProjectThumbnail";
import Link from "next/link";
import styles from "@app/Home.module.css";
import { TestimonialSlider } from "@components/TestimonialSlider/TestimonialSlider";
import { SAMPLE_TESTIMONIAL_LIST } from "@components/TestimonialSlider/TestimonialSlider.stories";
import { NavBar } from "@components/NavBar/NavBar";

export default function Home() {
  const samp_client_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      {/* hero section */}
      <section className="h-screen w-screen relative">
        <div className="absolute z-30 w-full top-1/2 lg:top-2/3 lg:-translate-y-1/3">
          <div className="mx-auto max-w-6xl text-neutral-50 px-4 lg:px-8 text-center lg:text-left">
            <div className="my-4">
              <div className="text-h2 font-bold font-header">
                Company Tagline Here
              </div>
              <div className="font-body text-body1">
                some description here some description here some description
                here
              </div>
            </div>
            <button className="uppercase py-2 px-4 border border-solid border-neutral-50 hover:bg-neutral-50/10">
              Contact us
            </button>
          </div>
        </div>

        <div className="relative w-full h-full">
          <div className="z-20 h-full w-full absolute bg-neutral-900/75"></div>
          <Image
            src="/images/hero-bg.png"
            alt="sample work"
            fill
            className="z-10 object-cover"
          />
        </div>
      </section>

      {/* clients */}
      <section className="py-14 px-8 w-screen bg-neutral-50">
        <h1 className="font-header text-h3 text-center font-bold">
          Our Clients
        </h1>
        <ul className="flex flex-wrap gap-4 items-center justify-center px-8 mx-auto my-4 max-w-5xl">
          {samp_client_arr.map((i, idx) => (
            <li
              key={idx}
              className="font-header text-h4 font-bold p-4 bg-neutral-400 inline">
              client {i}
            </li>
          ))}
        </ul>
      </section>

      {/* what we do */}
      <section className="py-14 px-8 w-screen">
        <h1 className="font-header text-h3 text-center font-bold">
          What We Do
        </h1>
        <div className="flex gap-4 justify-center items-center mx-auto max-w-6xl py-4">
          <Image
            src={passionImg}
            alt="sample work"
            className="hidden lg:max-w-md lg:block"
          />

          <div className="px-4 lg:max-w-md">
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eget augue at lorem cursus ultrices a finibus enim. Fusce blandit
              sem odio, ut maximus turpis tempor sed. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <p className="py-4">
              Fusce eget augue at lorem cursus ultrices a finibus enim. Fusce
              blandit sem odio, ut maximus turpis tempor sed. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="flex mt-8">
          <Link
            href="/"
            className="text-primary-600 text-h5 font-semibold mx-auto font-body">
            read more
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="py-14 px-8 w-screen bg-neutral-50">
        <h1 className="font-header text-h3 text-center font-bold">Projects</h1>

        <div className="flex flex-wrap gap-4 justify-center items-center mx-auto max-w-6xl py-4">
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
        </div>

        <div className="flex mt-8">
          <Link
            href="/"
            className="text-primary-600 text-h5 font-semibold mx-auto font-body">
            see all
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className={`py-14 px-8 w-screen relative ${styles.testiContainerBg}`}>
        <div className="mx-auto mb-8">
          <div className="my-4 font-header text-h3 text-center font-bold text-neutral-100">
            Testimonials
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <TestimonialSlider testiList={SAMPLE_TESTIMONIAL_LIST} />
          </div>
        </div>
      </section>

      {/* Contact us */}
      <section className="py-24 px-8 w-screen flex flex-col items-center">
        <div className="text-h2 text-neutral-900 font-header font-bold">
          Want to have work done?
        </div>
        <div className="text-h6 text-neutral-800 font-header font-bold">
          Some more text here enticing the user to click the button below
        </div>
        <button className="mt-8 uppercase py-4 px-12 bg-primary-500 text-neutral-50 font-semibold text-h5 font-body">
          Contact us
        </button>
      </section>
      <Footer />
    </>
  );
}
