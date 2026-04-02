import {
  StoryViewer,
  StoryViewerProps,
} from "@components/StoryViewer/StoryViewer";
import { getProjectFromSlug } from "@app/projects/completed-projects.constant";
import Modal from "@components/Modal/Modal";

interface PhotoPageProps {
  params: { slug: string };
}

export default async function PhotoModal({ params: { slug } }: PhotoPageProps) {
  const projectDetails = getProjectFromSlug(slug) as StoryViewerProps;

  if (!projectDetails) {
    return null;
  }

  return (
    <Modal>
      <StoryViewer {...projectDetails} isFullScreen={true}></StoryViewer>
    </Modal>
  );
}
