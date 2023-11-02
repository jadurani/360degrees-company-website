import {
  StoryViewer,
  StoryViewerProps,
} from "@components/StoryViewer/StoryViewer";
import { getProjectFromSlug } from "../../../projects/completed-projects.constant";
import { getImageWithBlurPlaceholder } from "@lib/generateBlurPlaceholder";
import Modal from "@components/Modal/Modal";

interface PhotoPageProps {
  params: { slug: string };
}

export default async function PhotoModal({ params: { slug } }: PhotoPageProps) {
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
    <Modal>
      <StoryViewer {...projectDetails}></StoryViewer>
    </Modal>
  );
}
