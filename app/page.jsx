import ProjectsComponent from '@/app/components/projects'
import Team from "@/app/components/team";
import Services from "@/app/components/services";
import Reach from "@/app/components/reach";
import WhyChooseUs from './components/whyChooseUs';
import VisionAndMission from './components/visionAndMission';
import Clients from './components/clients';
import ContactUs from './components/contactUs';
import Header from './components/header';
import OptimizedImage from './components/optimizedImage';

export async function generateMetadata() {
  return {
    title: "Home",
    description:
      "Project Management, Engineering Construction & Design, Supply of Integrated Services, Supervision, Environmental Consultancy",
  };
}


export default function Home() {
  return (
    <>
          <Header />

    <main className='home'>

      
      <div className="home__hero">
        <div className="home__hero__background">
<OptimizedImage src="/assets/maybe-hero.jpg" objectFit="cover" layout="fill" />
        </div>
        <div className="home__hero__inner">

        <div className="home__hero__inner__title">
          Asmad integrated services
        </div>
        <div className="home__hero__inner__subtitle">
        Project Management, Engineering Construction & Design, Supply of Integrated Services, Supervision, Environmental Consultancy

        </div>
        </div>
      </div>

      <Services />
      <ProjectsComponent />
      <Clients />
      <WhyChooseUs />
      <Reach />
      <VisionAndMission />
       <Team />
      <ContactUs /> 

     
    </main>

    </>
  );
}
