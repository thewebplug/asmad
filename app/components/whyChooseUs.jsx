import Image from "next/image";
import IntegrityBlack from "@/public/assets/icons/integrityBlack.svg"
import IntegrityGrey from "@/public/assets/icons/integrityGrey.svg"

export default function WhyChooseUs() {
  return (
    <div className="why">
      <div className="why__inner">
        <div>
          <div className="why__inner__title">Why choose us</div>
          <div className="why__inner__subtitle">
            Our company’s core values revolve around three key words that every
            action ASMAD INTEGRATED SERVICES LIMITED takes must measure up to:
          </div>
        </div>
        <div className="why__inner__grid">
          <div className="why__inner__grid__card">
            <div className="why__inner__grid__card__number">01</div>
           <Image alt="" width={50} src={IntegrityBlack} />
            <div>
              <div className="why__inner__grid__card__title">Integrity</div>
              <div className="why__inner__grid__card__subtitle">
                Our top-level goal is always to build integrity by being honest
                and open with our clients, consultants & subcontractors. We
                recognize that without a high level of trust, the vital
                relationships that can make or break a project will dissolve.
              </div>
            </div>
          </div>
          <div className="why__inner__grid__card">
            <div className="why__inner__grid__card__number">02</div>
            
            <Image alt="" width={50} src={IntegrityGrey} />

            <div>
              <div className="why__inner__grid__card__title">CONFIDENCE</div>
              <div className="why__inner__grid__card__subtitle">
                We install in all our site and management a sense of self
                achievement and personal responsibility to provide a feeling of
                personal confidence for each and every person who works on a
                ASMAD INTEGRATED SERVICES LIMITED Project.
              </div>
            </div>
          </div>
          <div className="why__inner__grid__card">
            <div className="why__inner__grid__card__number">03</div>
            <Image alt="" width={50} src={IntegrityGrey} />


            <div>
              <div className="why__inner__grid__card__title">ENJOYMENT</div>
              <div className="why__inner__grid__card__subtitle">
                We understand that each stakeholder in a Project has a job to
                do. However, we Also know that if people enjoy what they do,
                they’ll be happier, healthier and achieve more. For most of us,
                work is a big part of life and life is for enjoying.
              </div>
            </div>
          </div>
          <div className="why__inner__grid__card">
            <div className="why__inner__grid__card__number">04</div>
            <Image alt="" width={50} src={IntegrityBlack} />


            <div>
              <div className="why__inner__grid__card__title">ENJOYMENT</div>
              <div className="why__inner__grid__card__subtitle">
                We understand that each stakeholder in a Project has a job to
                do. However, we Also know that if people enjoy what they do,
                they’ll be happier, healthier and achieve more. For most of us,
                work is a big part of life and life is for enjoying.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
