import OptimizedImage from "./optimizedImage";

export default function Team() {
  return (
    <div className="team">
      <div className="team__title-group">
      <div className="team__title">Our Team</div>
      <div className="team__subtitle">
      We offer solutions that brings visible, quantifiable and verifiable
result to our clients first time, every time. 
      </div>
      </div>

      <div className="team__slide">
      <div className="team__slide__card">
          <div className="team__slide__card__bg">

            <div className="team__slide__card__bg__img">
            <OptimizedImage alt="" src={"https://res.cloudinary.com/thewebplug/image/upload/v1738783643/ceo_dbntlg.jpg"} objectFit="cover" layout="fill" />
            </div>
          </div>

          <div className="team__slide__card__title">Idris Abdulsamad Yusuf</div>
          <div className="team__slide__card__role">
            CEO
            <i></i>
          </div>
        </div>
      <div className="team__slide__card">
          <div className="team__slide__card__bg">

            <div className="team__slide__card__bg__img">
            <OptimizedImage alt="" src={"https://res.cloudinary.com/thewebplug/image/upload/v1738783643/alex_wwynrg.jpg"} objectFit="cover" layout="fill" />
            </div>
          </div>

          <div className="team__slide__card__title">Lorem ipsum</div>
          <div className="team__slide__card__role">
            Lorem Ipsum is simply dummy
            <i></i>
          </div>
        </div>
        
        <div className="team__slide__card">
          <div className="team__slide__card__bg">

            <div className="team__slide__card__bg__img">
            <OptimizedImage alt="" src={"https://res.cloudinary.com/thewebplug/image/upload/v1738783641/hipp_s5thyp.jpg"} objectFit="cover" layout="fill" />
            </div>
          </div>

          <div className="team__slide__card__title">Lorem ipsum</div>
          <div className="team__slide__card__role">
            Lorem Ipsum is simply dummy
            <i></i>
          </div>
        </div>
     
      
      <div className="team__slide__card">
          <div className="team__slide__card__bg">

            <div className="team__slide__card__bg__img">
            <OptimizedImage alt="" src={"https://res.cloudinary.com/thewebplug/image/upload/v1738783643/alex_wwynrg.jpg"} objectFit="cover" layout="fill" />
            </div>
          </div>

          <div className="team__slide__card__title">Lorem ipsum</div>
          <div className="team__slide__card__role">
            Lorem Ipsum is simply dummy
            <i></i>
          </div>
        </div>

        <div className="team__slide__card">
          <div className="team__slide__card__bg">

            <div className="team__slide__card__bg__img">
            <OptimizedImage alt="" src={"https://res.cloudinary.com/thewebplug/image/upload/v1738783641/hipp_s5thyp.jpg"} objectFit="cover" layout="fill" />
            </div>
          </div>

          <div className="team__slide__card__title">Lorem ipsum</div>
          <div className="team__slide__card__role">
            Lorem Ipsum is simply dummy
            <i></i>
          </div>
        </div>
     
        <div className="team__slide__card">
          <div className="team__slide__card__bg">

            <div className="team__slide__card__bg__img">
            <OptimizedImage alt="" src={"https://res.cloudinary.com/thewebplug/image/upload/v1738783643/alex_wwynrg.jpg"} objectFit="cover" layout="fill" />
            </div>
          </div>

          <div className="team__slide__card__title">Lorem ipsum</div>
          <div className="team__slide__card__role">
            Lorem Ipsum is simply dummy
            <i></i>
          </div>
        </div>
      </div>
    </div>
  );
}
