"use client";
import {
  StoryViewerProps,
} from "@components/StoryViewer/StoryViewer";
import { useSearchParams } from "next/navigation";
import { getProjectFromSlug } from "./completed-projects.constant";

export default function Layout(props: {
  allProjects: React.ReactNode,
  projectView: React.ReactNode
}) {
  const searchParams = useSearchParams();
  const projectViewSlug = searchParams.get("projectView") ?? "";
  const projectDetails: StoryViewerProps | undefined =
    getProjectFromSlug(projectViewSlug);

  if (projectDetails) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      {props.projectView}
      {props.allProjects}
    </>
  )
}