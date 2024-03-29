// Project Logos
import PayMePlsLogo from "./assets/logos/paymeplslogo.jpg";
import PayMeLahLogo from "./assets/logos/PayMeLahLogo.png";
import PlantieLogo from "./assets/logos/plantielogo.png";
import Ailogo from "./assets/logos/Ailogo.png";
import pigupLogo from "./assets/logos/pigup.png";
import seeturtlelogo from "./assets/logos/seeturtlelogo.png";
import TeyelandLogo from "./assets/logos/TeyelandLogo.png";

// Company Logos
import kinexcsLogo from "./assets/logos/kinexcs_logo.svg";
import skittleLogo from "./assets/logos/skittle-logo.png";
import beeXLogo from "./assets/logos/BeeX.png";
import liminalLogo from "./assets/logos/liminalLogo.svg";

// Adventure Thumbnails
import offthebeatenpath from "./assets/images/offthebeatenpath.jpeg";
import myfirstroadtrip from "./assets/images/myfirstroadtrip.jpeg";
import thebeautifulcoastsofeurope from "./assets/images/thebeautifulcoastsofeurope.jpeg";
import theclimb from "./assets/images/theclimb.jpeg";
import firstdayinsv from "./assets/images/firstdayinsv.jpeg";
import presidiosf from "./assets/images/presidiosf.jpeg";
import carcamping from "./assets/images/carcamping.jpeg";

// Blog Components
import BeexReflection from "./components/blogs/BeexReflection";

// File path
import resumePath from "./assets/files/Amos_Liew_CV.pdf";

export const navData = [
  { itemName: "Home", itemId: "home", itemRef: "#home" },
  { itemName: "About Me", itemId: "about", itemRef: "#about" },
  { itemName: "My Works", itemId: "myworks", itemRef: "#myworks" },
  {
    itemName: "Work Experiences",
    itemId: "experiences",
    itemRef: "#experiences",
  },
  { itemName: "Adventures", itemId: "adventures", itemRef: "#adventures" },
];

export const heroData = {
  quote: "Life is best lived as an ",
  emphasis: "Adventure.",
};

export const aboutMeData = {
  general:
    "Hello there! I am Amos, an Information Systems Major from the National University of Singapore. But I believe that I am so much more than that...",
  precursor: "I am also ",
  cursors: [
    "a dream chaser",
    "an adventurer",
    "an engineer",
    "a videographer",
    "a leader",
  ],
  general2:
    "So follow along as I try to capture my journey in this Personal Portfolio!",
};

export const myWorksData = {
  details:
    "Just trying to make life better for others, one project at a time...",
  workItems: [
    {
      projectLogo: TeyelandLogo,
      projectName: "Teyeland",
      projectDetails:
        "As a part of NES' annual Ground Zero Startathon and Stanford's Annual Treehacks, my team and I pitched the idea of assessing Myopia using Computer Vision. Our pitch clinched the second runner up position.",
      projectLink: "https://linktr.ee/teyeland",
      inProgress: false,
      techStacks: [],
    },
    {
      projectLogo: PlantieLogo,
      projectName: "Plantie",
      projectDetails:
        "As one of the co-founders of Plantie, I am in the midst of developing a Plant Growth Tracker using Computer Vision, providing valuable data for a gamified home-based smart gardening experience.",
      projectLink: "https://youtu.be/pgNHAWsMWC0",
      inProgress: true,
      techStacks: [],
    },
    {
      projectLogo: PayMeLahLogo,
      projectName: "PayMeLah Bot",
      projectDetails:
        "In order to better the bill splitting process that we University students experience, PayMeLah bot was created to simplify the process through the use of a Telegram Bot, a Web App, and OCR technology.",
      projectLink: "https://t.me/PayMeLahBot",
      inProgress: false,
      techStacks: ["JavaScript", "Python"],
    },
    {
      projectLogo: Ailogo,
      projectName: "Ai",
      projectDetails:
        "Through the use of PyTorch, we utilise NLP models to analyse Telegram chat data for one's love interest, displaying interesting insights into the user's romantic conversations.",
      projectLink:
        "https://devpost.com/software/ai-demystify-attraction-with-artificial-intelligence",
      inProgress: true,
      techStacks: [],
    },
    {
      projectLogo: seeturtlelogo,
      projectName: "SeeTurtle",
      projectDetails:
        "As Team WhaleFood's (5 pax) debut Hackathon project, we created a frontend website, showcasing a potential hardware micro-plastic cleaner for oceans designed in the likeness of a Turtle!",
      projectLink: "https://devpost.com/software/seeturtle-team-whalefood",
      inProgress: false,
      techStacks: [],
    },
    {
      projectLogo: pigupLogo,
      projectName: "PigUp!",
      projectDetails:
        "Under the NUS Orbital Programme, Team WhaleDone (2 pax) built PigUp, a mobile game implemented using Flutter. Its goal being to promote better personal finance practices by making it fun and interactive.",
      projectLink:
        "https://www.youtube.com/watch?v=MUo0a8nrcT4&ab_channel=PigUp",
      inProgress: false,
      techStacks: [],
    },
    {
      projectLogo: PayMePlsLogo,
      projectName: "PayMePls Bot",
      projectDetails:
        "My first legitimate coding project! This telegram bot aims to aid in the bill splitting process by helping with the creation of polls to be sent to groups",
      projectLink: "https://t.me/PayMePls_Bot",
      inProgress: false,
      techStacks: [],
    },
  ],
};

