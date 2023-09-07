// Relative/Local Imports
import ExperienceCardPreview from "./experience-card-preview";

import { experiencesTop, experiencesBottom } from "@/data/experiences-preview";

export default function ExperiencePreview() {
  return (
    <>
      <div className="bg-sky-300 p-8">
        <h2 className="flex justify-center mb-10 text-3xl">
          {"Here's a preview of some of my work experiences ~"}
        </h2>
        <div className="flex justify-evenly mb-12">
          {experiencesTop.map((experience, index) => {
            return (
              <ExperienceCardPreview experience={experience} key={index} />
            );
          })}
        </div>
        <div className="flex justify-evenly">
          {experiencesBottom.map((experience, index) => {
            return (
              <ExperienceCardPreview experience={experience} key={index} />
            );
          })}
        </div>
      </div>
    </>
  );
}
