import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { ProjectThumbnail } from "@components/ProjectThumbnail/ProjectThumbnail";

const samp_project_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Projects() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader bgImageSrc="/images/about-us.png" title="Projects" />

      {/* some intro */}
      <section className="py-8 lg:py-14 px-8 w-screen container mx-auto max-w-6xl font-body text-neutral-800">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
          dui posuere, euismod lorem sed, pharetra felis. Nam eleifend vulputate
          felis et gravida. Morbi sed purus eget mauris congue suscipit id at
          lectus. Nulla facilisis tellus ex, ac feugiat est vulputate vel. Sed
          mollis felis est, eu laoreet enim pretium in. Pellentesque vulputate
          dignissim sollicitudin.
        </p>

      {/* <div className="flex flex-wrap gap-4 justify-center items-center mx-auto max-w-4xl py-6"> */}
      <div className="flex">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-4xl py-6">
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
          <div className="w-64 h-64">
            <ProjectThumbnail
              bgImageSrc="/images/hero-bg.png"
              title="Project Title"
              workType="type of work"
            />
          </div>
        </div>
      </div>
      </section>

      <Footer />
    </>
  );
}
