// Project Logos
import PayMePlsLogo from "./assets/logos/paymeplslogo.jpg";
import PayMeLahLogo from "./assets/logos/PayMeLahLogo.png";
import PlantieLogo from "./assets/logos/plantielogo.png";
import Ailogo from "./assets/logos/Ailogo.png";
import pigupLogo from "./assets/logos/pigup.png";
import seeturtlelogo from "./assets/logos/seeturtlelogo.png";

// Company Logos
import kinexcsLogo from "./assets/logos/kinexcs_logo.svg";
import skittleLogo from "./assets/logos/skittle-logo.png";

// Adventure Thumbnails
import offthebeatenpath from "./assets/images/offthebeatenpath.jpeg";
import myfirstroadtrip from "./assets/images/myfirstroadtrip.jpeg";
import thebeautifulcoastsofeurope from "./assets/images/thebeautifulcoastsofeurope.jpeg";
import theclimb from "./assets/images/theclimb.jpeg";

export const navData = [
    { itemName: 'Home', itemId:"home", itemRef: '#home' },
    { itemName: 'About Me', itemId:"about", itemRef: '#about' },
    { itemName: 'My Works', itemId:"myworks", itemRef: '#myworks' },
    { itemName: 'Work Experiences', itemId:"experiences", itemRef: '#experiences' },
    { itemName: 'Adventures', itemId:"adventures", itemRef: '#adventures' },
]

export const heroData = {
    quote: "Life is best lived as an ",
    emphasis: "Adventure."
}

export const aboutMeData = {
    general: "Hello there! I am Amos, an Information Systems Major from the National University of Singapore. But I believe that I am so much more than that...",
    precursor: "I am also ",
    cursors: [
        "a dream chaser", "an adventurer", "a developer", "a videographer", "a leader"
    ],
    general2: "So follow along as I try to capture my journey in this Personal Portfolio!"
}

export const myWorksData = {
    details: "Just trying to make life better for others, one project at a time...",
    workItems: [
        {
            projectLogo: PlantieLogo,
            projectName: "Plantie",
            projectDetails: "As one of the co-founders of Plantie, I am in the midst of developing a Plant Growth Tracker using Computer Vision, providing valuable data for a gamified home-based smart gardening experience.",
            projectLink: "https://t.me/PayMePls_Bot",
            inProgress: true
        },
        {
            projectLogo: PayMeLahLogo,
            projectName: "PayMeLah Bot",
            projectDetails: "In order to better the bill splitting process that we University students experience, PayMeLah bot was created to simplify the process through the use of a Telegram Bot, a Web App, and OCR technology.",
            projectLink: "https://t.me/PayMeLahBot",
            inProgress: false
        },
        {
            projectLogo: Ailogo,
            projectName: "Ai",
            projectDetails: "Through the use of PyTorch, we utilise NLP models to analyse Telegram chat data for one's love interest, displaying interesting insights into the user's romantic conversations.",
            projectLink: "https://devpost.com/software/ai-demystify-attraction-with-artificial-intelligence",
            inProgress: true
        },
        {
            projectLogo: seeturtlelogo,
            projectName: "SeeTurtle",
            projectDetails: "As Team WhaleFood's (5 pax) debut Hackathon project, we created a frontend website, showcasing a potential hardware micro-plastic cleaner for oceans designed in the likeness of a Turtle!",
            projectLink: "https://devpost.com/software/seeturtle-team-whalefood",
            inProgress: false
        },
        {
            projectLogo: pigupLogo,
            projectName: "PigUp!",
            projectDetails: "Under the NUS Orbital Programme, Team WhaleDone (2 pax) built PigUp, a mobile game implemented using Flutter. Its goal being to promote better personal finance practices by making it fun and interactive.",
            projectLink: "https://www.youtube.com/watch?v=MUo0a8nrcT4&ab_channel=PigUp",
            inProgress: false
        },
        {
            projectLogo: PayMePlsLogo,
            projectName: "PayMePls Bot",
            projectDetails: "My first legitimate coding project! This telegram bot aims to aid in the bill splitting process by helping with the creation of polls to be sent to groups",
            projectLink: "https://t.me/PayMePls_Bot",
            inProgress: false
        },
    ]
}

export const workExperiencesData = {
    details: "It has been my pleasure working with these companies, developing products ranging from Mobile and Web applications to Computer vision MVPs",
    experiences: [
        {
            companyLogo: skittleLogo,
            companyName: "Skittle",
            date: "Dec 2021 - Current",
            role: "Software Development Intern",
            details: "During my time in Skittle, I was given the opportunity to design and implement the fullstack implementation of a Reservation feature as part of improving their MVP. I was also tasked to redesign and shift their existing database from a NoSQL environment to one that utilises PSQL.",
            projectLink: ""
        },
        {
            companyLogo: kinexcsLogo,
            companyName: "Kinexcs Pte. Ltd.",
            date: "May 2021 - Aug 2021",
            role: "Software Development Intern",
            details: "During my 3 month stint at Kinexcs, I was given the opportunity to lead a team of 6 other interns, as their software development team lead, to concurrently improve their existing mobile application, while developing an MVP for their newest Computer Vision Physiotherapist.",
            workLink: ""
        },
    ]
}

export const adventureData = {
    details: "This section is dedicated to the hobby that started off my appreciation for adventure - Travel Videography. Come journey with me below!",
    adventures: [
        {
            thumbnail: offthebeatenpath,
            name: "Off the beaten path",
            details: "My first bike backpacking trip to Ha Giang, Vietnam",
            link: "https://youtu.be/XKokZrvBFk4"
        },
        {
            thumbnail: thebeautifulcoastsofeurope,
            name: "The Beautiful Coasts of Europe",
            details: "My attempt at depicting the beauty of the coastline in Europe",
            link: "https://youtu.be/ILE85VI9anc"
        },
        {
            thumbnail: theclimb,
            name: "The Climb",
            details: "A trip where I got to live, eat and explore with the locals of East Java",
            link: "https://youtu.be/aAucitdIqMM"
        },
        {
            thumbnail: myfirstroadtrip,
            name: "My First Roadtrip",
            details: "Excitement and fear from my first overseas roadtrip, captured in video",
            link: "https://youtu.be/LDfyTf5VsYU"
        },
    ]
}

export const socialsData = {
    phoneNumber: "+65 86145787",
    email: "amos.liew@u.nus.edu",
    linkedin: "https://www.linkedin.com/in/amosliew13",
    instagram: "https://www.instagram.com/amos_cookeh/",
    github: "https://github.com/amoscookeh",
    outro: "I hope you enjoyed your adventure with me! Feel free to contact me: "
}