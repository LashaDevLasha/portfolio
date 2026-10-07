import type { Metadata } from "next";
import { FeaturedProject } from "@/components/FeaturedProject";
import { MotionEffects } from "@/components/MotionEffects";
import { PageHeading } from "@/components/PageHeading";
import { ProjectSlider } from "@/components/ProjectSlider";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

const { work } = site.sections;

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: work.intro,
};

export default function ProjectsPage() {
  return (
    <main id="content" className="page page-projects">
      <MotionEffects />
      <div className="wrap">
        <PageHeading kicker={work.kicker} title={work.title} />
        <ProjectSlider titles={projects.map((project) => project.title)}>
          {projects.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </ProjectSlider>
      </div>
    </main>
  );
}
