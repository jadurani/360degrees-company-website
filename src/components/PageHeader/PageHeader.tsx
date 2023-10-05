import Image from "next/image";

interface PageHeaderProps {
  bgImageSrc: string;
  title: string;
}

export const PageHeader = ({ bgImageSrc, title }: PageHeaderProps) => {
  return (
    <div className="h-72 w-screen relative">
      <header className="absolute w-screen flex justify-center text-center top-1/2 -translate-y-1/3 z-30 m-auto text-h3 lg:text-h1 font-header text-neutral-50 font-bold">
        {title}
      </header>

      <div className="relative w-full h-full">
        <div className="z-20 h-full w-full absolute bg-neutral-900/75"></div>
        <Image src={bgImageSrc} alt="header" fill className="z-10 object-cover" priority />
      </div>
    </div>
  );
};
