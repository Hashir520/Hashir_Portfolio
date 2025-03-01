import React from "react";
import { motion } from "motion/react";
import Sidebar from "./components/Sidebar";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import Hashir from "../src/components/image/Hashir.png";

import bl from "../src/components/image/bl.jpg";
import ec from "../src/components/image/ec.webp";
import ta from "../src/components/image/task.webp";
import cal from "../src/components/image/cal.jpg"
function App() {
  return (
    <div className="overflow-hidden min-h-screen lg:pl-64">
      <Sidebar />

      {/* Main Content */}
      <main className="px-4 py-8">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[calc(100vh-2rem)] flex items-center justify-center relative"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-72 h-72  rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96  rounded-full filter blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8 relative">
              {/*  image ... */}
              <div className="w-[300px] h-[300px] mx-auto mb-6 rounded-full overflow-hidden glass-effect p-1">
                <motion.img
                  initial={{ opacity: 0.4, scale: 0.3 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                  src={Hashir}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hi, I'm <span className="gradient-text">Hashir</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              className="text-xl md:text-2xl text-white  mb-12 max-w-2xl mx-auto"
            >
               Expert in building scalable, high-performance React applications with clean architecture and optimized UI/UX
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500  to-green-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get in touch
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                href="#projects"
                className="px-8 py-4 rounded-full glass-effect text-white font-medium hover:bg-white/20 transition-colors"
              >
                View my work
              </motion.a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:min-h-screen">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold text-center mb-12 gradient-text">
              About Me
            </h2>
            <div className="glass-effect rounded-2xl p-8">
              <motion.p
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="text-white   mb-6 text-2xl font-semibold leading-10 text-justify "
              >
               I'm a passionate React Developer with 1 years of experience building dynamic and scalable web applications. I specialize in React, Tailwind CSS, JavaScript, and modern web technologies, crafting clean, maintainable code to deliver seamless user experiences.
              </motion.p>
              <div className="my-6 w-[100%] h-[1px] bg-green-300">

              </div>
              <motion.p
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="md:mt-10 text-white leading-9 text-justify text-2xl"
              >
              I thrive on solving complex problems and bringing ideas to life with elegant, efficient solutions. Whether it's designing responsive UIs with Tailwind CSS, optimizing performance in React, or building robust backends, I enjoy every aspect of development.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold text-center mb-12 gradient-text">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <motion.div
    initial={{ opacity: 0, y: -200 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="PowerPoint" level="Advanced" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: -200 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="CV making" level="Advanced" />
  </motion.div>

 

  <motion.div
    initial={{ opacity: 0, y: 200 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="Machine Learning" level="Expert" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: -150 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="Web Design" level="Expert" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 150 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="React JS" level="Expert" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: -150 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="JavaScript" level="Expert" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 150 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="HTML" level="Expert" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="Python" level="Beginner" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="Tailwind CSS" level="Advanced" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 200 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="Database" level="Beginner" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: -200 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="Java" level="Beginner" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="Mobile Application" level="Beginner" />
  </motion.div>
  <motion.div
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="Digital Marketing" level="Beginner" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <SkillBadge name="CSS" level="Expert" />
  </motion.div>
</div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">


<div className="max-w-4xl mx-auto">
  {/* Animated Heading */}
  <motion.h2
    className="text-6xl font-bold text-center mb-12 gradient-text"
    initial={{ opacity: 0, y: -200 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    Featured Projects
  </motion.h2>

  {/* Animated Project Cards */}
  <div className="grid md:grid-cols-2 gap-8">
    {[
      {
        title: "E-commerce Platform",
        description:
          "A full-featured e-commerce platform with real-time inventory management and payment processing.",
        image: ec,
        technologies: ["React","Tailwind CSS"  ],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Blogging Website",
        description:
          "A full-featured e-commerce platform with real-time inventory management and payment processing.",
        image: bl,
        technologies: ["HTML", "CSS", "JS", ],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates and team features.",
        image: ta,
        technologies: ["React", "Tailwind CSS", "Material-UI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Culture Legacy",
        description:
          "A cultural legacy is the inheritance of cultural traits that influence our success or failure.",
        image: cal,
        technologies: ["React", "Tailwind CSS", "Material-UI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ].map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9, y: 200 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false }}

        transition={{
          duration: 1.3,
          ease: "easeOut",
          delay: index * 0.2, // Staggered animation
        }}
      >
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          technologies={project.technologies}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />
      </motion.div>
    ))}
  </div>
</div>


        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
          initial={{ opacity: 0, scaleY:0 }}
          whileInView={{ opacity: 1, scaleY:1}}
          viewport={{ once: false }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          
          className="max-w-4xl mx-auto ">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Get in Touch
            </h2>
            <div className="glass-effect rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-green-500  to-green-600  text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
