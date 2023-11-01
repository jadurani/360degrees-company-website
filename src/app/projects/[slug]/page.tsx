import Link from 'next/link';
import { StoryViewer, StoryViewerProps } from '@components/StoryViewer/StoryViewer';
import { getProjectFromSlug } from "../completed-projects.constant";

export default function PhotoPage({ params: { slug } }: { params: { slug: string } }) {
  // return <div>{slug}</div>;
  const projectDetails: StoryViewerProps | undefined =
    getProjectFromSlug(slug) as StoryViewerProps;

    return (
      <div className="fixed z-[100] h-screen w-screen">
        <div className="relative">
          {/* backdrop */}
          <Link
            href={{ pathname: "projects", query: null }}
            className="absolute top-0 h-screen w-screen bg-neutral-900 lg:bg-neutral-900/95"></Link>
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
