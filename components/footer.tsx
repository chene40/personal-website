// Library/Module Imports
import Image from "next/image";
import Link from "next/link";

// Project Imports
import contactInfo from "@/data/contact-info";

export default function Footer() {
  return (
    <div className="p-8 bg-cyan-400 text-white">
      <div className="flex">
        <div className="w-1/3">Footer</div>
        <div className="w-1/3">
          <p>Contact</p>
          <ul className="ml-8">
            {contactInfo.map((contact, index) => {
              const { socialName, socialLink, imageData } = contact;
              const { url, alt } = imageData;
              return (
                <li key={index}>
                  <Link
                    href={socialLink}
                    target="_blank"
                    className="flex mt-2 w-fit"
                  >
                    <p>↳ {socialName}</p>
                    <Image
                      src={url}
                      alt={alt}
                      height={20}
                      width={20}
                      className="ml-2"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <Link href="#top">Jump Back to Top</Link>
        </div>
      </div>
    </div>
  );
}
