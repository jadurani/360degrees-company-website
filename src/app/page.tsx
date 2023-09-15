import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      {/* hero section */}
      <div className="h-screen w-screen relative">
        <div
          className="absolute z-30 w-full top-1/2 lg:top-2/3 lg:-translate-y-1/3">
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
            <button className="uppercase py-2 px-4 border border-solid border-neutral-50 hover:bg-neutral-50/10">Contact us</button>
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
      </div>


      <Footer />
    </>
  );
}
