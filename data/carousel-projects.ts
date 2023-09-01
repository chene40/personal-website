const carouselProjects = [
  {
    title: "Poolber",
    imageSrc: "/PoolberIcon.svg",
    imageAlt: "Poolber Icon",
    description: `A user-oriented carpooling app that encourages riders to share riders together. This not only help reduce 
		the gaseous emissions and traffic congestions, but it also helps you cut down the cost of your ride while 
		also meeting new people! This app uses the Google Maps API in order to set up the trip route and calculate ride 
		information such as the order of pickup, ride fare, distance, time, etc.`,
    techStack: [
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "node",
      "firebase",
      "figma",
      "googlemaps",
    ],
    projectLink: "https://github.com/chene40/Poolber/tree/main",
    githubLink:
      "https://github.com/chene40/Poolber/tree/main/D4/CarpoolProjectExpo",
    demoVideo:
      "https://user-images.githubusercontent.com/97481912/231580841-95c63689-3a37-42d5-b156-04d31131e41d.mp4",
    button1: "Learn More About Poolber",
  },
  {
    title: "Azeliore Bot",
    imageSrc: "/GenshinIcon.svg",
    imageAlt: "Genshin Impact Icon",
    description: `A discord bot to simulate the Genshin Impact banner system backed with statistical models so users can pull
	  for free and test their luck. The banners available to wish upon are those on the second phase of version 3.3 (Raiden 
		Shogun and Ayato's rerun banner). This project was built mostly using Node.js and made use of the discord.js API and
		a fan-made genshin.js API. Personal information such as pity rates for each banner and account are stored in a MongoDB cluster.`,
    techStack: ["javascript", "node", "bash", "mongodb", "discord"],
    projectLink: "https://bit.ly/3KMXFqe",
    githubLink: "https://github.com/chene40/azeliore-bot",
    demoVideo:
      "https://user-images.githubusercontent.com/97481912/222251246-fa23087e-ea81-45d9-a9e0-afdf269ea79c.mp4",
    button1: "Use the Discord Bot",
  },
  {
    title: "Tenzies",
    imageSrc: "/Dice.svg",
    imageAlt: "An image of a dice",
    description: `A recreation of the classical game Tenzies. Roll until all the dice are the same and click each die to freeze
	  its current value between rolls. All relevant data pertaining to the game are stored via local storage and you can check if 
	  you've beaten your old record. Give it a try and see how fast you can make all 10 dies have the same face!`,
    techStack: ["html", "css", "javascript", "react", "vercel"],
    projectLink: "https://tenzies-chene40-mcmasterca.vercel.app/",
    githubLink: "https://github.com/chene40/Tenzies",
    demoVideo:
      "https://github.com/chene40/Tenzies/assets/97481912/20395cd0-009d-4a2e-a6d4-f64881272a29",
    button1: "Play Tenzies",
  },
  {
    title: "Personal Website",
    imageSrc: "/WebsiteIcon.svg",
    imageAlt: "An image of a dice",
    description: `The website that you're currently looking at right now is also a personal project that I've created to get to 
	  know about me a little more. In here, you will find my work, my experiences, and some of my interests. Feel free to take a browse
	  around and see if anything piques your interest!`,
    techStack: [
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "next",
      "tailwindcss",
      "vercel",
    ],
    projectLink: "/projects",
    githubLink: "https://github.com/chene40/personal-website",
    demoVideo:
      "https://github.com/chene40/Tenzies/assets/97481912/20395cd0-009d-4a2e-a6d4-f64881272a29",
    button1: "Learn More About Projects",
  },
];

export default carouselProjects;
