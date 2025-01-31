import ProjectsComponent from '@/app/components/projects'
import Team from '@/app/components/team';
import Services from '@/app/components/services';
import Reach from '@/app/components/Reach';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <main className='home'>

      

      <div className="home__header">
        <div className="home__header__logo">
          Logo
        </div>
        <nav>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Reach</Link>
          <Link href="#">Our Team</Link>
        </nav>

        <div className="home__header__buttons">
          <button>Contact us</button>
        </div>
      </div>
      <div className="home__hero">
        <div className="home__hero__background">

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
      <ProjectsComponent />
      <Services />
      <Reach />
      <Team />
    </main>

    <div className="mobile">
      Not available on mobile yet
    </div>
    </>
  );
}
