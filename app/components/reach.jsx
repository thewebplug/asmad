import Image from "next/image";

export default function Reach() {
  return (
    <div className="reach">
      <div className="reach__group">
        <div className="reach__card1">
          <div className="reach__card1__subtitle">MORE ABOUT US</div>
          <div className="reach__card1__title">
            15 years of quality and successful projects
          </div>
          <div className="reach__card1__subsubtitle">
            Established in 2006, Brains and hammers real estate is backed up by
            decade’s worth of insight and expertise. Over the years, we have
            successfully carved a niche as the best in building high end
            infrastructures and delivering unparalleled experiences for our
            highly esteemed clients for sale and lease.
          </div>

          <button>Contact us</button>
        </div>
        <div className="reach__card2">
          <Image
            src="/assets/building 3.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="reach__stats">
        <div>
          <div>+</div>
          <div>
            <div className="reach__stats__title">110</div>

            <div className="reach__stats__subtitle">satisfied customers</div>
          </div>
        </div>
        <div>
          <div>+</div>
          <div>
            <div className="reach__stats__title">50</div>

            <div className="reach__stats__subtitle">completed projects</div>
          </div>
        </div>
        <div>
          <div>+</div>
          <div>
            <div className="reach__stats__title">10</div>

            <div className="reach__stats__subtitle">ongoing projects</div>
          </div>
        </div>
        <div>
          <div>+</div>
          <div>
            <div className="reach__stats__title">80</div>

            <div className="reach__stats__subtitle">projects managed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
