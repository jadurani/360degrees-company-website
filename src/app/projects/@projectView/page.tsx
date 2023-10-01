"use client";
import {
  StoryViewer,
  StoryViewerProps,
} from "@components/StoryViewer/StoryViewer";
import { useSearchParams } from "next/navigation";
import { getProjectFromSlug } from "../completed-projects.constant";
import Link from "next/link";

// project: StoryViewerProps
export default function IndividualProjectView() {
  const searchParams = useSearchParams();
  const projectViewSlug = searchParams.get("projectView") ?? "";
  const projectDetails: StoryViewerProps | undefined =
    getProjectFromSlug(projectViewSlug);

  if (!projectDetails) {
    return null;
  }

  return (
    <div className="fixed z-[100] h-screen w-screen">
      <div className="relative">
        {/* backdrop */}
        <Link
          href={{ pathname: "projects", query: null }}
          className="absolute top-0 h-screen w-screen bg-neutral-900 lg:bg-neutral-900/90"></Link>
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
