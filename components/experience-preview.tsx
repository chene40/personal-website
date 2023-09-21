"use client";
// Project Imports
import { experiencesTop, experiencesBottom } from "@/data/experiences-preview";
import { motion } from "framer-motion";

// Relative/Local Imports
import ExperienceCardPreview from "./experience-card-preview";

export default function ExperiencePreview() {
  return (
    <>
      <div className="bg-gray-900 p-8">
        <h2 className="flex justify-center mb-10 text-3xl text-white text-center px-8">
          {"Here's a preview of some of my work experiences ~"}
        </h2>
        <motion.div
          className="flex justify-evenly mb-12 flex-wrap gap-12"
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          {experiencesTop.map((experience, index) => {
            return (
              <ExperienceCardPreview experience={experience} key={index} />
            );
          })}
          {experiencesBottom.map((experience, index) => {
            return (
              <ExperienceCardPreview experience={experience} key={index} />
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
