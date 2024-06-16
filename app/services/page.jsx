"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I create responsive, visually appealing websites using HTML, CSS, JavaScript, and React,NEXT and build robust back-end systems with Node.js, Express, and databases like MongoDB and SQL.",
    herf: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "I develop native Android apps with Kotlin and cross-platform apps using Flutter, ensuring a consistent and delightful user experience across all devices.",
    herf: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "I design intuitive and visually compelling user interfaces with Figma and Adobe XD, focusing on user research, wireframing, and prototyping for a seamless user experience.",
    herf: "",
  },
  {
    num: "04",
    title: "E-commerce Development",
    description:
      "I build and customize e-commerce platforms using woocommerce,React, Node.js, and MongoDB, integrating secure payment gateways for a smooth shopping experience.",
    herf: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transitions-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.herf}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
