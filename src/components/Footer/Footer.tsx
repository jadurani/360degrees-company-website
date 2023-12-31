import Image from "next/image";
import { Logo } from "@components/Logo/Logo";
import { FontKumbhSans, FontMontserrat } from "@lib/fonts";

import atSignIcon from "@assets/icons/at-sign.svg";
import fbIcon from "@assets/icons/facebook.svg";
import igIcon from "@assets/icons/instagram.svg";
import mapIcon from "@assets/icons/map.svg";
import phoneIcon from "@assets/icons/phone.svg";
import ytIcon from "@assets/icons/youtube.svg";

export const Footer = () => (
  <footer className={`w-screen bg-neutral-900 text-neutral-50 ${FontKumbhSans.variable} ${FontMontserrat.variable}`}>
    <div className="container max-w-6xl mx-auto py-6 flex flex-col lg:flex-row justify-evenly items-center lg:items-start">
      <div className="self-center">
        <Logo topDown={true} />
      </div>

      {/* Bar */}
      <span className="hidden lg:block self-center">
        <svg
          width="2"
          height="145"
          viewBox="0 0 2 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="2.18557e-08" x2="0.999994" y2="145" stroke="white" />
        </svg>
      </span>

      {/* Contact Us */}
      <section className="mt-4 lg:mt-0">
        <h1 className="font-header font-bold uppercase text-center py-2">
          Contact Us
        </h1>
        <ul className="font-body">
          <li>
            <a
              className="flex gap-2 items-center text-body2 my-1.5"
              target="_blank"
              href="tel:+632 8556 6648">
              <Image src={phoneIcon} alt="tel" />
              <span>+632 8556 6648</span>
            </a>
          </li>
          <li>
            <a
              className="flex gap-2 items-center text-body2 my-1.5"
              target="_blank"
              href="mailto:info@360degrees.com.ph">
              <Image src={atSignIcon} alt="email" />
              <span>info@360degrees.com.ph</span>
            </a>
          </li>
          <li>
            <a
              className="flex gap-2 items-center text-body2 my-1.5"
              target="_blank"
              href="https://maps.app.goo.gl/nUs9KS5HeYJs2pRt8">
              <Image src={mapIcon} alt="map" />
              <span>
                Unit 507, Oppen Building, <br /> 349 Sen. Gil J. Puyat Avenue{" "}
                <br /> Salcedo Village, Makati City <br />
                Philippines
              </span>
            </a>
          </li>
        </ul>
      </section>

      {/* Follow Us */}
      <section className="mt-4 lg:mt-0">
        <h1 className="font-header font-bold uppercase text-center py-2">
          Follow Us
        </h1>
        <ul className="font-body">
          <li>
            <a
              className="flex gap-2 items-center text-body2 my-1.5"
              target="_blank"
              href="https://fb.com/360degreessyscorp">
              <Image src={fbIcon} alt="facebook" />
              <span>@360degreessyscorp</span>
            </a>
          </li>
          <li>
            <a
              className="flex gap-2 items-center text-body2 my-1.5"
              target="_blank"
              href="https://instagram.com/360degreessystemscorporation">
              <Image src={igIcon} alt="instagram" />
              <span>@360degreessystemscorporation</span>
            </a>
          </li>
          <li>
            <a
              className="flex gap-2 items-center text-body2 my-1.5"
              target="_blank"
              href="https://www.youtube.com/@360degreessytemcorporation9">
              <Image src={ytIcon} alt="youtube" />
              <span>@360degreessytemcorporation9</span>
            </a>
          </li>
        </ul>
      </section>
    </div>

    <hr className="border-t text-neutral-50 border-solid my-2" />

    <div className="container max-w-6xl mx-auto py-2 pb-4 flex flex-col lg:flex-row justify-evenly items-center text-body2 font-body">
      © 360degrees Systems Corporation 2023
    </div>
  </footer>
);
