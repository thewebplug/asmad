import OptimizedImage from "./optimizedImage";

export default function ProjectCard({title, subtitle, date, image}) {
  return (
    <div className="projects__grid__card">
    <div className="projects__grid__card__cover">
    <OptimizedImage alt="" src={image} objectFit="cover" layout="fill" />
      <div className="projects__grid__card__cover__info">
        <div className="projects__grid__card__cover__info__title">
          Lorem ipsum
        </div>
        <div className="projects__grid__card__cover__info__body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries
        </div>
      </div>
    </div>

    <div className="projects__grid__card__title">
      {title}
    </div>
    <div className="projects__grid__card__subtitle">
      {subtitle}
    </div>
    <div className="projects__grid__card__date">
      {date}
    </div>
  </div>
  );
}
