const carouselProjects = [
  {
    title: "Poolber",
    imageData: {
      url: "/projects/PoolberIcon.svg",
      alt: "Poolber Icon",
    },
    description: `A user-oriented carpooling app that encourages riders to share riders together. This not only help reduce 
		the gaseous emissions and traffic congestions caused by cars, but it also helps you cut down the cost of your ride while 
		also meeting new people! This app uses the Google Maps API in order to set up the trip route and calculate ride 
		information such as the order of pickup, ride fare, distance, time, etc. All user and ride information is stored via Firebase.`,
    additionalInfo: `If you wish to modify/extend this app, make sure to replace the Firebase and Google Maps API key to get it properly
	working. Further details about the system design, case/state diagrams and requirements can be found within the D[1-3] subdirectories.
	The D4/CarpoolProjectExpo hosts the implementation specifics of the app.`,
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
    imageData: {
      url: "/projects/GenshinIcon.svg",
      alt: "Genshin Impact Icon",
    },
    description: `A discord bot to simulate the Genshin Impact banner system backed with statistical models so users can pull
	  for free and test their luck. The banners available to wish upon are those on the second phase of version 3.3 (Raiden 
		Shogun and Ayato's rerun banner). This project was built mostly using Node.js and made use of the discord.js API and
		a fan-made genshin.js API. Personal information such as pity rates for each banner and account are stored in a MongoDB cluster.`,
    additionalInfo: `This bot has not been updated since the version 3.3 update. Any changes thereafter the 3.3 patch update regarding
	how the pity system works is not explored further. Disclaimer: This bot's statistical rates are based on models of player's wishes 
	and is in no shape or form, indicative of the underlying pity system behind Genshin. Use at your own discretion.`,
    techStack: ["javascript", "node", "bash", "mongodb", "discord"],
    projectLink: "https://bit.ly/3KMXFqe",
    githubLink: "https://github.com/chene40/azeliore-bot",
    demoVideo:
      "https://user-images.githubusercontent.com/97481912/222251246-fa23087e-ea81-45d9-a9e0-afdf269ea79c.mp4",
    button1: "Use the Discord Bot",
  },
  {
    title: "Tenzies",
    imageData: {
      url: "/projects/Dice.svg",
      alt: "An image of a dice",
    },
    description: `A recreation of the classical game, Tenzies. Roll until all die are the same and click each die to freeze
	  its current value between rolls. Try to beat your record and see if you can achieve a faster time than before.
	  All relevant data pertaining to the game are stored via local storage and you can check if 
	  you've beaten your old record via the "Stats" page.`,
    additionalInfo: `This project was created as an initial dive into the React/Node ecosystem and was deployed via Vercel. For additional 
	information regarding implementation specifics, click the "View the Source Code" button below.`,
    techStack: ["html", "css", "javascript", "react", "vercel"],
    projectLink: "https://tenzies-chene40-mcmasterca.vercel.app/",
    githubLink: "https://github.com/chene40/Tenzies",
    demoVideo:
      "https://github.com/chene40/Tenzies/assets/97481912/20395cd0-009d-4a2e-a6d4-f64881272a29",
    button1: "Play Tenzies",
  },
  {
    title: "Personal Website",
    imageData: {
      url: "/projects/WebsiteIcon.svg",
      alt: "An image of a dice",
    },
    description: `The website that you're currently looking at right now is also a personal project that I've created to get to 
	  know me better. In here, you will find my some of the work I've done, my experiences with software engineering/development, 
	  and some of my interests. Feel free to take a browse around and see if anything piques your interest!`,
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
