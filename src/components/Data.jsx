/* eslint-disable react-refresh/only-export-components */
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
  FaGitAlt,
  FaPython,
  FaVuejs,
  FaUbuntu,
} from "react-icons/fa";
import {
  DiJavascript,
  DiReact,
  DiPostgresql,
  DiMysql,
  DiMongodb,
  DiHeroku,
  DiDocker,
  DiDjango,
} from "react-icons/di";
import { MdFlashOn, MdMarkEmailRead, MdOutlineWhatsapp } from "react-icons/md";
import FlaskOriginal from "react-devicons/flask/original-wordmark";
import KubernetesPlain from "react-devicons/kubernetes/plain";
import TypescriptPlain from "react-devicons/typescript/plain";
import NodejsPlain from "react-devicons/nodejs/plain";
import {
  SiPostman,
  SiSwagger,
  SiMarkdown,
  SiWindows,
  SiVercel,
  SiRender,
} from "react-icons/si";
import Typewriter from "react-ts-typewriter";

const currentYear = new Date().getFullYear();

// Header

export const headerLogoData = [
  {
    id: 1,
    logo: "<SD />",
    name: "Samuel, Doghor",
    link: "https://github.com/samdoghor/samdoghor.com",
    link2: "/",
  },
];

export const headerNavData = [
  {
    id: 1,
    nav: "Portfolio",
    link: "/",
  },
  {
    id: 2,
    nav: "Blog",
    link: "/blog",
  },
  {
    id: 3,
    nav: "Courses",
    link: "/courses",
  },
  {
    id: 4,
    nav: "Contact",
    link: "/contact",
  },
];

export const HeroData = [
  {
    id: 1,
    name: "Samuel, Doghor",
    stack: "Software Engineer",
    code1: (
      <Typewriter
        loop={true}
        speed={100}
        delay={2000}
        text=' "const App = () => {return (<div >App </div>)} export default App" '
      />
    ),
    code2: ' "const App = () => {return (<div > ',
    code3: (
      <Typewriter
        loop={true}
        speed={100}
        delay={2000}
        text=' App </div>)} export default App" '
      />
    ),
  },
];

export const ServiceData = [
  {
    id: 1,
    service:
      "Backend focused engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences.",
    service2: "I design & build scalable systems",
  },
];

export const TestimoniesData = [
  {
    id: 1,
  },
];

// Projects

export const ProjectData = [
  {
    in: 1,
    text: "Featured Projects",
    code1: (
      <Typewriter loop={true} speed={100} delay={2000} text=" Loading... " />
    ),
  },
];

export const ProjectDData = [
  {
    id: 1,
    Title: "Myte",
    GitHub: "https://github.com/samdoghor/myte",
    Website: "#",
    Description:
      "Myte is a simple command-line tool for creating boilerplate code for python web projects. It simplifies the project setup process by providing a user-friendly interface to choose the project name, framework, and setup complexity.",
    Image: "/img/myte.png",
    Status: "Active",
  },
  {
    id: 2,
    Title: "Nigerian Food Database API",
    GitHub: "https://github.com/samdoghor/NG-food-DB-APIs",
    Website: "#",
    Description:
      "The Nigerian Food Database API is a RESTful API built with Flask-RESTful and PostgreSQL to provide information on various Nigerian dishes.",
    Image: "/img/the_nigeria_food_db_api.png",
    Status: "Development",
  },
  {
    id: 3,
    Title: "Gomerce",
    GitHub: "https://github.com/samdoghor/GomerceBE",
    Website: "#",
    Description:
      "E-commerce app enhanced with JWT authentication, SqlAlchemy, **SQLite** persistence and deployment scripts via Docker. It has all the ready-to-use bare minimum essentials.",
    Image: "/img/gomerce.png",
    Status: "Development",
  },
];

export const TechnologiesData = [
  {
    in: 1,
    heading: "Technologies",
  },
];

