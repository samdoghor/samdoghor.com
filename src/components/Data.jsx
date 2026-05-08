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
  DiDocker,
  DiDjango,
} from "react-icons/di";
import { MdMarkEmailRead, MdOutlineWhatsapp } from "react-icons/md";
import FlaskOriginal from "react-devicons/flask/original-wordmark";
import KubernetesPlain from "react-devicons/kubernetes/plain";
import TypescriptPlain from "react-devicons/typescript/plain";
import NodejsPlain from "react-devicons/nodejs/plain";
import { SiPostman, SiSwagger, SiMarkdown, SiWindows, SiVercel } from "react-icons/si";
import Typewriter from "react-ts-typewriter";

const currentYear = new Date().getFullYear();

export const headerLogoData = [
  {
    id: 1,
    logo: "<SD />",
    name: "Samuel Doghor",
    link2: "/",
  },
];

export const headerNavData = [
  { id: 1, nav: "Home", link: "/" },
  { id: 2, nav: "Careers", link: "/#careers" },
  { id: 3, nav: "Projects", link: "/#projects" },
  { id: 4, nav: "Stack", link: "/#stack" },
  { id: 5, nav: "Contact", link: "/#contact" },
  { id: 6, nav: "Blog", link: "/blog" },
];

export const HeroData = [
  {
    id: 1,
    name: "Samuel Doghor",
    stack: "Software Engineer • Piping Engineer",
    summary:
      "I design and deliver robust software systems and practical piping engineering solutions for critical infrastructure projects.",
    profileImage: "/img/doghs.jpg",
    code1: (
      <Typewriter
        loop
        speed={80}
        delay={2000}
        text=' "Building reliable systems in code and in physical infrastructure." '
      />
    ),
  },
];

export const CareerTracksData = [
  {
    id: 1,
    title: "Software Engineering",
    blurb:
      "Backend-first engineer focused on APIs, platform architecture, automation, and maintainable developer experiences.",
    highlights: ["Python & JavaScript", "API & System Design", "Cloud Deployment"],
  },
  {
    id: 2,
    title: "Piping Engineering",
    blurb:
      "Piping engineer supporting drafting, routing strategy, fabrication packages, and field-ready technical documentation.",
    highlights: ["Piping Layout", "Isometric Workflows", "Construction Support"],
  },
];

export const ServiceData = [
  {
    id: 1,
    service:
      "I operate at the intersection of digital and industrial delivery—building software that scales while understanding how engineering projects are planned and executed on site.",
  },
];

export const ServiceStatsData = [
  { id: 1, value: "05+", label: "Years Building Solutions" },
  { id: 2, value: "20+", label: "Projects Delivered" },
  { id: 3, value: "02", label: "Career Tracks" },
  { id: 4, value: "04+", label: "Companies Collaborated" },
];

export const TestimoniesData = [{ id: 1 }];

export const ProjectData = [
  {
    id: 1,
    text: "Featured Work",
    subtitle: "A selection of software and engineering projects.",
  },
];

export const ProjectDData = [
  {
    id: 1,
    Title: "Myte",
    GitHub: "https://github.com/samdoghor/myte",
    Website: "#",
    Description:
      "A CLI toolkit that scaffolds Python web projects with opinionated templates and guided setup.",
    Image: "/img/myte.png",
    Status: "Active",
    Domain: "Software",
  },
  {
    id: 2,
    Title: "Nigerian Food Database API",
    GitHub: "https://github.com/samdoghor/NG-food-DB-APIs",
    Website: "#",
    Description:
      "REST API platform that structures Nigerian dishes data with Flask and PostgreSQL for easy integration.",
    Image: "/img/the_nigeria_food_db_api.png",
    Status: "In Development",
    Domain: "Software",
  },
  {
    id: 3,
    Title: "Gomerce",
    GitHub: "https://github.com/samdoghor/GomerceBE",
    Website: "#",
    Description:
      "Backend foundation for ecommerce workflows with auth, persistence, and deployment-focused architecture.",
    Image: "/img/gomerce.png",
    Status: "In Development",
    Domain: "Software",
  },
];

