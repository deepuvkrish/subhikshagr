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
  username: "Subhiksha G R",
  title: "Hi all, I'm Subhiksha",
  subTitle: emoji(
    "A passionate Business Analyst,responsible in bridging the gap between IT and the business using data analytics to assess processes, determine requirements, and deliver data-driven recommendations & reports to executives and stakeholders."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cn8rbxMBqWeLCAnI3ByGMVeInSYzPRc6/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/deepuvkrish/subhigr",
  linkedin: "https://www.linkedin.com/in/subhiksha-rajeskannan/",
  gmail: "subhiksharajes@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "Conduct research and analysis in order to come up with solutions to business problems"
    ),
    emoji("Help an organisation achieve its goals by analysing data, assessing processes and systems, creating solutions and planning for the future"),
    emoji(
      "Perform, evaluate, and communicate thorough quality assurance at every stage of systems development"
    )
  ],
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Microsoft 365",
      fontAwesomeClassname: "fab fa-microsoft"

    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Velalar College of Engineering and Technology",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "B.E in Civil Engineering",
      duration: "May 2018 - April 2022",
      desc: "Secured overall",
      cgpa: "8.8 CGPA",
      descBullets: [
        "Design Project on Planning, Designing, Analyzing and Estimation of Inn Building",
        "Real time model of Ferro-cement Water tank",
        "Model pattern of Underground Water tunnel"
      ]
    },
    {
      schoolName: "Sri Saraswathi Vidhya Mandhir Matric Hr Sec School",
      logo: require("./assets/images/ssvm.png"),
      subHeader: "Higher Secondary in PCMB",
      duration: "May 2016 - April 2018",
      desc: "Secured overall",
      cgpa: "94%"
    },
    {
      schoolName: "BVB Matric Higher Secondary School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "High School Matriculation",
      duration: "Jun 2006 - May 2016",
      desc: "Secured Overall",
      cgpa: "67%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "20%"
    },
    {
      Stack: "SQL",
      progressPercentage: "50%"
    },
    {
      Stack: "Power BI",
      progressPercentage: "50%"
    },
    {
      Stack: "Dynamic 365 | Supply Chain Management",
      progressPercentage: "70%"
    },

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    {
      color: "#7dee8a",
      role: "Junior Site Engineer",
      company: "Shree Venkateswara Private Limited",
      companylogo: require("./assets/images/venki.jpg"),
      date: "May 2022 – May 2022",
      descBullets: [
        "Maritime Rescue Coordination Centre",
      ]
    },
    {
      color: "#9ce4f4",
      role: "Junior Business Analyst",
      company: "Pratian Technologies",
      companylogo: require("./assets/images/pratian.png"),
      date: "June 2018 – Present",
      desc: "Assisted Recruiter departments and managed with staff to improve client satisfaction",
      descBullets: [
        "JobCheck",
      ]
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/job.jpg"),
      projectName: "Job Check",
      projectDesc: "A webapp for hunting jobs",
      footerLink: [
        {
          name: "check Here",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ferr.jpg"),
      projectName: "Capstone Project",
      projectDesc: "Real time model of Ferro-cement Water tank",
      footerLink: [
        {
          name: "check Here",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/under.jpg"),
      projectName: "Capstone Project",
      projectDesc: "Model pattern of Underground Water tunnel",
      footerLink: [
        {
          name: "check Here",
          url: "#"
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
      title: "Dynamics 365 | Functional Consultant",
      subtitle:
        "Microsoft Certified: Dynamics 365 Supply Chain Management Functional Consultant Associate",
      image: require("./assets/images/micro.png"),
      imageAlt: "Microsoft 365 logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Uy_foK1p8JfryNrZzbUUe-86G1BDyTMm/view?usp=sharing"
        },
        {
          name: "Verify Here",
          url: "https://learn.microsoft.com/en-in/users/subhikshagr-2915/credentials/ba4ee7c6a5021129"
        },
      ]
    },
    {
      title: "Microsoft Power BI",
      subtitle:
        "Completed Workshop of Business Intelligence using power BI",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Microsoft Power BI",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1kx-qdbIq28sKg-MLJzZyNF5zs7TQeR9I/view?usp=sharing"
        }
      ]
    },


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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or want to hire me? My Inbox is open for all.",
  number: "+91-890-3646-404",
  email_address: "subhiksharajes@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
