import Header from "../components/header";
import OptimizedImage from "../components/optimizedImage";
import ProjectsComponent from "../components/projects";

export default function Project() {
  return (
    <>
    <Header dark={true} />
    <div className="project">
      <div className="project__title">Environmental <span>Consultancy</span></div>

      <OptimizedImage width={1130} height={600} className="project__image" src="/assets/maybe-hero.jpg" alt="" />

      <div className="project__subtitle">
      ASMAD Integrated Services Ltd offers expert environmental consultancy services designed to promote sustainable and eco-friendly project development. Our services include conducting environmental impact assessments (EIA), designing and implementing water treatment systems, developing waste containment facilities, and providing laboratory testing services. We work with clients to ensure compliance with environmental regulations, minimize ecological footprints, and implement best practices for environmental management. Our team of specialists leverages advanced technologies and industry expertise to provide innovative solutions that balance development goals with environmental responsibility. Whether it’s mitigating risks, enhancing sustainability, or ensuring regulatory adherence, we help businesses navigate the complexities of environmental compliance while delivering long-term value to communities and stakeholders
      </div>
    </div>

    <ProjectsComponent />
    </>
  );
}
