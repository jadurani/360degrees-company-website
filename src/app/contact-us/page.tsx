import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import { PageHeader } from "@components/PageHeader/PageHeader";
import successCheckMark from "@assets/icons/icon-checkmark-success.svg";
import Image from "next/image";

export default function ContactUs() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader bgImageSrc="/images/page-headers/contact-us.png" title="Contact Us" />


      <div className="font-header font-bold text-neutral-800 flex flex-col items-center justify-center gap-1 text-center">
        <Image src={successCheckMark} alt="Success" />
        <div className="text-h4 my-1">Message sent!</div>
        <div className="text-h6">Our team will contact you as soon as possible.</div>
      </div>

      <Footer />
    </>
  );
}
