import Image from "next/image";
import ProjectCard from "./projectCard";
import Link from "next/link";

export default function ProjectsComponent() {
  return (
    <>
      <div className="projects__title-group">
        <Link href="/projects" prefetch={true}>OUR PROJECTS</Link>

        <div className="projects__slide-buttons">
          <Image
            src="/assets/icons/left-arrow.svg"
            width={60}
            height={60}
            alt=""
          />
          <Image
            src="/assets/icons/right-arrow.svg"
            width={60}
            height={60}
            alt=""
          />
        </div>
      </div>
      {/* <div className="projects__actions">
          <div></div>
          <div>See all projects <span>{">"}</span></div>
        </div> */}

      <div className="projects__slide">
        <ProjectCard
          title="Lorem Ipsum is simply dummy text"
          subtitle="Oil and gas"
          date="2022-2024"
          image="/assets/building 1.jpg"
        />
        <ProjectCard
          title="Guzape filling station"
          subtitle="Oil and gas"
          date="2022-2024"
          image="/assets/building 2.jpg"
        />
        <ProjectCard
          title="Lorem Ipsum is simply dummy text"
          subtitle="Oil and gas"
          date="2022-2024"
          image="/assets/building 7.jpg"
        />
        <ProjectCard
          title="Lorem Ipsum is simply dummy text"
          subtitle="Oil and gas"
          date="2022-2024"
          image="/assets/building 4.jpg"
        />
        <ProjectCard
          title="Lorem Ipsum is simply dummy text"
          subtitle="Oil and gas"
          date="2022-2024"
          image="/assets/building 8.jpg"
        />
        <ProjectCard
          title="Lorem Ipsum is simply dummy text"
          subtitle="Oil and gas"
          date="2022-2024"
          image="/assets/building 3.jpg"
        />
        <ProjectCard
          title="Lorem Ipsum is simply dummy text"
          subtitle="Oil and gas"
          date="2022-2024"
          image="/assets/building 5.jpg"
        />
      </div>
    </>
  );
}
