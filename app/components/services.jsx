import Link from "next/link";
import OptimizedImage from "./optimizedImage";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="services__inner">
        <div className="services__inner__title">What we offer</div>

        <div className="services__inner__grid services__inner__grid1">
          <div className="services__inner__grid__item1">
            <div className="services__inner__grid__item__subtitle">
              Construction, Finishing & Furnishing, Maintenance
            </div>
            <div className="services__inner__grid__item__title">
              Engineering Construction & Design
            </div>
            <Link
              href="/engineering"
              prefetch={true}
              className="services__inner__grid__item__subsubtitle"
            >
              see more
            </Link>
            <div
                          className="services__inner__grid__item__img services__inner__grid__item1__img"

            >
            <OptimizedImage
              src="https://res.cloudinary.com/thewebplug/image/upload/v1738783933/maybe-hero_nucxsj.jpg"
              alt=""
             objectFit="cover"
             layout="fill"
            />
              
            </div>
          </div>
          <div className="services__inner__grid__item2">
            <div className="services__inner__grid__item__subtitle">
           Seamless project execution with clear planning
            </div>
            <div className="services__inner__grid__item__title">
              Project Management
            </div>
            <Link
              href="/management"
              prefetch={true}
              className="services__inner__grid__item__subsubtitle"
            >
              see more
            </Link>
          </div>
          <div className="services__inner__grid__item2">
            <div className="services__inner__grid__item__subtitle">
            Our supply chain solutions ensure delivery of top-quality.
            </div>
            <div className="services__inner__grid__item__title">
              Supply of Integrated Services
            </div>
            <Link
              href="/supply"
              prefetch={true}
              className="services__inner__grid__item__subsubtitle"
            >
              see more
            </Link>

              <div
                          className="services__inner__grid__item__img services__inner__grid__item1__img"

            >
            <OptimizedImage
              src="https://res.cloudinary.com/thewebplug/image/upload/v1738783933/maybe-hero_nucxsj.jpg"
              alt=""
             objectFit="cover"
             layout="fill"
            />
              
            </div>
          </div>
        </div>
        <div className="services__inner__grid services__inner__grid2">
          <div className="services__inner__grid__item2">
            <div className="services__inner__grid__item__subtitle">
            We provide expert oversight, ensuring projects meet industry standards.
            </div>
            <div className="services__inner__grid__item__title">
              Supervision
            </div>
            <Link
              href="/supervision"
              prefetch={true}
              className="services__inner__grid__item__subsubtitle"
            >
              see more
            </Link>

              <div
                          className="services__inner__grid__item__img services__inner__grid__item1__img"

            >
            <OptimizedImage
              src="https://res.cloudinary.com/thewebplug/image/upload/v1738783933/maybe-hero_nucxsj.jpg"
              alt=""
             objectFit="cover"
             layout="fill"
            />
              
            </div>
          </div>
          <div className="services__inner__grid__item2">
            <div className="services__inner__grid__item__subtitle">
            Our consultancy services promote sustainability and regulatory compliance
            </div>
            <div className="services__inner__grid__item__title">
              Environmental Consultancy
            </div>
            <Link
              href="/consultancy"
              prefetch={true}
              className="services__inner__grid__item__subsubtitle"
            >
              see more
            </Link>

              <div
                          className="services__inner__grid__item__img services__inner__grid__item1__img"

            >
            <OptimizedImage
              src="https://res.cloudinary.com/thewebplug/image/upload/v1738783933/maybe-hero_nucxsj.jpg"
              alt=""
             objectFit="cover"
             layout="fill"
            />
              
            </div>
          </div>
          <div className="services__inner__grid__item2">
            <div className="services__inner__grid__item__subtitle">
            Construction, Finishing & Furnishing, Maintenance
            </div>
            <div className="services__inner__grid__item__title">
              Engineering Construction & Design
            </div>
            <Link
              href="/engineering"
              className="services__inner__grid__item__subsubtitle"
            >
              see more
            </Link>

              <div
                          className="services__inner__grid__item__img services__inner__grid__item1__img"

            >
            <OptimizedImage
              src="https://res.cloudinary.com/thewebplug/image/upload/v1738783933/maybe-hero_nucxsj.jpg"
              alt=""
             objectFit="cover"
             layout="fill"
            />
              
            </div>
          </div>
          <div className="services__inner__grid__item2">
            <div className="services__inner__grid__item__subtitle">
           Seamless project execution with clear planning
            </div>
            <div className="services__inner__grid__item__title">
              Project Management
            </div>
            <Link
              href="/management"
              className="services__inner__grid__item__subsubtitle"
            >
              see more
            </Link>

              <div
                          className="services__inner__grid__item__img services__inner__grid__item1__img"

            >
            <OptimizedImage
              src="https://res.cloudinary.com/thewebplug/image/upload/v1738783933/maybe-hero_nucxsj.jpg"
              alt=""
             objectFit="cover"
             layout="fill"
            />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
