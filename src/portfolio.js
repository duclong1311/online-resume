/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jayce Tran",
  title: "Hi all, I'm Long",
  subTitle: emoji(
    "A passionate Front End Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/duclong1311",
  linkedin: "https://www.linkedin.com/in/long-tran-25549a343/",
  gmail: "duclong1311.work.com",
  facebook: "https://www.facebook.com/trduclong1311/",
  stackoverflow: "https://stackoverflow.com/users/27407489/duc-long",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hanoi University of Industry",
      logo: require("./assets/images/unnamed.png"),
      subHeader: "Bachelor of Information Systems",
      duration: "09/2020 - 06/2024"
    },
    {
      schoolName: "CodeGym Programmer Training Center",
      logo: require("./assets/images/1631407138886.jpg"),
      subHeader: "Frontend Web Developer Training course Certificate",
      duration: "06/2024 - 12/2024"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Top Engineering",
      companylogo: require("./assets/images/top-logo1.png"),
      date: "May 2023 – July 2023",
      desc: "Joined the Development team and, within three months, contributed to building the TERP application. This application streamlines storage management for the company, including functionalities for import/export operations, provider and customer management, stock tracking, and multi-currency handling across various providers and customers."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/coffee-shop.jpg"),
      projectName: "CodeGym Coffee",
      projectDesc:
        "A website designed for introducing & managing a coffee shop.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        },
        {
          name: "Source Code",
          url: "https://github.com/team1-c05wfe/coffee-smart-system"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bookee.png"),
      projectName: "Bookee",
      projectDesc:
        "A website for selling books, inspired by the Shopee e-commerce platform.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        },
        {
          name: "Source Code",
          url: "https://github.com/duclong1311/tiki-bookstore-clone"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Responsive Web Design",
      subtitle:
        "Completed a comprehensive course on building responsive websites using HTML5, CSS3, Flexbox, and CSS Grid. Gained expertise in designing layouts that adapt seamlessly to various screen sizes and devices while ensuring inclusivity through applied accessibility techniques.",
      image: require("./assets/images/freecodecamp-icon-2048x1381-57apvagh.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/duclong1311/responsive-web-design"
        },
        {
          name: "CSS3",
          url: "https://www.freecodecamp.org/certification/duclong1311/responsive-web-design"
        },
        {
          name: "Responsive",
          url: "https://www.freecodecamp.org/certification/duclong1311/responsive-web-design"
        },
        {
          name: "Animation",
          url: "https://www.freecodecamp.org/certification/duclong1311/responsive-web-design"
        }
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle:
        "Completed an in-depth course covering core JavaScript concepts, including ES6 syntax, object-oriented programming, and functional programming. Gained hands-on experience with algorithms and data structures such as arrays, stacks, queues, linked lists, and binary trees.",
      image: require("./assets/images/freecodecamp-icon-2048x1381-57apvagh.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/duclong1311/javascript-algorithms-and-data-structures-v8"
        },
        {
          name: "JavaScript",
          url: "https://www.freecodecamp.org/certification/duclong1311/javascript-algorithms-and-data-structures-v8"
        },
        {
          name: "OOP",
          url: "https://www.freecodecamp.org/certification/duclong1311/javascript-algorithms-and-data-structures-v8"
        },
        {
          name: "DSA",
          url: "https://www.freecodecamp.org/certification/duclong1311/javascript-algorithms-and-data-structures-v8"
        }
      ]
    },

    {
      title: "Scrum Essence",
      subtitle:
        "Acquired foundational knowledge of the Scrum framework, including its roles, artifacts, and ceremonies. Learned how to apply Agile principles to foster collaboration, enhance team productivity, and deliver value incrementally.",
      image: require("./assets/images/scrum-agile.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Jqms0UFpn7-B9NeIEr6TjK8_R3Han-Zi/view?usp=sharing"
        },
        {
          name: "Scrum",
          url: "https://drive.google.com/file/d/1Jqms0UFpn7-B9NeIEr6TjK8_R3Han-Zi/view?usp=sharing"
        },
        {
          name: "Agile",
          url: "https://drive.google.com/file/d/1Jqms0UFpn7-B9NeIEr6TjK8_R3Han-Zi/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84-969157294",
  email_address: "duclong1311.work@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
