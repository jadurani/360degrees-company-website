import { NavBar } from "@components/NavBar/NavBar";
import Image from "next/image";

interface PageHeaderProps {
  bgImageSrc: string;
  title: string;
}

export const PageHeader = ({ bgImageSrc, title }: PageHeaderProps) => {
  return (
    <div className="h-full w-screen relative">
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>
      <header className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 m-auto text-h1 font-header text-neutral-50 font-bold">
        {title}
      </header>

      <div className="relative w-full h-full">
        <div className="z-20 h-full w-full absolute bg-neutral-900/75"></div>
        <Image src={bgImageSrc} alt="header" fill className="z-10 object-cover" />
      </div>
    </div>
  );
};
