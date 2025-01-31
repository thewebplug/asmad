import Image from "next/image";

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
            <Image src={"/assets/hipp.jpg"} objectFit="cover" layout="fill" alt="" />
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
            <Image src={"/assets/alex.jpg"} objectFit="cover" layout="fill" alt="" />
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
            <Image src={"/assets/christian.jpg"} objectFit="cover" layout="fill" alt="" />
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
            <Image src={"/assets/hipp.jpg"} objectFit="cover" layout="fill" alt="" />
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
            <Image src={"/assets/alex.jpg"} objectFit="cover" layout="fill" alt="" />
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
            <Image src={"/assets/christian.jpg"} objectFit="cover" layout="fill" alt="" />
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
