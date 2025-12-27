import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaTrophy,
  FaHeart,
  FaDownload,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { fadeIn } from "../../variants";

const PersonalHighlights = () => {
  const [active, setActive] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  /* =======================
     DATA
  ======================= */
  const data = {
    achievements: [
      {
        title: "Proficiency Award – Academic Excellence",
        desc: "Awarded by Sri Aurobindo Mira School, Madurai for consistently achieving top academic ranks",
        img: "/me1.png",
      },
      {
        title: "Merit-Based Scholarship",
        desc: "Received a scholarship from MSEC for maintaining a CGPA above 8 throughout the academic year 2023-2024 and 2024-2025.",
        img: "/me2.png",
      },
      {
        title: "Office Bearer – NSS Club (2024–2025)",
        desc: "Led and coordinated college-level NSS initiatives including volunteering activities.",
        img: "/me3.png",
      },
      {
        title: "Kabaddi – District Level Player",
        desc: "District-level Kabaddi winner and Interschool Kabaddi tournament winner.",
        img: "/me4.png",
      },
      {
        title: "Badminton Player",
        desc: "Achieved runner-up status in school-level badminton, marking a notable accomplishment in inter-school sports events.",
        img: "/me5.png",
      },
    ],
    hobbies: [
      {
        title: "Content Creation & Video Editing",
        desc: "Creating YouTube content and editing videos with focus on storytelling and creativity.",
        img: "/ho1.jpg",
      },
      {
        title: "Design, Web Development & AI",
        desc: "Interested in UI/UX design, web development, and exploring AI-based technologies.",
        img: "/ho2.jpg",
      },
      {
        title: "Drawing & Visual Art",
        desc: "Passionate about sketching and visual art, using drawing as a creative outlet to improve observation, patience, and attention to detail.",
        img: "/ho3.jpg",
      },
    ],
    resume: [
      {
        title: "My Resume",
        desc: "Download my complete resume to view my education, skills, projects, achievements, and experience.",
        file: "resume/Resume_Shalini_CR.pdf",
      },
    ],
  };

  const slides = active ? data[active] : [];

  const nextSlide = () =>
    setSlideIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative min-h-screen pt-20 pb-36 flex flex-col items-center bg-no-repeat"
      style={{
        backgroundImage: "url('/pp.png')",
        backgroundSize: "50%",
        backgroundPosition: "center 92%",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-red/70" />

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* TITLE */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="h2 mb-16 text-center"
        >
          Personal <span className="text-accent">Highlights</span>
        </motion.h2>

        {/* CIRCLE BUTTONS */}
        <div className="flex justify-center gap-12 flex-wrap mb-16">
          {[
            { key: "achievements", icon: <FaTrophy />, label: "Achievements" },
            { key: "hobbies", icon: <FaHeart />, label: "Hobbies" },
            { key: "resume", icon: <FaDownload />, label: "Resume" },
          ].map((item) => (
            <motion.button
              key={item.key}
              onClick={() => {
                setActive(item.key);
                setSlideIndex(0);
              }}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              className={`w-36 h-36 rounded-full flex flex-col items-center justify-center
              backdrop-blur-md border border-white/20 transition-all duration-300
              ${
                active === item.key
                  ? "bg-accent text-primary shadow-[0_0_50px_rgba(241,48,36,0.6)]"
                  : "bg-[#1a1f4d]/80 text-white hover:border-accent hover:text-accent hover:shadow-[0_0_40px_rgba(241,48,36,0.4)]"
              }`}
            >
              <motion.span
                variants={{ hover: { rotate: 360 } }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-3xl mb-1"
              >
                {item.icon}
              </motion.span>
              <span className="mt-1 text-sm font-semibold">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && slides.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-6 py-12"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="bg-primary rounded-2xl max-w-4xl w-full p-10 relative shadow-2xl text-center"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-6 right-6 text-accent text-2xl"
              >
                <FaTimes />
              </button>

              {slides[slideIndex].img && (
                <img
                  src={slides[slideIndex].img}
                  alt={slides[slideIndex].title}
                  className="w-[80%] max-h-48 mx-auto object-contain rounded-xl mb-6"
                />
              )}

              <h3 className="text-3xl font-bold text-accent mb-4">
                {slides[slideIndex].title}
              </h3>

              <p className="text-white/80 text-lg mb-8">
                {slides[slideIndex].desc}
              </p>

              {slides.length > 1 && (
                <div className="flex justify-center gap-10 text-2xl">
                  <button
                    onClick={prevSlide}
                    className="text-white/70 hover:text-accent"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="text-white/70 hover:text-accent"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}

              {active === "resume" && slides[slideIndex]?.file && (
                <a
                  href={`/${slides[slideIndex].file}`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent text-primary px-10 py-4 rounded-full font-semibold text-lg mt-10 hover:scale-105 transition"
                >
                  <FaDownload />
                  Download Resume
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PersonalHighlights;
