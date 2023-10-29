import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { ProjectThumbnail } from "@components/ProjectThumbnail/ProjectThumbnail";
import { COMPLETED_PROJECTS } from "../completed-projects.constant";
import Link from "next/link";
import { PhotoProps } from "@components/StoryViewer/StoryViewer";
import getBase64ImageUrl from "@lib/generateBlurPlaceholder";

const getProjectPhotos = (projectPhotos: PhotoProps[]) =>
  projectPhotos.map((photo) => getBase64ImageUrl(photo));

async function getProjects() {
  const blurImagePromiseArray = COMPLETED_PROJECTS.map((project) =>
    getProjectPhotos([project.photos[0]])
  );

  const imagesWithBlurDataUrlsArray = await Promise.all(
    blurImagePromiseArray.map((innerPromiseArray) =>
      Promise.all(innerPromiseArray)
    )
  );

  const updatedProjects = COMPLETED_PROJECTS.map((project, idx) => {
    return {
      ...project,
      photos: project.photos.map((photo, idx2) => ({
        src: photo.src,
        blurDataUrl: imagesWithBlurDataUrlsArray[idx][idx2],
      })),
    };
  });

  return updatedProjects;
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader
        bgImageSrc="/images/page-headers/projects.png"
        title="Completed Projects"
      />

      {/* some intro */}
      <section className="py-8 lg:py-14 px-8 w-screen container mx-auto max-w-6xl font-body text-neutral-800">
        <div className="flex">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-4xl py-6">
            {projects.map((project, index) => (
              <Link
                key={`project-${index}`}
                className="w-64 h-64 text-left"
                href={`?projectView=${project.slug}`}
                scroll={false}>
                <ProjectThumbnail
                  bgImageSrc={`${project.photos[0].src}?w=512&fit=clip`}
                  bgImageDataURL={project.photos[0].blurDataUrl}
                  title={project.name}
                  location={project.location}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