export const PipingProjectsData = [
  {
    id: 1,
    title: "Industrial Facility Piping Packages",
    description:
      "Contributed to piping package preparation, discipline coordination, and technical document readiness for industrial jobs.",
  },
  {
    id: 2,
    title: "Site-Oriented Engineering Support",
    description:
      "Supported practical routing decisions and constructability reviews to improve execution quality and safety outcomes.",
  },
  {
    id: 3,
    title: "Cross-Disciplinary Delivery",
    description:
      "Worked across software and engineering stakeholders to improve visibility, reporting, and project communication.",
  },
];

export const TechnologiesData = [
  {
    id: 1,
    heading: "Technology Stack",
    subtitle: "Core tools I use to design, build, and deliver.",
  },
];

export const TechnologiesDData = [
  { id: 1, label: "Git", icon: <FaGitAlt />, category: "Version Control" },
  { id: 2, label: "Python", icon: <FaPython />, category: "Language" },
  { id: 3, label: "JavaScript", icon: <DiJavascript />, category: "Language" },
  { id: 4, label: "TypeScript", icon: <TypescriptPlain color="#FFFFFF" />, category: "Language" },
  { id: 5, label: "React", icon: <DiReact />, category: "Frontend" },
  { id: 6, label: "Node.js", icon: <NodejsPlain color="#FFFFFF" />, category: "Runtime" },
  { id: 7, label: "PostgreSQL", icon: <DiPostgresql />, category: "Database" },
  { id: 8, label: "MySQL", icon: <DiMysql />, category: "Database" },
  { id: 9, label: "MongoDB", icon: <DiMongodb />, category: "Database" },
  { id: 10, label: "Docker", icon: <DiDocker />, category: "DevOps" },
  { id: 11, label: "Kubernetes", icon: <KubernetesPlain color="#FFFFFF" />, category: "DevOps" },
  { id: 12, label: "Django", icon: <DiDjango />, category: "Backend" },
  { id: 13, label: "Flask", icon: <FlaskOriginal color="#FFFFFF" />, category: "Backend" },
  { id: 14, label: "Postman", icon: <SiPostman />, category: "API" },
  { id: 15, label: "Swagger", icon: <SiSwagger />, category: "API" },
  { id: 16, label: "Vue", icon: <FaVuejs />, category: "Frontend" },
  { id: 17, label: "Vercel", icon: <SiVercel />, category: "Deployment" },
  { id: 18, label: "Markdown", icon: <SiMarkdown />, category: "Docs" },
  { id: 19, label: "Ubuntu", icon: <FaUbuntu />, category: "OS" },
  { id: 20, label: "Windows", icon: <SiWindows />, category: "OS" },
];

export const ContactData = [
  {
    id: 1,
    heading: "Let’s Work Together",
    title: "Open to software and piping engineering collaborations.",
    country: "/img/nigeria_flag.png",
    logo: "/img/manchester-united-logo.png",
    image: "/img/doghs.jpg",
    email: "talkto@samdoghor.com",
    whatsapp: "https://wa.me/qr/CGHZ23GBYBKLC1",
    location: "Nigeria",
    availability: "Available for freelance and full-time opportunities",
  },
];

export const contactSocialData = [
  { id: 1, label: "Email", icon: <MdMarkEmailRead />, link: "mailto:talkto@samdoghor.com" },
  { id: 2, label: "WhatsApp", icon: <MdOutlineWhatsapp />, link: "https://wa.me/qr/CGHZ23GBYBKLC1" },
  { id: 3, label: "Instagram", icon: <FaInstagramSquare />, link: "https://www.instagram.com/samdoghor" },
  { id: 4, label: "Github", icon: <FaGithub />, link: "https://www.github.com/samdoghor" },
  { id: 5, label: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/samdoghor" },
  { id: 6, label: "Twitter", icon: <FaTwitter />, link: "https://www.twitter.com/samdoghor" },
];

export const FooterData = [
  {
    id: 1,
    copyright: "All rights reserved © Samuel Doghor",
    year: currentYear,
  },
];
