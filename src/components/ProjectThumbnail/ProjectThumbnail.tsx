import Image from "next/image";

interface ProjectThumbnailProps {
  bgImageSrc: string;
  description?: string;
  title: string;
  workType: string;
}

export const ProjectThumbnail = ({ bgImageSrc, title, workType }: ProjectThumbnailProps) => {
  return (
    <div className="w-full h-full relative">
      <div className="relative w-full h-full">
        <div className="z-20 h-full w-full absolute bg-neutral-900/75"></div>
        <Image src={bgImageSrc} alt="header" fill className="z-10 object-cover" />
      </div>
      <div className="absolute bottom-0 p-4 text-neutral-50 z-50">
        <div className="uppercase font-body font-bold">{workType}</div>
        <div className="text-h4 font-header font-bold break-words">{title}</div>
      </div>
    </div>
  );
};