export const workExperiencesData = {
  details:
    "It has been my pleasure working with these companies, developing products ranging from Mobile and Web applications to Computer vision MVPs",
  experiences: [
    {
      companyLogo: liminalLogo,
      companyName: "Liminal Insights Inc.",
      date: "Aug 2022 - Aug 2023",
      role: "Software Engineer Intern",
      details:
        "Under the NUS Overseas Programme (NOC) in Silicon Valley, I interned as a SWE at Liminal. I boosted data collection by 10% with multithreading, and enhanced team efficiency by 25% with tools like automated QA scripts and an OPCUA test server. Honestly the best one year of my life!",
      projectLink: "https://www.liminalinsights.com/",
      techStacks: [],
    },
    {
      companyLogo: beeXLogo,
      companyName: "BeeX Autonomous Systems",
      date: "May 2022 - Jul 2022",
      role: "Software Engineer Intern",
      details:
        "Under the SgInnovate Infinity Series program, I embarked on an internship at BeeX. My responsibilities included developing dynamic 3D features for point cloud data visualization and optimizing user efficiency through a lazy loading-based search feature, leading to a 70% reduction in search time.",
      projectLink: "https://beex.sg/",
      techStacks: [],
    },
    {
      companyLogo: skittleLogo,
      companyName: "Bellos",
      date: "Dec 2021 - May 2022",
      role: "Software Engineer Intern",
      details:
        "During my time in Skittle (now Bellos), I was given the opportunity to design and implement the fullstack implementation of a Reservation feature as part of improving their MVP. I was also tasked to redesign and shift their existing database from a NoSQL environment to one that utilises PSQL.",
      projectLink: "https://www.linkedin.com/company/bellos/",
      techStacks: [],
    },
    {
      companyLogo: kinexcsLogo,
      companyName: "Kinexcs",
      date: "May 2021 - Aug 2021",
      role: "Software Engineer Intern",
      details:
        "During my 3 month stint at Kinexcs, I was given the opportunity to lead a team of 6 other interns, as their software development team lead, to concurrently improve their existing mobile application, while developing an MVP for their newest Computer Vision Physiotherapist.",
      workLink: "https://www.kinexcs.com/",
      techStacks: [],
    },
  ],
};

export const adventureData = {
  details:
    "This section is dedicated to the hobby that started off my appreciation for adventure - Travel Videography. Come journey with me below!",
  adventures: [
    {
      thumbnail: offthebeatenpath,
      name: "Off the beaten path",
      details: "My first bike backpacking trip to Ha Giang, Vietnam",
      link: "https://youtu.be/XKokZrvBFk4",
    },
    {
      thumbnail: thebeautifulcoastsofeurope,
      name: "The Beautiful Coasts of Europe",
      details: "My attempt at depicting the beauty of the coastline in Europe",
      link: "https://youtu.be/ILE85VI9anc",
    },
    {
      thumbnail: theclimb,
      name: "The Climb",
      details:
        "A trip where I got to live, eat and explore with the locals of East Java",
      link: "https://youtu.be/aAucitdIqMM",
    },
    {
      thumbnail: myfirstroadtrip,
      name: "My First Roadtrip",
      details:
        "Excitement and fear from my first overseas roadtrip, captured in video",
      link: "https://youtu.be/LDfyTf5VsYU",
    },
    {
      thumbnail: firstdayinsv,
      name: "First Day as an SV SWE Intern",
      details:
        "A scrappy vlog and a short reflection of my first day on the job in the Bay Area!",
      link: "https://youtu.be/Eq5hY4H49Ew",
    },
    {
      thumbnail: presidiosf,
      name: "Exploring Presidio in SF",
      details:
        "Celebrating my housemate's birthday by exploring San Francisco!",
      link: "https://youtu.be/LEBEbQurNnw",
    },
    {
      thumbnail: carcamping,
      name: "First car camping adventure",
      details: "One of my favourite memories - car camping in Sequoia NP!",
      link: "https://youtu.be/l6EDXOlk3M8",
    },
  ],
};

export const socialsData = {
  phoneNumber: "+65 86145787",
  email: "amos.liew@u.nus.edu",
  linkedin: "https://www.linkedin.com/in/amosliew13",
  instagram: "https://www.instagram.com/amos_cookeh/",
  github: "https://github.com/amoscookeh",
  outro: "I hope you enjoyed your adventure with me! Feel free to contact me: ",
  resumePath: resumePath,
};

export const allStacks = [
  //   Java: { stackLink: ""},
  { name: "JavaScript", stackLink: "" },
  { name: "Python", stackLink: "" },
  //   Dart: { stackLink: ""},
  //   JakartaEE: { stackLink: ""},
  //   PSQL: { stackLink: ""},
  //   ReactJS: { stackLink: ""},
  //   ExpressJS: { stackLink: ""},
  //   NextJS: { stackLink: ""},
  //   TailwindCSS: { stackLink: ""},
  //   Flutter: { stackLink: ""},
  //   Firebase: { stackLink: ""},
  //   Heroku: { stackLink: ""},
  //   MongoDB: { stackLink: ""},
  //   Git: { stackLink: ""},
  //   OpenCV: { stackLink: ""},
];

export const blogData = [
  {
    name: "My BeeX Journey",
    component: BeexReflection(),
    thumbnail: beeXLogo,
    date: "29th July 2022",
    synopsis:
      "A reflection of my 3 months as a Software Engineering intern @ BeeX",
  },
];
