"use client";

import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import { PageHeader } from "@components/PageHeader/PageHeader";
import successCheckMark from "@assets/icons/icon-checkmark-success.svg";
import Image from "next/image";
import ContactForm, {
  ContactFormData,
} from "@components/ContactForm/ContactForm";
import atSignIcon from "@assets/icons/at-sign.svg";
import mapIcon from "@assets/icons/map.svg";
import phoneIcon from "@assets/icons/phone.svg";

export default function ContactUs() {
  const submitted = false;
  const success = false;
  // const submitted = true;
  // const success = true;

  const handleSubmit = (formData: ContactFormData) => {
    console.log({ formData });
  };

  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader
        bgImageSrc="/images/page-headers/contact-us.png"
        title="Contact Us"
      />

      <div className="flex justify-center items-stretch bg-neutral-50 sm:py-8 md:py-16">
        {/* contact details */}
        <div className="lg:relative hidden lg:block lg:w-2/5">
        <div className="absolute w-full flex flex-col gap-4 items-center justify-center top-1/2 -translate-y-1/3 z-30 -mt-4 text-neutral-50">
            <div className="text-h3 lg:text-h4 font-header font-bold mx-auto">
              360DEGREES <br/>SYSTEMS <br/>CORPORATION
            </div>

            <ul className="font-body">
              <li>
                <a
                  className="flex gap-3 items-center text-body1 my-4"
                  target="_blank"
                  href="tel:+63 999 999 9999">
                  <Image src={phoneIcon} alt="tel" />
                  <span>+63 999 999 9999</span>
                </a>
              </li>
              <li>
                <a
                  className="flex gap-3 items-center text-body1 my-4"
                  target="_blank"
                  href="mailto:info@360degrees.com.ph">
                  <Image src={atSignIcon} alt="email" />
                  <span>info@360degrees.com.ph</span>
                </a>
              </li>
              <li>
                <a
                  className="flex gap-3 items-center text-body1 my-4"
                  target="_blank"
                  href="https://maps.app.goo.gl/nUs9KS5HeYJs2pRt8">
                  <Image src={mapIcon} alt="map" />
                  <span>
                    Unit 507, Oppen Building, <br /> 349 Sen. Gil J. Puyat
                    Avenue <br /> Salcedo Village, Makati City <br />
                    Philippines
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* background image */}
          <div className="relative w-full h-full">
            <div className="z-20 h-full w-full absolute bg-neutral-900/75"></div>
            <Image
              src="/images/contact-us-bg.png"
              alt="header"
              fill
              sizes="800px"
              className="z-10 object-cover"
            />
          </div>
        </div>

        {/* form and success  */}
        <div className="bg-neutral-0 px-8 md:w-[450px] lg:w-2/5 py-6">
          {!submitted && <ContactForm onSubmit={handleSubmit} />}

          {submitted && success && (
            <div className="font-header font-bold text-neutral-800 flex flex-col items-center justify-center gap-1 text-center">
              <Image src={successCheckMark} alt="Success" />
              <div className="text-h4 my-1">Message sent!</div>
              <div className="text-h6">
                Our team will contact you as soon as possible.
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
