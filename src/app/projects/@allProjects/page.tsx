import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { ProjectThumbnail } from "@components/ProjectThumbnail/ProjectThumbnail";
import { COMPLETED_PROJECTS } from "../completed-projects.constant";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader bgImageSrc="/images/about-us.png" title="Completed Projects" />

      {/* some intro */}
      <section className="py-8 lg:py-14 px-8 w-screen container mx-auto max-w-6xl font-body text-neutral-800">
        <div className="flex">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-4xl py-6">
            {COMPLETED_PROJECTS.map((project, index) => (
              <Link
                key={`project-${index}`}
                className="w-64 h-64 text-left"
                href={`?projectView=${project.slug}`}
                scroll={false}>
                <ProjectThumbnail
                  bgImageSrc={project.photoUrls[0]}
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
