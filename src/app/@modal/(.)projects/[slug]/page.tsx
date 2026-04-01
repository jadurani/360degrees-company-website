import {
  StoryViewer,
  StoryViewerProps,
} from "@components/StoryViewer/StoryViewer";
import { COMPLETED_PROJECTS, getProjectFromSlug } from "@app/projects/completed-projects.constant";
import { getImageWithBlurPlaceholder } from "@lib/generateBlurPlaceholder";
import Modal from "@components/Modal/Modal";

interface PhotoPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return COMPLETED_PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function PhotoModal({ params: { slug } }: PhotoPageProps) {
  let projectDetails: StoryViewerProps | undefined = getProjectFromSlug(
    slug
  ) as StoryViewerProps;

  if (!projectDetails) {
    return null;
  }

  const imagesWithBlur = await Promise.all(
    projectDetails.photos.map((photo) =>
      getImageWithBlurPlaceholder(`${photo.src}?w=2048&fit=clip&q=95`)
    )
  );

  projectDetails = {
    ...projectDetails,
    photos: imagesWithBlur,
  };

  return (
    <Modal>
      <StoryViewer {...projectDetails} isFullScreen={true}></StoryViewer>
    </Modal>
  );
}