export const TechnologiesDData = [
  {
    id: 1,
    label: "Git",
    icon: <FaGitAlt />,
    category: "Version C.",
  },
  {
    id: 2,
    label: "Python",
    icon: <FaPython />,
    category: "Language",
  },
  {
    id: 3,
    label: "Javascript",
    icon: <DiJavascript />,
    category: "Language",
  },
  {
    id: 4,
    label: "React",
    icon: <DiReact />,
    category: "Library",
  },
  {
    id: 5,
    label: "PostgreSQL",
    icon: <DiPostgresql />,
    category: "Database",
  },
  {
    id: 6,
    label: "MySQL",
    icon: <DiMysql />,
    category: "Database",
  },
  {
    id: 7,
    label: "MongDB",
    icon: <DiMongodb />,
    category: "Database",
  },
  {
    id: 8,
    label: "Heroku",
    icon: <DiHeroku />,
    category: "Cloud",
  },
  {
    id: 9,
    label: "Docker",
    icon: <DiDocker />,
    category: "Containerization",
  },
  {
    id: 10,
    label: "Django",
    icon: <DiDjango />,
    category: "Framework",
  },
  {
    id: 11,
    label: "Flask",
    icon: <FlaskOriginal color="#FFFFFF" />,
    category: "Framework",
  },
  {
    id: 12,
    label: "Kubernetes",
    icon: <KubernetesPlain color="#FFFFFF" />,
    category: "Orchestration",
  },
  {
    id: 13,
    label: "TypeScript",
    icon: <TypescriptPlain color="#FFFFFF" />,
    category: "Language",
  },
  {
    id: 14,
    label: "NodeJS",
    icon: <NodejsPlain color="#FFFFFF" />,
    category: "Runtime Env.",
  },
  {
    id: 15,
    label: "Vue",
    icon: <FaVuejs />,
    category: "Framework",
  },
  {
    id: 16,
    label: "Postman",
    icon: <SiPostman />,
    category: "Tester/Doc.",
  },
  {
    id: 17,
    label: "Swagger UI",
    icon: <SiSwagger />,
    category: "Documentation",
  },
  {
    id: 18,
    label: "MarkDown",
    icon: <SiMarkdown />,
    category: "Language",
  },
  {
    id: 19,
    label: "Ubuntu",
    icon: <FaUbuntu />,
    category: "OS",
  },
  {
    id: 20,
    label: "Windows",
    icon: <SiWindows />,
    category: "OS",
  },
  {
    id: 21,
    label: "Vercel",
    icon: <SiVercel />,
    category: "Deployment",
  },
  {
    id: 22,
    label: "Render",
    icon: <SiRender />,
    category: "Deployment",
  },
];

export const ContactData = [
  {
    in: 1,
    heading: "Contact",
    title: "Quick Reach / Socials",
    ticon: <MdFlashOn />,
    country: "/img/nigeria_flag.png",
    logo: "/img/manchester-united-logo.png",
    image: "/img/doghs.jpg",
  },
];

export const contactSocialData = [
  {
    id: 1,
    label: "Email",
    icon: <MdMarkEmailRead />,
    link: "mailto:talkto@samdoghor.com",
  },
  {
    id: 2,
    label: "WhatsApp",
    icon: <MdOutlineWhatsapp />,
    link: "https://wa.me/qr/CGHZ23GBYBKLC1",
  },
  {
    id: 3,
    label: "Instagram",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/samdoghor",
  },
  {
    id: 4,
    label: "Github",
    icon: <FaGithub />,
    link: "https://www.github.com/samdoghor",
  },
  {
    id: 5,
    label: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/samdoghor",
  },
  {
    id: 6,
    label: "Twitter",
    icon: <FaTwitter />,
    link: "https://www.twitter.com/samdoghor",
  },
  {
    id: 7,
    label: "Portfolio Repo",
    icon: <FaGithub />,
    link: "https://github.com/samdoghor/samdoghor.com",
  },
];

export const FooterData = [
  {
    in: 1,
    copyright: "All right reserved © Samuel Doghor ",
    year: currentYear,
  },
];
