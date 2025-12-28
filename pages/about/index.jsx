import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ImageCarousel from "../../components/ImageCarousel";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

/* =======================
   HEADING TEXT
======================= */
const headingText = "Innovation without  limits.";

/* =======================
   SKILLS DATA
======================= */
const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C", logo: "/images/c.png" },
      { name: "C++", logo: "/images/cpp.png" },
      { name: "Java", logo: "/images/java.png" },
      { name: "Python", logo: "/images/python.png" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", logo: "/images/html.png" },
      { name: "CSS", logo: "/images/css.png" },
      { name: "JavaScript", logo: "/images/javascript.png" },
      { name: "PHP", logo: "/images/php.png" },
      { name: "Flutter", logo: "/images/flutter.png" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", logo: "/images/mysql.png" },
      { name: "MongoDB", logo: "/images/mongodb.png" },
      { name: "Firebase", logo: "/images/firebase.png" },
    ],
  },
  {
    category: "Cloud & Security",
    items: [
      { name: "AWS", logo: "/images/aws.png" },
      { name: "Azure", logo: "/images/azure.png" },
      { name: "Selenium", logo: "/images/selenium.png" },
    ],
  },
];

/* =======================
   ABOUT DATA
======================= */
const aboutData = [
  { title: "skills", info: skills },
  {
    title: "experience",
    info: [
      {
        title: "Cloud Architect & Cybersecurity Intern – IIT Madras RP",
        stage: "Jun 2025",
        description:
          "Worked on AWS infrastructure, IAM policies, cloud security and vulnerability analysis.",
        images: Array.from({ length: 23 }, (_, i) => `/intern/exp${i + 1}.png`),
      },
    ],
  },
  {
    title: "projects",
    info: [
      {
        title: "Online Shopping Mart",
        stage: "Java, MySQL | Jun 2024 – Dec 2024",
        videoFile: "/videos/project1.mp4",
      },
      {
        title: "Healthcare Management System",
        stage: "PHP | Jan 2025 – Apr 2025",
        videoFile: "/videos/project2.mp4",
      },
      {
        title: "Brain Tumor Detection",
        stage: "Python, TensorFlow | July 2025 – Dec 2025",
        images: [
          "/images/p1.png",
          "/images/p2.png",
          "/images/p3.png",
          "/images/p4.png",
          "/images/p5.png",
          "/images/p6.png",
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "BE.CSE at Mepco Schlenk Engineering College",
        stage: "2023 – 2027 | CGPA 8.1",
        images: ["/images/mepco.jpg"],
      },
      {
        title: "CEOA Matriculation Higher Secondary School",
        stage: "2021 – 2023 | 89%",
        images: ["/images/ceoa.jpg"],
      },
      {
        title: "Sri Aurobindo Mira Matriculation Higher Secondary School",
        stage: "2008 – 2020 | SSLC",
        images: ["/images/sri.png"],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [blast, setBlast] = useState(false);
  const soundRef = useRef(null);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  /* AUTO RESET BLAST */
  useEffect(() => {
    if (blast) {
      soundRef.current?.play();
      const t = setTimeout(() => setBlast(false), 2500);
      return () => clearTimeout(t);
    }
  }, [blast]);

  return (
    <div
      className="relative h-full py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg15.jpg')" }}
    >
      <audio ref={soundRef} src="/sounds/magic.mp3" preload="auto" />

      {/* 🔥 FULL PAGE PARTICLES */}
      <AnimatePresence>
        {blast && (
          <motion.div
            className="fixed inset-0 z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Particles
              init={particlesInit}
              options={{
                fullScreen: true,
                particles: {
                  number: { value: 160 },
                  shape: { type: ["heart", "star"] },
                  color: {
                    value: ["#ff4ecd", "#ffd700", "#00ffff"],
                  },
                  size: { value: { min: 4, max: 10 } },
                  opacity: { value: 0.9 },
                  move: {
                    enable: true,
                    speed: 8,
                    outModes: { default: "destroy" },
                  },
                },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-red/60 z-0"></div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Circles />
      </div>
      <div className="absolute bottom-0 -left-[300px] hidden xl:block z-0 pointer-events-none">
        <Avatar />
      </div>

      <div className="relative z-30 container mx-auto flex flex-col xl:flex-row gap-x-10">
        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center text-center xl:text-left">

          {/* ✨ BLINKING MAGIC IMAGE (NO OUTLINE) */}
          <motion.img
            src="/bl1.png"
            alt="magic"
            className="w-24 h-24 mx-auto xl:mx-0 mb-6 cursor-pointer"
            animate={{
              opacity: [1, 0.45, 1],
              scale: [1, 1.18, 1],
              filter: [
                "drop-shadow(0 0 8px rgba(255,78,205,0.6))",
                "drop-shadow(0 0 20px rgba(255,215,0,0.9))",
                "drop-shadow(0 0 8px rgba(255,78,205,0.6))",
              ],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.3 }}
            onClick={() => setBlast(true)}
          />

          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            whileHover="hover"
            className="h2 inline-block cursor-pointer"
          >
            {headingText.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{ hover: { rotate: 360 } }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-8 text-white/70"
          >
            Computer Science Engineering student passionate about
            full-stack development and cybersecurity.
          </motion.p>
        </div>

        {/* RIGHT */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[48%]"
        >
          <div className="flex gap-x-6 mb-6 justify-center xl:justify-start">
            {aboutData.map((item, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`capitalize text-lg ${
                  index === i ? "text-accent" : "text-white/60"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {aboutData[index].title === "skills" ? (
            <div className="flex flex-col gap-6">
              {aboutData[index].info.map((cat, i) => (
                <div key={i}>
                  <h3 className="mb-3 font-semibold text-white/80">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {cat.items.map((skill, j) => (
                      <div key={j} className="w-24 text-center">
                        <img
                          src={skill.logo}
                          className="w-14 h-14 mx-auto object-contain hover:scale-110 transition"
                        />
                        <p className="mt-2 text-sm text-white/60">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {aboutData[index].info.map((item, i) => (
                <div key={i} className="text-white/70">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm">{item.stage}</p>
                  {item.description && (
                    <p className="text-xs mt-1 text-white/50">
                      {item.description}
                    </p>
                  )}
                  {item.videoFile && (
                   <video
  key={activeProject.videoFile}   // IMPORTANT
  controls
  muted
  playsInline
  preload="metadata"
  className="rounded-lg w-full h-80 bg-black"
>
  <source src={activeProject.videoFile} type="video/mp4" />
  Your browser does not support the video tag.
</video>


                  )}
                  {item.images && (
                    <ImageCarousel
                      images={item.images}
                      width={520}
                      height={300}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
