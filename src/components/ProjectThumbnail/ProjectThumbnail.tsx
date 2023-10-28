import Image from "next/image";
import mapPinIcon from "@assets/icons/map-pin.svg";

interface ProjectThumbnailProps {
  bgImageSrc: string;
  bgImageDataURL?: string | null;
  description?: string;
  title: string;
  location: string;
}

const getImageComponent = (props: ProjectThumbnailProps) => {
  if (props.bgImageDataURL) {
    return (
      <Image
        src={`${props.bgImageSrc}?auto=compress`}
        placeholder="blur"
        blurDataURL={props.bgImageDataURL}
        alt="header"
        fill
        className="z-10 object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
    );
  }

  return (
    <Image
      src={props.bgImageSrc}
      alt="header"
      fill
      className="z-10 object-cover object-center group-hover:scale-105 transition-transform duration-500"
    />
  );
};

export const ProjectThumbnail = (props: ProjectThumbnailProps) => {
  return (
    <div className="w-full h-full relative group">
      <div className="relative w-full h-full overflow-hidden">
        <div className="z-20 h-full w-full absolute bg-neutral-900/50 group-hover:bg-neutral-900/25 transition-colors duration-500"></div>
        {getImageComponent(props)}
      </div>
      <div className="absolute bottom-0 p-4 text-neutral-50 z-20">
        <div className="text-h4 font-header font-semibold break-words">
          {props.title}
        </div>
        <div className="uppercase font-body text-body2 flex gap-1 items-center">
          <Image src={mapPinIcon} alt="map icon" /> {props.location}
        </div>
      </div>
    </div>
  );
};
