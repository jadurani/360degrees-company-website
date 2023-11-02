import Link from "next/link";
import {
  StoryViewer,
  StoryViewerProps,
} from "@components/StoryViewer/StoryViewer";
import { getProjectFromSlug } from "../completed-projects.constant";
import { getImageWithBlurPlaceholder } from "@lib/generateBlurPlaceholder";

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
    getImageWithBlurPlaceholder(`${photo.src}?w=1024&fit=clip&q=100`)
  );

  const imagesWithBlur = await Promise.all(blurImagePromiseArray);

  projectDetails.photos = projectDetails.photos.map((photo, idx) => ({
    ...imagesWithBlur[idx],
  }));

  return (
    <div className="fixed z-[100] h-screen w-screen">
      <div className="relative">
        {/* backdrop */}
        <div className="absolute top-0 h-screen w-screen bg-neutral-900 lg:bg-neutral-900/95"></div>
        {/* content */}
        <div className="flex items-center justify-center w-screen h-screen">
          <div className="w-screen h-screen lg:w-[768px] lg:h-[520px]">
            <StoryViewer {...projectDetails}></StoryViewer>
          </div>
        </div>
      </div>
    </div>
  );
}
