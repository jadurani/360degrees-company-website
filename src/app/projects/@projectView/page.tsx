"use client";

import {
  StoryViewer,
  StoryViewerProps,
} from "@components/StoryViewer/StoryViewer";
import { useRouter, useSearchParams } from "next/navigation";
import { getProjectFromSlug } from "../completed-projects.constant";
import Link from "next/link";
import { useEffect } from "react";

export default function IndividualProjectView() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const projectViewSlug = searchParams.get("projectView") ?? "";
  const projectDetails: StoryViewerProps | undefined =
    getProjectFromSlug(projectViewSlug);


  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && projectDetails) {
        router.replace('/projects')
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [router, projectDetails]);

  if (!projectDetails) {
    return null;
  }

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
