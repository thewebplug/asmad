import ProjectCard from "@/app/components/projectCard";
import projects from "../utils/projects";
import Header from "../components/header";

export default function Projects() {
  return (
    <>
    <Header dark={true} />
      <main className="projects">
        <div className="projects__title">OUR PROJECTS</div>

        <div className="projects__grid">
          {projects?.map((project) => <ProjectCard
                    title={project?.title}
                    subtitle={project?.subtitle}
                    date={project?.date}
                    image={project?.image}
                  />)}
          {projects?.map((project) => <ProjectCard
                    title={project?.title}
                    subtitle={project?.subtitle}
                    date={project?.date}
                    image={project?.image}
                  />)}
        </div>
      </main>
    </>
  );
}
