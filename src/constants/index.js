import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import porject5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2023",
    role: "Python Developer",
    company: "CodSoft",
    description: `Build web applications using Djanog framework, Python and PostgreSQL. Integrated with PostgreSQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS" , "Django", "Python", "PostgreSQL"],
  },
  {
    year: "2021 - 2022",
    role: "Software Developer",
    company: "GAOTek.Inc",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "mySQL", "React"],
  },
 
];

export const PROJECTS = [
  {
    title: "Payment Portal",
    image: porject5,
    description:
      "Web application with secure payment portal using React, Firebase, and the PayPal API, ensuring robust authentication mechanisms. This portal facilitates seamless and secure transactions with a user-friendly interface..",
    technologies: ["React","HTML","CSS","Tailwind","Firebase","javaScript","API"],
  },
  {
    title: "ERP Portal",
    image: project1,
    description:
      "A fully functional ERP website for college with features like adding time table, student login, teachers login and user authentication.",
    technologies: ["HTML", "CSS" , "Django", "Python", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS" ,"javaScript"],
  },
  {
    title: "Sentiment Analysis",
    image: project2,
    description:
      "An application for managing Sentiment of the text,it uses API for extracting movies text and giving Sentiment in Emoji.",
    technologies: ["Python", "Matplotlib","Seaborn"],
  },
  {
    title: "Mr. Jumpy",
    image: project4,
    description:
      "A platform to play a simple yet addicted game, made with Python, Pygame, graphics, pymusic",
    technologies: ["Python","Pygame","Pymusic"],
  },
];

export const CONTACT = {
  address: "9/32 Geeta Colony, Delhi",
  phoneNo: "+91 9650427993 ",
  email: "sudipto11bhukta@gmail.com",
};