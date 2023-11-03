import Link from "next/link";
import rightArrowIcon from "@assets/icons/arrow-right.svg";
import {
  StoryViewer,
  StoryViewerProps,
} from "@components/StoryViewer/StoryViewer";
import { getProjectFromSlug } from "../completed-projects.constant";
import { getImageWithBlurPlaceholder } from "@lib/generateBlurPlaceholder";
import { NavBar } from "@components/NavBar/NavBar";
import { PageHeader } from "@components/PageHeader/PageHeader";
import Image from "next/image";
import { Footer } from "@components/Footer/Footer";

interface PhotoPageProps {
  params: { slug: string };
}

export default async function PhotoPage({ params: { slug } }: PhotoPageProps) {
  let projectDetails: StoryViewerProps | undefined = getProjectFromSlug(
    slug
  ) as StoryViewerProps;

  if (!projectDetails) {
    return null;
  }

  const blurImagePromiseArray = projectDetails.photos.map((photo) =>
    getImageWithBlurPlaceholder(`${photo.src}?w=2048&fit=clip&q=100`)
  );

  const imagesWithBlur = await Promise.all(blurImagePromiseArray);

  projectDetails.photos = projectDetails.photos.map((photo, idx) => ({
    ...imagesWithBlur[idx],
  }));

  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader
        bgImageSrc={projectDetails.photos[0].src}
        title={projectDetails.name}
        />

      {/* content */}
      <div className="flex items-center justify-center w-screen my-8 lg:my-16">
        <div
          className="
          w-[320px] h-[250px]
          sm:w-[640px] sm:h-[480px]
          md:w-[768px] md:h-[520px]
          ">
          <StoryViewer {...projectDetails}></StoryViewer>
        </div>
      </div>

      <div className="flex mb-8 lg:mb-16">
        <Link
          href="/projects"
          className="text-primary-600 text-h5 font-semibold mx-auto font-body inline-flex items-center gap-2 group">
          <Image
            src={rightArrowIcon}
            alt=""
            className="group-hover:-translate-x-1 rotate-180 transition-transform duration-500"
          />
          <span>see all projects</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}
