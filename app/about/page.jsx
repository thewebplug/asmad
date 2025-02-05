import Image from "next/image";
import Header from "../components/header";
import ProjectsComponent from "../components/projects";
import IntegrityBlack from "@/public/assets/icons/integrityBlack.svg";
import CoreValues from "../components/coreValues";
import CorporatePhilosophy from "../components/corporatePhilosophy";

export default function Project() {
  return (
    <>
      <Header dark={true} />
      <div className="about">
        <div className="about__title">
          About <span>ASMAD Integrated</span> Services Limited
        </div>
        <div className="about__buttons">
          <button>
            {" "}
            <Image alt="" width={35} src={IntegrityBlack} />
            Integrity
          </button>
          <button>
            {" "}
            <Image alt="" width={35} src={IntegrityBlack} />
            Confidence
          </button>
          <button>
            {" "}
            <Image alt="" width={35} src={IntegrityBlack} />
            Enjoyment
          </button>
        </div>
        <Image width={1160} height={300} className="about__image" src="/assets/maybe-hero.jpg" alt="" />

        <div className="about__history">Our history</div>
        {/* <div className="about__history-alt">
    Our <span>history</span>
      </div> */}

        <div className="about__subtitle">
          ASMAD INTEGRATED SERVICES LIMITED began as a general works contractor
          in 2024. Over the years, the company has undertaken many challenging
          projects and accumulated skills, know- how and experiences in design,
          supply, supervision, consultancy, building trades and related
          engineering works.
          <br />
          <br />
          Today, ASMAD INTEGRATED SERVICES LIMITED takes on the role of main
          contractor for small to medium size projects and performs project
          management services to coordinate specialist trades for
          industrial/commercial projects. We also provide design inputs and
          engineering solutions as value-added services to our clients.
          <br />
          <br />
          Our objective is to provide our clients with an “I AM ASSURED”
          experience when we are chosen to execute their projects. Our emphasis
          on clear communication and follow-through procedure ensuresthat
          clients objectives are top priority in the planning and execution of
          all our processes.
        </div>
        <br />
        <br />
        <div className="about__subsubtitle">Introduction</div>
        <div className="about__subsubsubtitle">OWNERSHIP & CAPITAL BASE</div>

        <div className="about__subtitle">
          <span>ASMAD INTEGRATED SERVICES LTD</span> is an indigenous company that was
          established on 7th May, 2019. It is a multifaceted engineering company
          with particular interests in Civil and Building Construction and
          Electrical Engineering and general Supplies. The company is owned by a
          group of distinguished Nigerians with varying years of expertise in
          engineering, construction, management, logistics and technical support
          services.
          <br />
          <br />
          Our mission is to deliver to our clients the highest quality
          professional services in line with their objectives in the most
          costeffective manner.
        </div>
        <br />
        <br />
        <div className="about__subsubsubtitle">
          QUALITY OBJECTIVE AND MANAGEMENT
        </div>

        <div className="about__subtitle">
          <span>ASMAD INTEGRATED SERVICES LTD</span> recognizes the fact that quality and
          efficiency are paramount to our clients in every aspect of our
          services, i.e., delivery time, price, integrity, courtesy and respect,
          empathy, error free, dependability and satisfaction (i.e., TQM). We
          have therefore dedicated ourselves to Total Quality Management (TQM)
          methods. Accordingly, the values that guide us and which we
          continually emphasize in our daily operations includes but are not
          limited to: cost effectiveness, customer relations, corporate image,
          profitability, efficiency, communication and teamwork.
        </div>

        <CoreValues />
        <div className="about__subtitle">
          These three core values are a reflection of the good old-fashioned
          values of hard work and trust which we have based our business on.
          When believe we have created a very strong and appealing business
          model. This is the reason why, we at{" "}
          <span>ASMAD INTEGRATED SERVICES LIMITED</span>, now have a sound base
          of repeat clients that know and trust our company, and enjoy the
          building process with us
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CorporatePhilosophy />

        <div className="about__subtitle">
          We take pride in our delivery; thus, our clients can always be assured
          that only the most experienced and qualified people are serving them,
          at all times.
        </div>
      </div>
      <ProjectsComponent />
    </>
  );
}
