import Header from "../components/header";
import ProjectsComponent from "../components/projects";

export default function Project() {
  return (
    <>
    <Header dark={true} />
    <div className="project">
      <div className="project__title"> <span>Supervision</span></div>

      <img className="project__image" src="/assets/maybe-hero.jpg" alt="" />

      <div className="project__subtitle">
      With a strong commitment to excellence, ASMAD Integrated Services Ltd provides top-tier supervision services to ensure that every project meets the highest standards of quality, safety, and compliance. Our experienced professionals oversee every aspect of construction and engineering projects, from site inspections and contractor management to quality control and risk assessment. We work closely with all stakeholders, ensuring that materials, workmanship, and project execution align with industry best practices and client specifications. Our supervision services help to prevent costly mistakes, maintain adherence to timelines, and enhance overall project efficiency. By prioritizing safety and precision, we provide our clients with the confidence that their projects will be delivered successfully, meeting all necessary requirements and exceeding expectations​

      </div>
    </div>

    <ProjectsComponent />
    </>
  );
}
