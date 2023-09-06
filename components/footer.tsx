import { ImageData } from "@/types/type";
import Image from "next/image";

interface ContactType {
  socialName: string;
  socialLink: string;
  imageData: ImageData;
}

const contactInfo: ContactType[] = [
  {
    socialName: "LinkedIn",
    socialLink: "https://www.linkedin.com/in/chene40/",
    imageData: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png",
      alt: "LinkedIn Icon",
    },
  },
  {
    socialName: "GitHub",
    socialLink: "https://github.com/chene40",
    imageData: {
      url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      alt: "GitHub Icon",
    },
  },
  {
    socialName: "Email",
    socialLink: "mailto:chene9802@gmail.com",
    imageData: {
      url: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png",
      alt: "Gmail Icon",
    },
  },
];

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
                  <a
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
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <a href="#top">Jump Back to Top</a>
        </div>
      </div>
    </div>
  );
}
