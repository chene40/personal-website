"use client";
// Project Imports
import experiencesFull from "@/data/experiences-full";
import { useEffect, useState } from "react";

// Relative/Local Imports
import ExperienceCard from "./experience-card";

export default function Experiences() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Initial window width trigger since SSR does not provide a window object (client object)
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <div className="h-full overflow-hidden">
      <div className="bg-gray-900 h-full pb-6">
        <h3 className="flex justify-center font-medium text-3xl p-12 text-white">
          Work Experiences
        </h3>
        <div className="flex flex-col">
          {experiencesFull.map((experience, index) => {
            return (
              <ExperienceCard
                experience={experience}
                width={width}
                key={index}
                position={index % 2 == 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
