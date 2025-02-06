import Image from "next/image";
import ProjectCard from "./projectCard";
import Link from "next/link";
import projects from "../utils/projects";

export default function ProjectsComponent() {
  return (
    <>
      <div className="projects__title-group">
        <Link href="/projects" prefetch={true}>OUR PROJECTS</Link>

        <div className="projects__slide-buttons">
          <Image alt=""
            src="/assets/icons/left-arrow.svg"
            width={60}
            height={60}
          />
          <Image alt=""
            src="/assets/icons/right-arrow.svg"
            width={60}
            height={60}
          />
        </div>
      </div>
      {/* <div className="projects__actions">
          <div></div>
          <div>See all projects <span>{">"}</span></div>
        </div> */}

      <div className="projects__slide">
      {projects?.map((project, index) => <ProjectCard
          title={project?.title}
          subtitle={project?.subtitle}
          date={project?.date}
          image={project?.image}
          key={index}
        />)}
      </div>
    </>
  );
}
