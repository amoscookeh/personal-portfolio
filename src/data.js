// Project Logos
import PayMePlsLogo from "./assets/logos/paymeplslogo.jpg";
import PayMeLahLogo from "./assets/logos/PayMeLahLogo.png";

// Company Logos
import kinexcsLogo from "./assets/logos/kinexcs_logo.svg";

// Adventure Thumbnails
import offthebeatenpath from "./assets/images/offthebeatenpath.jpeg";

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
            projectLogo: "../../assets/images/paymeplslogo.jpg",
            projectName: "Plant Growth Tracker (W.I.P)",
            projectDetails: "My first legitimate coding project! This telegram bot aims to aid in the bill splitting process by helping with the creation of polls to be sent to groups",
            projectLink: "https://t.me/PayMePls_Bot"
        },
        {
            projectLogo: PayMeLahLogo,
            projectName: "PayMeLah Bot",
            projectDetails: "My first legitimate coding project! This telegram bot aims to aid in the bill splitting process by helping with the creation of polls to be sent to groups",
            projectLink: "https://t.me/PayMePls_Bot"
        },
        {
            projectLogo: "../../assets/images/paymeplslogo.jpg",
            projectName: "Ai",
            projectDetails: "My first legitimate coding project! This telegram bot aims to aid in the bill splitting process by helping with the creation of polls to be sent to groups",
            projectLink: "https://t.me/PayMePls_Bot"
        },
        {
            projectLogo: "../../assets/images/paymeplslogo.jpg",
            projectName: "SeeTurtle",
            projectDetails: "My first legitimate coding project! This telegram bot aims to aid in the bill splitting process by helping with the creation of polls to be sent to groups",
            projectLink: "https://t.me/PayMePls_Bot"
        },
        {
            projectLogo: "../../assets/images/paymeplslogo.jpg",
            projectName: "PigUp!",
            projectDetails: "My roups",
            projectLink: "https://t.me/PayMePls_Bot"
        },
        {
            projectLogo: PayMePlsLogo,
            projectName: "PayMePls Bot",
            projectDetails: "My first legitimate coding project! This telegram bot aims to aid in the bill splitting process by helping with the creation of polls to be sent to groups",
            projectLink: "https://t.me/PayMePls_Bot"
        },
    ]
}

export const workExperiencesData = {
    details: "It has been my pleasure working with these companies, developing products ranging from Mobile and Web applications to Computer vision MVPs",
    experiences: [
        {
            companyLogo: kinexcsLogo,
            companyName: "Skittle",
            date: "Dec 2021 - Current",
            projectDetails: "Something something MVP",
            projectLink: ""
        },
        {
            companyLogo: kinexcsLogo,
            companyName: "Kinexcs Pte. Ltd.",
            date: "May 2021 - Aug 2021",
            role: "Software Development Intern",
            details: "Something something led a team of 4",
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
            link: ""
        },
        {
            thumbnail: offthebeatenpath,
            name: "Off the beaten path",
            details: "My first bike backpacking trip to Ha Giang, Vietnam",
            link: ""
        },
        {
            thumbnail: offthebeatenpath,
            name: "Off the beaten path",
            details: "My first bike backpacking trip to Ha Giang, Vietnam",
            link: ""
        },
        {
            thumbnail: offthebeatenpath,
            name: "Off the beaten path",
            details: "My first bike backpacking trip to Ha Giang, Vietnam",
            link: ""
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