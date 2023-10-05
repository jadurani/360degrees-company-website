import { Footer } from "@components/Footer/Footer";
import Image from "next/image";
import passionImg from "@assets/images/unsplash_TamMbr4okv4.png";
import { ProjectThumbnail } from "@components/ProjectThumbnail/ProjectThumbnail";
import Link from "next/link";
import styles from "@app/Home.module.css";
import { TestimonialSlider } from "@components/TestimonialSlider/TestimonialSlider";
import { TESTIMONIALS } from "@components/TestimonialSlider/TestimonialSlider.stories";
import { NavBar } from "@components/NavBar/NavBar";
import { COMPLETED_PROJECTS } from "./projects/completed-projects.constant";

const CLIENT_LOGOS = [
  {
    url: "/images/clients/client-curo-teknika-inc.png",
    alt: "Curo Teknika, Inc.",
  },
  {
    url: "/images/clients/client-data-analytics-ventures.png",
    alt: "Data Analytics Ventures, Inc. (DAVI)",
  },
  {
    url: "/images/clients/client-doa.png",
    alt: "Department of Agriculture",
  },
  {
    url: "/images/clients/client-enshored.png",
    alt: "Enshored",
  },
  {
    url: "/images/clients/client-esco.png",
    alt: "ESCO Lifesciences Group | Improving Lives Through Science",
  },
  {
    url: "/images/clients/client-esl.png",
    alt: "Emphasis Services Limited",
  },
  {
    url: "/images/clients/client-firstgas.png",
    alt: "First Gas",
  },
  {
    url: "/images/clients/client-jg-summit-holdings.png",
    alt: "JG Summit Holdings Inc.",
  },
  {
    url: "/images/clients/client-kmc-solutions.png",
    alt: "KMC Solutions Co. Ltd",
  },
  {
    url: "/images/clients/client-mmc.png",
    alt: "Makati Medical Center",
  },
  {
    url: "/images/clients/client-panasiatic-solutions.png",
    alt: "Panasiatic Call Centers Inc.",
  },
  {
    url: "/images/clients/client-realpage.png",
    alt: "RealPage | Property Management Software",
  },
  {
    url: "/images/clients/client-remitly.png",
    alt: "Remitly",
  },
  {
    url: "/images/clients/client-support-ninja.png",
    alt: "SupportNinja",
  },
  {
    url: "/images/clients/client-synergy-group.png",
    alt: "Synergy Group",
  },
  {
    url: "/images/clients/client-taskus.png",
    alt: "TaskUs",
  },
  {
    url: "/images/clients/client-towers-watson.png",
    alt: "Towers Watson",
  },
  {
    url: "/images/clients/client-transcom.png",
    alt: "Transcom",
  },
  {
    url: "/images/clients/client-universal-robina.png",
    alt: "Universal Robina",
  },
];

export default function Home() {
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
              <h1 className="text-h2 font-bold font-header leading-tight pb-4">
              Building Trust, <br />One Project at a Time
              </h1>
              {/* <div className="font-body text-body1">
                some description here some description here some description
                here
              </div> */}
            </div>
            <Link href="/contact-us" className="font-body text-body1 uppercase py-4 px-8 border border-solid border-neutral-50 hover:bg-neutral-50/10">
              Contact us
            </Link>
          </div>
        </div>

        <div className="relative w-full h-full">
          <div className="z-20 h-full w-full absolute bg-neutral-900/75"></div>
          <Image
            src="/images/page-headers/landing-page.png"
            alt="360DEGREES SYSTEMS CORPORATION"
            fill
            className="z-10 object-cover"
            priority
          />
        </div>
      </section>

      {/* clients */}
      <section className="py-14 px-8 w-screen bg-neutral-50">
        <h1 className="font-header text-h3 text-center font-bold">
          Our Clients
        </h1>
        <ul className="flex flex-wrap gap-2 md:gap-4 items-center justify-center mx-auto mt-8 max-w-6xl">
          {CLIENT_LOGOS.map((client, idx) => (
            <li
              key={idx}
              className="p-2 h-[100px] w-[75px] md:w-[150px] relative">
              <Image src={client.url} alt={client.alt} fill sizes="800px" className="object-contain" />
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
            href="/what-we-do"
            className="text-primary-600 text-h5 font-semibold mx-auto font-body">
            read more
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="py-14 px-8 w-screen bg-neutral-50">
        <h1 className="font-header text-h3 text-center font-bold">Projects</h1>

        <div className="flex flex-wrap gap-4 justify-center items-center mx-auto max-w-6xl py-4">
          <Link href={{ pathname: 'projects', query: { projectView: COMPLETED_PROJECTS[0].slug } }} className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc={COMPLETED_PROJECTS[0].photoUrls[0]}
              title={COMPLETED_PROJECTS[0].name}
              location={COMPLETED_PROJECTS[0].location}
            />
          </Link>
          <Link href={{ pathname: 'projects', query: { projectView: COMPLETED_PROJECTS[1].slug } }} className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc={COMPLETED_PROJECTS[1].photoUrls[0]}
              title={COMPLETED_PROJECTS[1].name}
              location={COMPLETED_PROJECTS[1].location}
            />
          </Link>
          <Link href={{ pathname: 'projects', query: { projectView: COMPLETED_PROJECTS[2].slug } }} className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc={COMPLETED_PROJECTS[2].photoUrls[0]}
              title={COMPLETED_PROJECTS[2].name}
              location={COMPLETED_PROJECTS[2].location}
            />
          </Link>
        </div>

        <div className="flex mt-8">
          <Link
            href="/projects"
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
            <TestimonialSlider testiList={TESTIMONIALS} />
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
        <Link href="/contact-us" className="mt-8 uppercase py-4 px-12 bg-primary-500 text-neutral-50 font-semibold text-h5 font-body">
          Contact us
        </Link>
      </section>
      <Footer />
    </>
  );
}
