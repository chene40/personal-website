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
  width: number;
  stopAnimationHandler: Dispatch<SetStateAction<boolean>>;
}

// Work Experience Type
interface ExperienceCardPreviewProps {
  experience: {
    companyData: CompanyData;
    imageData: ImageData;
    idTag: string;
  };
}

interface ExperienceCardProps {
  experience: {
    companyData: CompanyData;
    imageData: ImageData;
    tasks: string[];
    idTag: string;
  };
  position: string;
  width: number;
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

// Timeline Props
interface ProfileTimelineProps {
  dataPoint: {
    date: string;
    role: string;
    color?: string;
    imageData?: ImageData;
    endIcon?: {
      imageData: ImageData;
      date: string;
      role: string;
    };
  };
}

interface KeyboardProps {
  item: {
    name: string;
    manufacturer: string;
    website: string;
    color: string;
    specification: string[];
    dimensions: string;
    typingAngle: string;
    productDetail: string[];
    buildStyle: string[];
    foams: string[];
    configSoftware: string;
    RGBSupport: string; // can be boolean
    explodedView: ImageData;
    imageOrientation: string;
    groupBuy: string; // can be boolean
    displayPreview: ImageData[];
  };
  figNum: number;
}

interface ComputerProps {
  computer: {
    cpu: string;
    cpuCooler: string;
    motherboard: string;
    memory: string;
    storage: string;
    gpu: string;
    pcCase: string;
    psu: string;
    partsList: string;
    blogPost: string;
    description: string[];
    imageData: ImageData[];
  };
}

export {
  ImageData,
  CompanyData,
  CarouselItemProps,
  ExperienceCardPreviewProps,
  ExperienceCardProps,
  InterestCardProps,
  ProfileTimelineProps,
  KeyboardProps,
  ComputerProps,
};
