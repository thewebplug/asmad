import Header from "../components/header";
import ProjectsComponent from "../components/projects";

export default function Project() {
  return (
    <>
    <Header dark={true} />
    <div className="project">
    <div className="project__title">Engineering Construction <span>& Design</span></div>

      <img className="project__image" src="/assets/maybe-hero.jpg" alt="" />

      <div className="project__subtitle">
      At ASMAD Integrated Services Ltd, we specialize in engineering, construction, and design services that cater to a wide range of industries. Our expertise covers the planning, design, and execution of infrastructure projects, including roads, highways, bridges, residential and commercial buildings, marine structures, and turnkey projects. We incorporate innovative engineering techniques and the latest technology to enhance the efficiency and durability of our constructions. Our experienced team ensures compliance with industry standards and regulatory requirements, delivering safe, sustainable, and high-quality structures. From concept to completion, we work closely with clients to provide custom solutions that align with their unique project goals, ensuring long-term success and functionality​


      </div>
    </div>

    <ProjectsComponent />
    </>
  );
}
