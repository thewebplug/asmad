"use client"
import { useEffect, useState } from "react";

const clients = [
  {
    image: "https://res.cloudinary.com/thewebplug/image/upload/v1738783643/comp2_cpbyv8.jpg"
  },
  {
    image: "https://res.cloudinary.com/thewebplug/image/upload/v1738783643/comp3_whcrcl.jpg"
  },
  {
    image: "https://res.cloudinary.com/thewebplug/image/upload/v1738783644/comp4_vkbnge.jpg"
  },
  {
    image: "https://res.cloudinary.com/thewebplug/image/upload/v1738783644/comp5_ujuh8z.jpg"
  },
  {
    image: "https://res.cloudinary.com/thewebplug/image/upload/v1738783644/comp6_y87uw8.jpg"
  },
  {
    image: "https://res.cloudinary.com/thewebplug/image/upload/v1738783644/comp7_i9ggmt.jpg"
  }
]



export default function Clients() {
  const [duplicateCount, setDuplicateCount] = useState(2);

  useEffect(() => {
    const calculateDuplicates = () => {
      const viewportWidth = window.innerWidth;
      const newDuplicateCount = Math.ceil((viewportWidth * 3) / (300 + 20)) + 1;
      setDuplicateCount(newDuplicateCount);
    };

    calculateDuplicates();
    window.addEventListener('resize', calculateDuplicates);
    return () => window.removeEventListener('resize', calculateDuplicates);
  }, []);

  const duplicatedItems = Array(duplicateCount).fill(clients).flat();
  console.log('duplicatedItems', duplicatedItems);
  

  useEffect(() => {
    document.documentElement.style.setProperty('--item-count', clients.length);
  }, [clients.length]);

  return (
    <div className="clients">
        <div className="clients__title">Our Satisfied <span>Clients</span></div>
      <div className="clients__slider">
        {duplicatedItems?.map((testimonial, index) => 
                  <img src={testimonial?.image} key={index} alt="" />

        )}
       
      </div>

      
    </div>
  );
}
