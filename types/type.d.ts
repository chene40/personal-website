// Generics
type ImageData = {
  url: string;
  alt: string;
};

type CompanyData = {
  company: string;
  jobTitle: string;
  description: string;
  techStack: string[] | undefined;
  companyLink: string;
  date: string;
};

// Carousel Type
interface CarouselItemProps {
  carouselItem: {
    title: string;
    imageData: ImageData;
    description: string;
    additionalInfo?: string;
    techStack: string[];
    projectLink: string;
    githubLink: string;
    demoVideo: string;
    button1?: string;
    button2?: string;
  };
}

// Work Experience Type
interface ExperienceCardPreviewProps {
  experience: {
    companyData: CompanyData;
    imageData: ImageData;
  };
}

interface ExperienceCardProps {
  experience: {
    companyData: CompanyData;
    imageData: ImageData;
    tasks: string[];
  };
  position: string;
}

// Interest Props
interface InterestCardProps {
  interestData: {
    interest: string;
    description: string;
    imageData: ImageData;
    redirectPath: string;
  };
}

export {
  ImageData,
  CompanyData,
  CarouselItemProps,
  ExperienceCardPreviewProps,
  ExperienceCardProps,
  InterestCardProps,
};
