// Library/Module Imports
import Image from "next/image";
import Link from "next/link";

// Project Imports
import contactInfo from "@/data/contact-info";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="flex flex-col items-center">
        <ul className="p-8 w-4/5 flex justify-between gap-x-6">
          {contactInfo.map((contact, index) => {
            const { socialName, socialLink, imageData } = contact;
            const { url, alt } = imageData;
            return (
              <li
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
                    className="h-12 w-12 rounded-lg left-4 absolute"
                  />
                  <p className="flex justify-center text-lg w-full">
                    {socialName}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="#top"
          className="w-full h-24 bg-gray-700 active:bg-gray-800 flex items-center justify-center text-xl"
        >
          Jump Back to Top
        </Link>
      </div>
    </div>
  );
}
