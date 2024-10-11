import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Angular, as well as back-end technologies like Java, Springboot, Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Full Stack Developer",
    company: "Cognizant",
    description: `Developed and maintained web applications using Java, Springboot, JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Java", "Springboot", "Micorservices", "Mysql"],
  }
];

export const PROJECTS = [
  {
    title: "Smith & Nephew Prime Cloud Application",
    image: project1,
    description:
      "An Integrated fully functional cloud application with features like Dicom upload, View the Dicom, and user authentication.",
    technologies: ["Java","Springboot", "Angular", "Node.js", "Mysql"],
  },
  {
    title: "Metlife GSSP",
    image: project2,
    description:
      "An Insurance sector which fulfill the needs of the customers by providing insurance policies for life.Developed reports and dashboards using business intelligence tools such as AEM to track and analyze key performance metrics, including customer acquisition and satisfaction.",
    technologies: ["Java", "React", "Springboot", "Mongodb"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Movie Application",
    image: project4,
    description:
      "A platform for Viewing movies from IMDB Api, with features like search, commenting, and user profiles.",
    technologies: ["Java", "Springboot", "React", "Mongodb", "AWS"],
  },
];

export const CONTACT = {
  address: "3/122 Seventh Avenue, Hyderabad, 500072 ",
  phoneNo: "+91 7981805047 ",
  email: "shalem712@gmail.com",
};
