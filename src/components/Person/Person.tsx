import Image from "next/image";

import globeIcon from "@assets/icons/globe.svg";
import igIcon from "@assets/icons/instagram.svg";
import liIcon from "@assets/icons/linkedin.svg";
import mailIcon from "@assets/icons/mail.svg";
import { getImageWithBlurPlaceholder } from "@lib/generateBlurPlaceholder";

interface PersonProps {
  name: string;
  title: string;
  description?: string;
  photoSrc: string;
  website?: string;
  instagram?: string;
  email?: string;
  linkedin?: string;
}

export const Person = async (props: PersonProps) => {
  const blurDataURL = (await getImageWithBlurPlaceholder(props.photoSrc))
    .blurDataURL;

  return (
    <div className="flex flex-col min-h-[570px] max-h-[670px] max-w-[320px]">
      <div className="flex-grow relative">
        <Image
          src={props.photoSrc}
          alt={props.name}
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover"
          sizes="(max-width: 640px) 20vw, (max-width: 1024px) 50vw, 33.3vw"
          fill
        />
      </div>

      <div className="bg-accent-500 text-neutral-50 p-4 min-h-[140px] flex flex-col">
        <div>
          <div className="text-h4 font-header font-semibold">{props.name}</div>
          <div className="text-h6 font-body font-semibold">{props.title}</div>
          {props.description && (
            <p className="py-2 font-body text-body1 font-light">
              {props.description}
            </p>
          )}
        </div>

        <div className="mt-auto flex gap-4 items-center">
          {props.website && (
            <a target="_blank" href={props.website}>
              <Image src={globeIcon} alt="website" />
            </a>
          )}

          {props.instagram && (
            <a target="_blank" href={props.instagram} className="-mb-1">
              <Image src={igIcon} alt="instagram" width={24} />
            </a>
          )}

          {props.linkedin && (
            <a target="_blank" href={props.linkedin}>
              <Image src={liIcon} alt="linkedin" />
            </a>
          )}

          {props.email && (
            <a target="_blank" href={`mailto:${props.email}`} className="-mb-1">
              <Image src={mailIcon} alt="email" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
