import Header from "../components/header";
import OptimizedImage from "../components/optimizedImage";
import ProjectsComponent from "../components/projects";

export default function Project() {
  return (
    <>
    <Header dark={true} />
    <div className="project">
      <div className="project__title">Project <span>Management</span></div>

      <OptimizedImage width={1130} height={600} className="project__image" src="/assets/maybe-hero.jpg" alt="" />

      <div className="project__subtitle">
      ASMAD Integrated Services Ltd provides end-to-end project management solutions that ensure efficiency, quality, and timely execution. Our approach includes detailed scheduling and resource planning to meet client objectives, clear and consistent communication with all stakeholders, and close supervision to guarantee high-quality outcomes. Our team tracks project progress meticulously, identifying and addressing deviations to maintain efficiency and budget adherence. We emphasize strategic coordination, integrating specialist trades for industrial and commercial projects. Our ultimate goal is to provide clients with a seamless, stress-free project execution experience, ensuring every phase is completed to the highest standard while meeting deadlines and exceeding expectations

      </div>
    </div>

    <ProjectsComponent />
    </>
  );
}
