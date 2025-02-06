import Header from "../components/header";
import OptimizedImage from "../components/optimizedImage";
import ProjectsComponent from "../components/projects";

export default function Project() {
  return (
    <>
    <Header dark={true} />
    <div className="project">
      <div className="project__title">Supply of Integrated <span>Services</span></div>

      <OptimizedImage width={1130} height={600} className="project__image" src="/assets/maybe-hero.jpg" alt="" />

      <div className="project__subtitle">
      ASMAD Integrated Services Ltd is committed to delivering comprehensive and reliable supply chain solutions tailored to meet project needs across various industries. Our integrated service offerings include procurement, logistics, and general supplies, ensuring that clients receive high-quality materials and equipment on time and within budget. We maintain strong partnerships with reputable suppliers to guarantee product reliability and cost-effectiveness. Our team handles the entire supply process, from sourcing and transportation to storage and distribution, streamlining operations for efficiency. By leveraging our expertise, we help clients optimize their supply chains, minimize delays, and enhance overall project performance, ensuring seamless execution and successful outcomes

      </div>
    </div>

    <ProjectsComponent />
    </>
  );
}
