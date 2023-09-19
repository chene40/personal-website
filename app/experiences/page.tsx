"use client";
// Project Imports
import Header from "@/components/header";
import Footer from "@/components/footer";
import experiencesFull from "@/data/experiences-full";
import { useEffect, useState } from "react";

// Relative/Local Imports
import ExperienceCard from "./experience-card";

export default function Experiences() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeHandler = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeHandler);
    return () => window.removeEventListener("resize", changeHandler);
  });
  return (
    <div className="h-full overflow-hidden">
      <Header />
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
      <Footer />
    </div>
  );
}
