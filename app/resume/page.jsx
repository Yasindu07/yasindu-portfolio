"use client";

import { icons } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiPhp,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFlutter,
  SiKotlin,
  SiGit,
  SiWordpress,
  SiWoocommerce,
  SiMysql,
} from "react-icons/si";

const about = {
  tittle: "About Me",
  description:
    "Hello I'm Yasindu Kalhara. I am a Software Engineering Undergraduate @ SLIIT I am always looking to learn new things and improve my skills. I am a hardworking and dedicated individual who is always looking for new challenges. I am excited to work with you and help you bring your ideas to life.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Yasindu Kalhara",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 76 101 2634",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Yasindu Balasooriya",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldValue: "yasindubalasooriya125@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  tittle: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",

  items: [
    {
      companyName: "Company Name",
      position: "Position",
      duration: "2019 - 2021",
    },
    {
      companyName: "Company Name",
      position: "Position",
      duration: "2019 - 2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  tittle: "My education",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",

  items: [
    {
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      degree:
        "BSc (Hons) in Information Technology Specialising in Software Engineering",
      duration: "2022 - Present",
    },
    {
      institution: "Mahinda Rajapksha College, Homagama",
      degree: "GCE Advanced Level",
      duration: "2018 - 2020",
    },
    {
      institution: "Siri Piyarathana National College, Padukka",
      degree: "GCE Ordinary Level",
      duration: "2011 - 2017",
    },
  ],
};

const skills = {
  tittle: "My skills",
  description:
    "I have experience in a wide range of technologies and tools. Here are some of the technologies I have worked with:",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiPhp />,
      name: "PHP",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiWordpress />,
      name: "WordPress",
    },
    {
      icon: <SiWoocommerce />,
      name: "WooCommerce",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className = "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div>content</div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
