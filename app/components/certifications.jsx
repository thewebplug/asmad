"use client";
import { useState } from "react";
import OptimizedImage from "./optimizedImage";

export default function Certifications() {
  const [type, setType] = useState("cac");

  return (
    <div className="solution">
      <div className="solution__title">
        Our <span>Certifications</span>
      </div>
      <div className="solution__subtitle">
      EVIDENCE OF CERTIFICATE OF
INCORPORATION FORM CO2, CO7,
ARTICLE & MEMORANDUM OF
ASSOCIATION
      </div>
      <div className="solution__grid">
        <div className="solution__grid__nav">
          <div
            className={
              type === "cac"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("cac")}
          >
            <div className="solution__grid__nav__item__title">CAC Registration</div>
            {type === "cac" && (
              <div className="solution__grid__nav__item__subtitle">
                
              </div>
            )}
          </div>
          <div
            className={
              type === "tax"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("tax")}
          >
            <div className="solution__grid__nav__item__title">
            Evidence of Tax Clearance &
            VAT
            </div>
            {type === "tax" && (
              <div className="solution__grid__nav__item__subtitle">
               
              </div>
            )}
          </div>
          <div
            className={
              type === "certiport"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("certiport")}
          >
            <div className="solution__grid__nav__item__title">CERTIPORT Certificate</div>
            {type === "certiport" && (
              <div className="solution__grid__nav__item__subtitle">
                
              </div>
            )}
          </div>
          <div
            className={
              type === "certiprof"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("certiprof")}
          >
            <div className="solution__grid__nav__item__title">CERTIPROF Certificate</div>
            {type === "certiprof" && (
              <div className="solution__grid__nav__item__subtitle">
                
              </div>
            )}
          </div>
          <div
            className={
              type === "dealership"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("dealership")}
          >
            <div className="solution__grid__nav__item__title">Certificate of Authorized Dealership</div>
            {type === "dealership" && (
              <div className="solution__grid__nav__item__subtitle">
                
              </div>
            )}
          </div>
          <div
            className={
              type === "solar"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("solar")}
          >
            <div className="solution__grid__nav__item__title">Solar Distribution Certificate</div>
            {type === "solar" && (
              <div className="solution__grid__nav__item__subtitle">
                
              </div>
            )}
          </div>
          <div
            className={
              type === "security"
                ? "solution__grid__nav__item solution__grid__nav__item-active"
                : "solution__grid__nav__item"
            }
            onClick={() => setType("security")}
          >
            <div className="solution__grid__nav__item__title">Network Security Specialist Certification</div>
            {type === "security" && (
              <div className="solution__grid__nav__item__subtitle">
                
              </div>
            )}
          </div>
        </div>
        {type === "cac" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738872427/Screenshot_2025-02-06_205630_gt9nop.jpg" className="solution__grid__img" />
        )}
        {type === "tax" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738872428/Screenshot_2025-02-06_205731_kz7u3a.jpg" className="solution__grid__img" />
        )}
        {type === "certiport" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738872427/Screenshot_2025-02-06_210056_uuthve.jpg" className="solution__grid__img" />
        )}
        {type === "certiprof" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738872428/Screenshot_2025-02-06_210117_r7ozfi.jpg" className="solution__grid__img" />
        )}
        {type === "dealership" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738872428/Screenshot_2025-02-06_210138_zmvdbl.jpg" className="solution__grid__img" />
        )}
        {type === "solar" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738872428/Screenshot_2025-02-06_210207_qirxod.jpg" className="solution__grid__img" />
        )}
        {type === "security" && (
          <OptimizedImage width={670} height={446} src="https://res.cloudinary.com/thewebplug/image/upload/v1738872428/Screenshot_2025-02-06_210238_fk26mw.jpg" className="solution__grid__img" />
        )}
      </div>
    </div>
  );
}
