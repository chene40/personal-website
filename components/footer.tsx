"use client";
// Library/Module Imports
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Project Imports
import contactInfo from "@/data/contact-info";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="flex flex-col items-center">
        <ul className="p-8 w-4/5 flex flex-col sm:flex-row gap-y-6 justify-between gap-x-12">
          {contactInfo.map((contact, index) => {
            const { socialName, socialLink, imageData } = contact;
            const { url, alt } = imageData;
            return (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="w-full rounded-xl bg-cyan-600 active:bg-cyan-700"
              >
                <Link
                  href={socialLink}
                  target="_blank"
                  className="flex h-16 items-center relative"
                >
                  <Image
                    src={url}
                    alt={alt}
                    height={20}
                    width={20}
                    className="rounded-lg left-4 absolute w-auto h-auto"
                  />
                  <p className="flex justify-center left-4 absolute text-lg w-full lg:left-0">
                    {socialName}
                  </p>
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <hr className="h-1 w-4/5" />
        <div className="flex flex-col justify-center items-center my-8 w-4/5 text-center gap-y-4">
          <p>
            {`Thanks for swinging by and checking out my webpage! I'd love to connect with you and have a chat ~`}
          </p>
          <p>
            Feel free to connect with me by pressing any of the buttons above =D
          </p>
        </div>
      </div>
    </div>
  );
}
