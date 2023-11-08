import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import { PageHeader } from "@components/PageHeader/PageHeader";
import Image from "next/image";
import ContactForm from "@components/ContactForm/ContactForm";
import atSignIcon from "@assets/icons/at-sign.svg";
import mapIcon from "@assets/icons/map.svg";
import phoneIcon from "@assets/icons/phone.svg";
import { getImageWithBlurPlaceholder } from "@lib/generateBlurPlaceholder";

export default async function ContactUs() {
  const contactDetailsBGPhoto = await getImageWithBlurPlaceholder('/images/contact-us-bg.jpg')

  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader
        bgImageSrc="/images/page-headers/contact-us.jpg"
        title="Contact Us"
      />

      <div className="flex justify-center items-stretch md:bg-neutral-50 sm:py-8 md:py-16">
        {/* contact details */}
        <div className="lg:relative hidden lg:block lg:w-2/5">
          <div className="absolute w-full flex flex-col gap-4 items-center justify-center top-1/2 -translate-y-1/3 z-30 -mt-4 text-neutral-50">
            <div className="text-h3 lg:text-h4 font-header font-bold mx-auto">
              360DEGREES <br />
              SYSTEMS <br />
              CORPORATION
            </div>

            <ul className="font-body">
              <li>
                <a
                  className="flex gap-3 items-center text-body1 my-4"
                  target="_blank"
                  href="tel:+632 8556 6648">
                  <Image src={phoneIcon} alt="tel" />
                  <span>+632 8556 6648</span>
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
              {...contactDetailsBGPhoto}
              placeholder="blur"
              alt=""
              fill
              sizes="800px"
              className="z-10 object-cover"
            />
          </div>
        </div>


        <ContactForm />
      </div>

      <Footer />
    </>
  );
}
