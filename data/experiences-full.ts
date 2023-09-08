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
      url: "/company/EsriLogo.svg",
      alt: "Esri Logo",
    },
    tasks: [
      "Implemented an internal dependency graph visualizer to identify inter-connected dependencies amongst arcade expressions, reducing trouble-shooting time by 75%.",
      "Developed 2 custom CKEditor5 plugins, streamlining content injection for users and reducing input time by 15s on average.",
      "Designed and integrated a custom Language Service Protocol (LSP) to seamlessly integrate Monaco Editor with CKEditor 5, enhancing the user experience for editing source code within the platform. This innovation eliminated the need for manual copying and pasting, improving efficiency and productivity by 60% for users.",
      "Engineered and incorporated 5 reusable Stencil.js web components, reducing content authoring time in CKEditor5 by 30% and achieving a 20% increase in design consistency across the platform.",
    ],
    idTag: "Esri",
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
      url: "/company/McMasterLogo.svg",
      alt: "McMaster University's Logo",
    },
    tasks: [
      "Worked within an agile environment alongside 3 software developers to collectively build out a web interface, hosted through MenloLab, for an RTA traffic model that displays real-time data on how to improve traffic control",
      "Implemented 6 data charts using ReCharts and 4 OSMs through OpenLayers to display real-time traffic data on intersection safety, queue length, city health and traffic congestion within the city of Hamilton for thousands of users",
      "Developed and executed over 10 unit tests using Jest to ensure the code quality, functionality, and reliability of all React components, pages, and Redux slices, resulting in a high-quality, bug-free web interface.",
    ],
    idTag: "Cubic",
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
      url: "/company/GunkiiLogo.svg",
      alt: "Gunkii's Logo",
    },
    tasks: [
      "Lead and managed a team of 5 software development interns over a period of 12 weeks to tackle UI/performance issues appearing on live site, connectivity and synchronization of data between Google platforms, and increasing conversion rates based upon user interactions on CTA pages",
      "Collectively bought down web load speed from 4.64s to under 3s (WEB + AMP site) for all devices and technology through media optimization, removal of unused applications/code, and pre-rendering UI/data content",
      "Oversee the implementation of 5 backlinks and 3 professional videos to help increase metadata information and boost SEO, SERP, TRUST + Authority, allowing Google to easily search, crawl, and index data pertaining to the web and bring Gunkii to page one of Google's SERP",
    ],
    idTag: "Gunkii",
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
      url: "/company/McMasterLogo.svg",
      alt: "McMaster University's Logo",
    },
    tasks: [
      "Guided 20-30 students through bi-weekly lab sessions, fostering their understanding of fundamental low-level imperative programming concepts",
      "Demonstrated commitment to upholding academic integrity by invigilating students during major assessments, guaranteeing a fair testing environment and maintaining the course's high standards of evaluation",
      "Assisted students in diagnosing and resolving complex coding issues during lab sessions",
      "Utilized debugging techniques to teach problem-solving skills, ensuring students could independently troubleshoot software problems",
    ],
    idTag: "SFWRENG2XC3",
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
      url: "/company/CodeNinjasLogo.svg",
      alt: "Code Ninjas' Logo",
    },
    tasks: [
      "Organized, planned, and lead 5 in-person camp sessions and 3 virtual sessions (each camp session is one week in length) of class sizes up to 26 students (ages 8-13)",
      "Introduced the basics of programming in Lua for Roblox Studio (Roblox's main game development software) and demonstrated how to add functionality to worlds via scripting",
      "Encouraged and supported students to work in groups, promoting cross-team collaboration and an overall greater experiential and interactive learning experience",
      "Instructed students in a concise and entertaining manner to which students expressed interest and desire to continue developing in Roblox, prompting parents to enroll them in the next level course: Next-Level Roblox Development",
    ],
    idTag: "CodeNinjasMarkham",
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
      url: "/company/TwigohLogo.svg",
      alt: "Twigoh's Logo",
    },
    tasks: [
      "Documented and tested 7 API endpoints utilizing Swagger/OpenAPI Specification",
      "Developed the settings page (Account Information and Personalizations) with React components and local state (React Hooks) to provide users the capability to customize and update their personal information",
      "Created user input forms for the settings page through Formik and defined 3 yup.js schema to configure for both form and field level validations",
      "Develop visually appealing front-end website architecture, including translating designer mock-ups and wireframes into front-end code",
    ],
    idTag: "Twigoh",
  },
];

export default experiencesFull;
