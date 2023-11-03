import Image from "next/image";
import mapPinIcon from "@assets/icons/map-pin.svg";
import { getImageWithBlurPlaceholder } from "@lib/generateBlurPlaceholder";

interface ProjectThumbnailProps {
  bgImageSrc: string;
  description?: string;
  title: string;
  location: string;
}

export const ProjectThumbnail = async ({
  bgImageSrc,
  title,
  location,
}: ProjectThumbnailProps) => {
  const blurDataURL = (await getImageWithBlurPlaceholder(bgImageSrc))
    .blurDataURL;

  return (
    <div className="w-full h-full relative group">
      <div className="relative w-full h-full overflow-hidden">
        <div className="z-20 h-full w-full absolute bg-neutral-900/50 group-hover:bg-neutral-900/25 transition-colors duration-500"></div>
        <Image
          src={bgImageSrc}
          alt="header"
          placeholder="blur"
          blurDataURL={blurDataURL}
          fill
          sizes="(min-width: 320px) 100vw"
          className="z-10 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute bottom-0 p-4 text-neutral-50 z-20">
        <div className="text-h4 font-header font-semibold break-words">
          {title}
        </div>
        <div className="uppercase font-body text-body2 flex gap-1 items-center">
          <Image src={mapPinIcon} alt="map icon" /> {location}
        </div>
      </div>
    </div>
  );
};
