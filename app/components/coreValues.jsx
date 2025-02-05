"use client";
import { useState } from "react";
import OptimizedImage from "./optimizedImage";

export default function CoreValues() {
  const [type, setType] = useState("integrity");

  return (
    <div className="solution">
      <div className="solution__title">
        Our Core <span>Values</span>
      </div>
      <div className="solution__subtitle">
        Our company’s core values revolve around three key words that every
        action ASMAD INTEGRATED SERVICES LIMITED takes must measure up to:
      </div>
      <div className="solution__grid">
        <div className="solution__grid__nav">
          <div
            className={
              type === "integrity"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("integrity")}
          >
            <div className="solution__grid__nav__item__title">Integrity</div>
            {type === "integrity" && (
              <div className="solution__grid__nav__item__subtitle">
                Our top-level goal is always to build integrity by being honest
                and open with our clients, consultants & subcontractors. We
                recognize that without a high level of trust, the vital
                relationships that can make or break a project will dissolve.
              </div>
            )}
          </div>
          <div
            className={
              type === "confidence"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("confidence")}
          >
            <div className="solution__grid__nav__item__title">
              Confidence
            </div>
            {type === "confidence" && (
              <div className="solution__grid__nav__item__subtitle">
                We install in all our site and management a sense of self
                achievement and personal responsibility to provide a feeling of
                personal confidence for each and every person who works on a{" "}
                <span>ASMAD INTEGRATED SERVICES LIMITED</span> Project. Its
                personal confidence in a job well done, whatever the task.
              </div>
            )}
          </div>
          <div
            className={
              type === "enjoyment"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("enjoyment")}
          >
            <div className="solution__grid__nav__item__title">Enjoyment</div>
            {type === "enjoyment" && (
              <div className="solution__grid__nav__item__subtitle">
                We understand that each stakeholder in a Project has a job to
                do. However, we Also know that if people enjoy what they do,
                they’ll be happier, healthier and achieve more. For most of us,
                work is a big part of life and life is for enjoying. That’s why
                at <span>ASMAD INTEGRATED SERVICES LIMITED</span>, We always do our best to
                make every job enjoyable.so all who work with us will have a
                good time doing it
              </div>
            )}
          </div>
        </div>
        {type === "integrity" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738783530/pexels-pnw-prod-8276364_enhdxk.jpg" className="solution__grid__img" />
        )}
        {type === "confidence" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738783530/tingey-injury-law-firm-9SKhDFnw4c4-unsplash_o9lcoe.jpg" className="solution__grid__img" />
        )}
        {type === "enjoyment" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738783530/thought-catalog-23KdVfc395A-unsplash_x6vz65.jpg" className="solution__grid__img" />
        )}
      </div>
    </div>
  );
}
