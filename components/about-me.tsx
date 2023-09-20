"use client";

// Library/Module Imports
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Project Imports
import timelineData from "@/data/timeline-data";
import contactInfo from "@/data/contact-info";
import HorizontalTimeline from "@/components/horizontal-timeline";
import VerticalTimeline from "@/components/vertical-timeline";

export default function AboutMePage() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-900 w-full p-10">
      <div className="flex flex-col xl:flex-row justify-evenly items-center xl:items-start text-white">
        <div className="my-8 w-full md:w-2/3 xl:w-1/3 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-2/3 bg-white rounded-full"
          >
            <Image
              src={"/Me.jpg"}
              alt="A picture of me"
              className="rounded-full w-full h-auto p-2"
              width={0}
              height={0}
              sizes="100vw"
            />
          </motion.div>
          <div className="mt-12 h-12 flex justify-around items-center w-full xl:w-3/4">
            {contactInfo.map((contact, index) => {
              return (
                <motion.button
                  key={index}
                  className="border p-2 rounded-lg w-1/4"
                  whileHover={{ scale: 1.25 }}
                >
                  <Link target="_blank" href={contact.socialLink}>
                    {contact.socialName}
                  </Link>
                </motion.button>
              );
            })}
          </div>
        </div>
        <div className="xl:w-3/5">
          <h2 className="text-5xl my-8">Eric Chen</h2>
          <div className="flex flex-col gap-y-8 leading-relaxed text-lg w-full xl:w-11/12">
            <p>
              {` Hi there! My name's Eric, and I'm currently a fourth-year
			software engineering student at McMaster University, passionate
			about crafting seamless and user-friendly front-end experiences.`}
            </p>
            <p>
              {`Throughout my academic journey, I've had the privilege of diving
			into a variety of enriching internships where I've gained
			expertise in technologies such as React, Redux, Next.js,
			Tailwind CSS, TypeScript, and more. My design philosophy leans
			towards cozy minimalism, and I love creating interfaces that are
			both visually appealing and intuitive. When I'm not coding, you
			can find me building custom mechanical keyboards, assembling
			unique PCs, and capturing life's moments through photography
			(check out my dedicated page!).`}
            </p>
            <p>
              {`I'm actively seeking a 4-8 month internship opportunity commencing
			in January 2024, as I'm set to graduate in April 2025. Additionally,
			I'm enthusiastic about broadening my skill set to encompass a range
			of software technologies, including backend development and mobile app
			creation. If you're in search of a dedicated and versatile team member
			or simply wish to engage in discussions about related interests, please
			don't hesitate to reach out. You can find my contact information under
			my profile, and I look forward to the opportunity of collaborating with
			you!`}
            </p>
            <p></p>
          </div>
        </div>
      </div>
      {/* Vertical */}
      <h1 className="text-white text-3xl italic text-center">
        Progress Timeline
      </h1>

      {width <= 1280 && (
        <div className="flex flex-col justify-center items-center h-full">
          {timelineData.map((dataPoint, index) => {
            return <VerticalTimeline key={index} dataPoint={dataPoint} />;
          })}
        </div>
      )}
      {width > 1280 && (
        <div className="my-24 flex justify-center items-center h-full">
          {timelineData.map((dataPoint, index) => {
            return <HorizontalTimeline key={index} dataPoint={dataPoint} />;
          })}
        </div>
      )}
    </div>
  );
}
