"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "Online Gym Management System (MERN)",
    description:
      "The gym management system for CJ gym offers a comprehensive solution using MERN stack. It manages members, schedules, staff, subscriptions, finances, inventory, and more.",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/1.png",
    github: "https://github.com/Yasindu07/gym-management-system.git",
  },
  {
    num: "02",   
    title: "Online Event Management System (JAVA)",
    description:
      "Online Event Management System created with JAVA, HTML, CSS, JavaScript, and MySQL. This web application utilizes the MVC architecture and JSP-Servlets for the backend.",
    stack: [
      { name: "Java" },
      { name: "MySQL" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/2.png",
    github: "https://github.com/Yasindu07/Event.lk.git",
  },
  {
    num: "03",
    title: "Packaging App (Flutter)",
    description:
      "Developed and contributed to the packaging app using Flutter and Developed to get MAC address of item using ble, get serial number by nfc and scan and store item details and package id by QR scanner",
    stack: [{ name: "Flutter" }, { name: "Node.js" }, { name: "SQL Server" }],
    image: "/assets/work/3.png",
    github: "",
  },
  {
    num: "04",
    title: "Online Customer Support System",
    description:
      "This project is a website for an online Customer Support System For Businesses named as 'BizzSup' created with PHP, HTML, CSS, Js, and MySQL. XAMPP used to configure PHP and MySQL",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    image: "/assets/work/4.png",
    github: "https://github.com/Yasindu07/BizzSup.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSideChange = (swiper) => {
    //get current slide index
    const index = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[index]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Project Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Project Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* git button */}
              <div className="flex items-center">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Git Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
