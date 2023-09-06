const experiencesFull = [
  {
    companyData: {
      company: "Esri",
      jobTitle: "Software Engineer Intern",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
		velit rutrum, malesuada nibh quis, fringilla urna. Donec non velit
		risus. Nunc lobortis, enim at consectetur scelerisque, metus augue
		tristique nulla, ac porttitor erat turpis eget arcu. Etiam porttitor
		sem ut ultricies facilisis. Nam laoreet orci bibendum neque tempus
		porttitor.`,
      techStack: [
        "html",
        "css",
        "javascript",
        "preact",
        "ckeditor5",
        "npm",
        "node",
      ],
      companyLink: "https://www.esri.com/en-us/about/about-esri/overview",
      date: "2023",
    },
    imageData: {
      url: "/EsriLogo.svg",
      alt: "Esri Logo",
    },
    tasks: [
      "Implemented an internal dependency graph visualizer to identify inter-connected dependencies amongst arcade expressions, reducing trouble-shooting time by 75%.",
      "Developed 2 custom CKEditor5 plugins, streamlining content injection for users and reducing input time by 15s on average.",
      "Designed and integrated a custom Language Service Protocol (LSP) to seamlessly integrate Monaco Editor with CKEditor 5, enhancing the user experience for editing source code within the platform. This innovation eliminated the need for manual copying and pasting, improving efficiency and productivity by 60% for users.",
      "Engineered and incorporated 5 reusable Stencil.js web components, reducing content authoring time in CKEditor5 by 30% and achieving a 20% increase in design consistency across the platform.",
    ],
  },
  {
    companyData: {
      company: "McMaster University",
      jobTitle: "Software Developer Intern",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
		velit rutrum, malesuada nibh quis, fringilla urna. Donec non velit
		risus. Nunc lobortis, enim at consectetur scelerisque, metus augue
		tristique nulla, ac porttitor erat turpis eget arcu. Etiam porttitor
		sem ut ultricies facilisis. Nam laoreet orci bibendum neque tempus
		porttitor.`,
      techStack: [
        "javascript",
        "typescript",
        "react",
        "redux",
        "tailwindcss",
        "jest",
        "node",
        "yarn",
      ],
      companyLink: "https://electrification.mcmaster.ca/",
      date: "2022",
    },
    imageData: {
      url: "/McMasterLogo.svg",
      alt: "McMaster University's Logo",
    },
    tasks: [
      "Worked within an agile environment alongside 3 software developers to collectively build out a web interface, hosted through MenloLab, for an RTA traffic model that displays real-time data on how to improve traffic control",
      "Implemented 6 data charts using ReCharts and 4 OSMs through OpenLayers to display real-time traffic data on intersection safety, queue length, city health and traffic congestion within the city of Hamilton for thousands of users",
      "Developed and executed over 10 unit tests using Jest to ensure the code quality, functionality, and reliability of all React components, pages, and Redux slices, resulting in a high-quality, bug-free web interface.",
    ],
  },
  {
    companyData: {
      company: "Gunkii",
      jobTitle: "Shopify Lead Software Developer (Intern)",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
		velit rutrum, malesuada nibh quis, fringilla urna. Donec non velit
		risus. Nunc lobortis, enim at consectetur scelerisque, metus augue
		tristique nulla, ac porttitor erat turpis eget arcu. Etiam porttitor
		sem ut ultricies facilisis. Nam laoreet orci bibendum neque tempus
		porttitor.`,
      techStack: ["html", "css", "javascript", "sass", "shopify", "github"],
      companyLink: "https://gunkii.com/",
      date: "2022",
    },
    imageData: {
      url: "/GunkiiLogo.svg",
      alt: "Gunkii's Logo",
    },
    tasks: [
      "Lead and managed a team of 5 software development interns over a period of 12 weeks to tackle UI/performance issues appearing on live site, connectivity and synchronization of data between Google platforms, and increasing conversion rates based upon user interactions on CTA pages",
      "Collectively bought down web load speed from 4.64s to under 3s (WEB + AMP site) for all devices and technology through media optimization, removal of unused applications/code, and pre-rendering UI/data content",
      "Oversee the implementation of 5 backlinks and 3 professional videos to help increase metadata information and boost SEO, SERP, TRUST + Authority, allowing Google to easily search, crawl, and index data pertaining to the web and bring Gunkii to page one of Google's SERP",
    ],
  },
  {
    companyData: {
      company: "McMaster University",
      jobTitle: "Teaching Assistant (Software Engineer II)",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
		velit rutrum, malesuada nibh quis, fringilla urna. Donec non velit
		risus. Nunc lobortis, enim at consectetur scelerisque, metus augue
		tristique nulla, ac porttitor erat turpis eget arcu. Etiam porttitor
		sem ut ultricies facilisis. Nam laoreet orci bibendum neque tempus
		porttitor.`,
      techStack: ["bash", "c"],
      companyLink:
        "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=53&coid=267962",
      date: "2022",
    },
    imageData: {
      url: "/McMasterLogo.svg",
      alt: "McMaster University's Logo",
    },
    tasks: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
    ],
  },
  {
    companyData: {
      company: "Code Ninjas Markham",
      jobTitle: "Roblox Development Camp Counsellor",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
		velit rutrum, malesuada nibh quis, fringilla urna. Donec non velit
		risus. Nunc lobortis, enim at consectetur scelerisque, metus augue
		tristique nulla, ac porttitor erat turpis eget arcu. Etiam porttitor
		sem ut ultricies facilisis. Nam laoreet orci bibendum neque tempus
		porttitor.`,
      techStack: ["lua"],
      companyLink: "https://www.codeninjas.com/markham-on-ca",
      date: "2022",
    },
    imageData: {
      url: "/CodeNinjasLogo.svg",
      alt: "Code Ninjas' Logo",
    },
    tasks: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
    ],
  },
  {
    companyData: {
      company: "Twigoh",
      jobTitle: "Full-Stack Software Engineer (Intern)",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
		velit rutrum, malesuada nibh quis, fringilla urna. Donec non velit
		risus. Nunc lobortis, enim at consectetur scelerisque, metus augue
		tristique nulla, ac porttitor erat turpis eget arcu. Etiam porttitor
		sem ut ultricies facilisis. Nam laoreet orci bibendum neque tempus
		porttitor.`,
      techStack: [
        "javascript",
        "typescript",
        "tailwindcss",
        "next",
        "redux",
        "express",
        "postgresql",
        "swagger",
        "figma",
      ],
      companyLink: "https://www.linkedin.com/company/designlab-twigoh/",
      date: "2022",
    },

    imageData: {
      url: "/TwigohLogo.svg",
      alt: "Twigoh's Logo",
    },
    tasks: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec orci convallis, consectetur ligula eget, lacinia magna. Donec ultrices.",
    ],
  },
];

export default experiencesFull;
