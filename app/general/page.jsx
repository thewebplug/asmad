import Construction from "@/public/assets/icons/construction.svg";
import Furniture from "@/public/assets/icons/furniture.svg";
import Finishing from "@/public/assets/icons/finishing.svg";
import Image from "next/image";
import projects from "../utils/projects";
import ProjectCard from "../components/projectCard";
import Header from "../components/header";
import OptimizedImage from "../components/optimizedImage";
export default function GeneralConstruction() {
  return (
    <>
    <Header dark={true} />
      <main className="general">
        <div className="general__title">
          General <span>Construction</span>
        </div>
        <div className="general__subtitle">
          ASMAD INTEGRATED SERVICES LTD hasthree divisions to cover all aspects
          of construction:
        </div>

        <OptimizedImage width={1160} height={300} className="about__image" src="/assets/maybe-hero.jpg" alt="" />


        <div className="general__flex">
          <div className="general__flex__card">
            <Image alt=""
              src={Construction}
              width={40}
              className="general__flex__card__icon"
            />
            <div
              className="general__flex__card__title
                    "
            >
              Construction
            </div>
            <div
              className="general__flex__card__subtitle
                    "
            >
              Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem
              Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is
              simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply
              dummy
            </div>
          </div>
          <div className="general__flex__card">
            <Image alt=""
              src={Furniture}
              width={40}
              className="general__flex__card__icon"
            />
            <div
              className="general__flex__card__title
                    "
            >
              Finishing & Furnishing
            </div>
            <div
              className="general__flex__card__subtitle
                    "
            >
              Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem
              Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is
              simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply
              dummy
            </div>
          </div>
          <div className="general__flex__card">
            <Image alt=""
              src={Finishing}
              width={40}
              className="general__flex__card__icon"
            />
            <div
              className="general__flex__card__title
                    "
            >
              Maintenance
            </div>
            <div
              className="general__flex__card__subtitle
                    "
            >
              Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem
              Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is
              simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply
              dummy
            </div>
          </div>
        </div>
        <div className="general__subsubtitle">
          <span>Construction</span>
        </div>
        <div className="general__subtitle">
        ASMAD INTEGRATED SERVICES LTD, has a wide range
of construction options for any given application.
We cover all aspects of construction:
        </div>

        <div className="projects__grid">
          <ProjectCard
            title="Road Construction"
            subtitle="Construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783529/jamar-penny-ZgmGq_eFmUs-unsplash_sydjdj.jpg"
          />
          <ProjectCard
            title="Residential Accommodation"
            subtitle="Construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783531/alexey-komissarov-FpQlx_mPmRI-unsplash_s9lxlv.jpg"
          />
          <ProjectCard
            title="Office Buildings"
            subtitle="Construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783532/mister-paps-zt_59ZET0M4-unsplash_xnwsvz.jpg"
          />
          <ProjectCard
            title="Warehouses"
            subtitle="Construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783530/simone-hutsch-D7nSqgT-_GE-unsplash_abymbg.jpg"
          />
          <ProjectCard
            title="Primary Secondary & Tertiary Institution"
            subtitle="Construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783531/jannik-v6ttXWuuKdo-unsplash_vzruxx.jpg"
          />
          <ProjectCard
            title="Turnkey Projects"
            subtitle="Construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783530/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash_wz25tw.jpg"
          />
          </div>
<br />
<br />
<br />
<br />
<br />
<br />
        <div className="general__subtitle">
          We work in partnership with key subcontractors and suppliers that
          deliver very high-qualityproducts and services as, and when, we need
          it. This close working relationship with our supply chain gives our
          clients an advantage, as it enables ASMAD INTEGTATED SERVICES LTD to
          deliver the highest level of workmanship while maintaining the
          momentum of a project
        </div>

        <div className="general__subsubtitle">
          General <span>Building</span>
        </div>
        <div className="projects__grid">
          <ProjectCard
            title="Housing Unit"
            subtitle="general building"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783531/acton-crawford-OpHwu2s4wmg-unsplash_c7reif.jpg"
          />
          <ProjectCard
            title="Office Complex"
            subtitle="general building"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783529/office_building_kozato.jpg"
          />
          <ProjectCard
            title="Residential Estates"
            subtitle="general building"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783531/alexey-komissarov-FpQlx_mPmRI-unsplash_s9lxlv.jpg"
          />
          <ProjectCard
            title="Hospital (Communities and General)"
            subtitle="general building"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783532/national-cancer-institute-1c8sj2IO2I4-unsplash_kowq81.jpg"
          />
          <ProjectCard
            title="Schools"
            subtitle="general building"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783532/wander-fleur-1lmGTHdQdjM-unsplash_rkfo9m.jpg"
          />
          <ProjectCard
            title="Low rise and Medium Building"
            subtitle="general building"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783533/4-bedroom-bungalow-hp1_jc6qy8.jpg"
          />
          <ProjectCard
            title="Stadium"
            subtitle="general building"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783533/nazarizal-mohammad-abqlAKDYxxA-unsplash_p8fcly.jpg"
          />
          <ProjectCard
            title="Other Buildings"
            subtitle="general building"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783643/building_7_i3z084.jpg"
          />
        </div>
        <div className="general__subsubtitle">
          Civil <span>Engineering</span>
        </div>
        <div className="projects__grid">
          <ProjectCard
            title="Asphalting"
            subtitle="Civil engineering"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783532/asphalting_fuptwl.jpg"
          />
          <ProjectCard
            title="Construction/ Rehabilitation/ Routine Maintenance of Highways, Bridges"
            subtitle="Civil engineering"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783533/Patani-Bridge-v2_xxpeyk.jpg"
          />
          <ProjectCard
            title="Dams and Retaining Walls"
            subtitle="Civil engineering"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783532/Kainji-Dam_urpx3z.jpg"
          />
          <ProjectCard
            title="Borehole Drilling and Tank construction"
            subtitle="Civil engineering"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783532/borehole-drilling_xy7fur.jpg"
          />
          <ProjectCard
            title="Installation and Reticulation Lines "
            subtitle="Civil engineering"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783533/reticulation_vk9vk4.jpg"
          />
          <ProjectCard
            title="Bridges and Jetties"
            subtitle="Civil engineering"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783527/jetties-930x510-1-930x510_ohohxu.jpg"
          />
        </div>

        <div className="general__subsubtitle">
          Electrical <span>Installation</span>
        </div>

        <div className="projects__grid">
          <ProjectCard
            title="Solar Power Electrification"
            subtitle="Electrical installation"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783527/pexels-pixabay-356036_jqsqrk.jpg"
          />
          <ProjectCard
            title="General Maintenance"
            subtitle="Electrical installation"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783528/henry-co-3coKbdfnAFg-unsplash_opsfa0.jpg"
          />
          <ProjectCard
            title="Overhauling of generating sets"
            subtitle="Electrical installation"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783528/generating_sets_cc6c95.jpg"
          />
          <ProjectCard
            title="Calibration of both vertical and horizontal (Tanks) Oil and Gas"
            subtitle="Electrical installation"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783528/calibration1_eq0j2k.jpg"
          />
          <ProjectCard
            title="Measurement/Data Measurement Devices"
            subtitle="Electrical installation"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783532/measuring_device_hbehbe.webp"
          />
          <ProjectCard
            title="Sand blasting"
            subtitle="Electrical installation"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783529/landfill-engineerin-hero-mob-1536x1458_ki4dkw.jpg"
          />
          <ProjectCard
            title="Pressure testing (Integrity Test of Equipment and Devices)"
            subtitle="Electrical installation"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783531/piping_pressure_testing_1_myjqfw.jpg"
          />
        </div>
        <div className="general__subsubtitle">
          Environmental Construction and <span>Engineering Services</span>
        </div>

        <div className="projects__grid">
          <ProjectCard
            title="Water treatment design and engineering"
            subtitle="Environmental construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783528/ivan-bandura-Ac97OqAWDvg-unsplash_mqugs5.jpg"
          />
          <ProjectCard
            title="Process engineering service"
            subtitle="Environmental construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783529/morgan-von-gunten-G-YbAOA6qqQ-unsplash_anthaw.jpg"
          />
          <ProjectCard
            title="Design and construction of waste containment facilities"
            subtitle="Environmental construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783529/pexels-tobiandchris-23436744_rhiqhh.jpg"
          />
          <ProjectCard
            title="Land fill design and engineering"
            subtitle="Environmental construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783529/landfill-engineerin-hero-mob-1536x1458_ki4dkw.jpg"
          />
          <ProjectCard
            title="Environmental Impact Assessment (EOA"
            subtitle="Environmental construction"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783530/pexels-kelly-1179532-2533743_ptpigb.jpg"
          />
        </div>

        <div className="general__subsubtitle">
          General <span>Engineering Services</span>
        </div>
        <div className="projects__grid">
          <ProjectCard
            title="Supplies"
            subtitle="General engineering services"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783527/jeriden-villegas-niSnhfMjiMI-unsplash_e0cie1.jpg"
          />
          <ProjectCard
            title="Marketing"
            subtitle="General engineering services"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738786581/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash_1_rmizux.jpg"
          />
          <ProjectCard
            title="Distribution of goods"
            subtitle="General engineering services"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738786443/markus-spiske-RWTUrJf7I5w-unsplash_pqknue.jpg"
          />
          <ProjectCard
            title="Furniture consultants"
            subtitle="General engineering services"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738783528/greyson-joralemon-A1g0oeX29ec-unsplash_gis2mq.jpg"
          />
          <ProjectCard
            title="General Procurement"
            subtitle="General engineering services"
            date=""
            image="https://res.cloudinary.com/thewebplug/image/upload/v1738786442/pexels-tima-miroshnichenko-6169056_wnhtu6.jpg"
          />
          </div>
      </main>
    </>
  );
}
