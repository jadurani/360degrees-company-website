import Image from "next/image";
import Link from "next/link";

import offeringPreviewImg from "@assets/images/what-we-do-preview.jpg";
import teamPhoto1 from "@assets/images/about-us/team-photo-1.jpg";
import rightArrowIcon from "@assets/icons/arrow-right.svg";
import styles from "@app/Home.module.css";

import { Footer } from "@components/Footer/Footer";
import { ProjectThumbnail } from "@components/ProjectThumbnail/ProjectThumbnail";
import { TestimonialSlider } from "@components/TestimonialSlider/TestimonialSlider";
import { TESTIMONIALS } from "@components/TestimonialSlider/TestimonialSlider.stories";
import { NavBar } from "@components/NavBar/NavBar";
import { getBase64ImageUrl } from "@lib/generateBlurPlaceholder";

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

export default async function Home() {
  const pageHeaderImage = {
    src: "/images/page-headers/landing-page.jpg",
    blurDataURL: "",
  };
  pageHeaderImage.blurDataURL = await getBase64ImageUrl(pageHeaderImage.src);

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
                Building Trust, <br />
                One Project at a Time
              </h1>
              {/* <div className="font-body text-body1">
                some description here some description here some description
                here
              </div> */}
            </div>
            <Link
              href="/contact-us"
              className="font-body text-body1 uppercase py-4 px-8 border border-solid border-neutral-50 hover:bg-neutral-50/10">
              Contact us
            </Link>
          </div>
        </div>

        <div className="relative w-full h-full">
          <div className="z-20 h-full w-full absolute bg-neutral-900/75"></div>
          <Image
            src={pageHeaderImage.src}
            alt="360DEGREES SYSTEMS CORPORATION"
            placeholder="blur"
            blurDataURL={pageHeaderImage.blurDataURL}
            fill
            className="z-10 object-cover"
            priority
          />
        </div>
      </section>

      <section className="py-14 px-8 w-screen bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-header text-h3 text-center font-bold">
            About Us
          </h1>
          <p className="text-justify pt-8">
            Founded in 2010, 360DEGREES SYSTEMS CORPORATION is a Makati
            City-based company. Comprised of a team of experts, the company
            specializes in delivering comprehensive Turn-key Services to
            renowned Call Centers, BPOs, Shared Services, and Corporate Offices.
          </p>
          <Image src={teamPhoto1} alt="sample work" className="block my-8" />
          <div className="flex mt-8">
            <Link
              href="/what-we-do"
              className="text-primary-600 text-h5 font-semibold mx-auto font-body inline-flex items-center gap-2 group">
              read more <Image src={rightArrowIcon} alt="" className="group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* what we do */}
      <section className="py-14 px-8 w-screen">
        <h1 className="font-header text-h3 text-center font-bold">
          What We Do
        </h1>
        <div className="flex mt-4 gap-4 justify-center items-center mx-auto py-4">
          <Image
            src={offeringPreviewImg}
            alt="What we do"
            className="hidden lg:max-w-md lg:block"
          />

          <div className="px-4">
            <ul>
              <li className="flex my-2 gap-4 font-header font-bold text-h4">
                <span className="text-primary-600 basis-1/12 text-center">
                  01
                </span>
                <span className="text-neutral-800 basis-11/12">Acoustic</span>
              </li>
              <li className="flex my-2 gap-4 font-header font-bold text-h4">
                <span className="text-primary-600 basis-1/12 text-center">
                  02
                </span>
                <span className="text-neutral-800 basis-11/12">Carpets</span>
              </li>
              <li className="flex my-2 gap-4 font-header font-bold text-h4">
                <span className="text-primary-600 basis-1/12 text-center">
                  03
                </span>
                <span className="text-neutral-800 basis-11/12">
                  Accent & Seating Systems
                </span>
              </li>
              <li className="flex my-2 gap-4 font-header font-bold text-h4">
                <span className="text-primary-600 basis-1/12 text-center">
                  04
                </span>
                <span className="text-neutral-800 basis-11/12">
                  Systems Furniture
                </span>
              </li>
              <li className="flex my-2 gap-4 font-header font-bold text-h4">
                <span className="text-primary-600 basis-1/12 text-center">
                  05
                </span>
                <span className="text-neutral-800 basis-11/12">
                  Specialized Features
                </span>
              </li>
              <li className="flex my-2 gap-4 font-header font-bold text-h4">
                <span className="text-primary-600 basis-1/12 text-center">
                  06
                </span>
                <span className="text-neutral-800 basis-11/12">
                  Fit-Out Services
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex mt-8">
          <Link
            href="/what-we-do"
            className="text-primary-600 text-h5 font-semibold mx-auto font-body inline-flex items-center gap-2 group">
            know more <Image src={rightArrowIcon} alt="" className="group-hover:translate-x-1 transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="py-14 px-8 w-screen bg-neutral-50">
        <h1 className="font-header text-h3 text-center font-bold">Projects</h1>

        <div className="flex flex-wrap gap-4 justify-center items-center mx-auto max-w-6xl py-4">
          <Link
            href={`/projects/${COMPLETED_PROJECTS[0].slug}`}
            scroll={false}
            className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc={`${COMPLETED_PROJECTS[0].photos[0].src}?w=512&fit=clip`}
              title={COMPLETED_PROJECTS[0].name}
              location={COMPLETED_PROJECTS[0].location}
            />
          </Link>
          <Link
            href={`/projects/${COMPLETED_PROJECTS[1].slug}`}
            scroll={false}
            className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc={`${COMPLETED_PROJECTS[1].photos[0].src}?w=512&fit=clip`}
              title={COMPLETED_PROJECTS[1].name}
              location={COMPLETED_PROJECTS[1].location}
            />
          </Link>
          <Link
            href={`/projects/${COMPLETED_PROJECTS[2].slug}`}
            scroll={false}
            className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc={`${COMPLETED_PROJECTS[2].photos[0].src}?w=512&fit=clip`}
              title={COMPLETED_PROJECTS[2].name}
              location={COMPLETED_PROJECTS[2].location}
            />
          </Link>
        </div>

        <div className="flex mt-8">
          <Link
            href="/projects"
            className="text-primary-600 text-h5 font-semibold mx-auto font-body inline-flex items-center gap-2 group">
            see all <Image src={rightArrowIcon} alt="" className="group-hover:translate-x-1 transition-transform duration-500" />
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

          <div className="flex mt-8">
            <Link
              href="/testimonials"
              className="text-neutral-0 text-h5 font-semibold mx-auto font-body inline-flex items-center gap-2 group">
              <span>see more</span>
              <svg
                className="group-hover:translate-x-1 transition-transform duration-500"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928932C6.95262 0.538408 6.31946 0.538408 5.92893 0.928932C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM1 9H13V7H1V9Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </div>
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
              <Image
                src={client.url}
                alt={client.alt}
                fill
                sizes="800px"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Contact us */}
      <section className="py-24 px-8 w-screen flex flex-col items-center">
        <div className="text-h2 text-neutral-900 font-header font-bold">
          Want to have work done?
        </div>
        <Link
          href="/contact-us"
          className="mt-8 uppercase py-4 px-12 bg-primary-500 text-neutral-50 font-semibold text-h5 font-body">
          Contact us
        </Link>
      </section>
      <Footer />
    </>
  );
}
