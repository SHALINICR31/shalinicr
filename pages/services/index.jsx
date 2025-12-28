import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

/* =======================
   TYPING ANIMATION VARIANTS
======================= */
const typingContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const typingText = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

/* =======================
   FULL LEARNING DATA
======================= */
const learningData = [
  {
    title: "App Development",
    date: "November 2025",
    videoFile: "https://res.cloudinary.com/dxc9qdbfw/video/upload/v1766889482/sih_fnev3g.mp4",
    description:
      "Practiced component-based architecture, responsive layouts, animations using Framer Motion and clean UI design.",
    points: ["Reusable React components", "Responsive UI using Tailwind", "Framer Motion animations"],
  },
  {
    title: "AWS",
    date: "October 2025",
    pdfFile: "/recent/aws.pdf", // PDF added
    description: "AWS Cloud fundamentals and services learning.",
    points: ["IAM", "EC2", "Cloud fundamentals"],
  },
  {
    title: "Try Hack Me",
    date: "November 2025",
    images: ["/recent/try.png"],
    description: "Cybersecurity hands-on labs and challenges.",
    points: ["Linux basics", "Networking", "Security concepts"],
  },
  // ... other items
];

/* =======================
   SERVICES COMPONENT
======================= */
const Services = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div
      className="relative min-h-screen py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/o1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <Circles />

      <div className="relative container mx-auto px-6">
        {/* ===== TYPING TITLE ===== */}
        <div className="flex justify-center mb-28">
          <motion.h2
            className="h2 text-center flex"
            variants={typingContainer}
            initial="hidden"
            animate="visible"
          >
            {"Small moves, strong impact".split("").map((char, index) => (
              <motion.span key={index} variants={typingText} className={char === " " ? "mx-1" : ""}>
                {char}
              </motion.span>
            ))}
            <motion.span
              className="ml-1 text-accent"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              |
            </motion.span>
          </motion.h2>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-accent/40 -translate-x-1/2" />
          {learningData.map((item, index) => {
            const left = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={fadeIn(left ? "right" : "left", 0.3)}
                initial="hidden"
                animate="show"
                className="relative mb-28 flex items-center"
              >
                <span className="absolute left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 shadow-[0_0_25px_#f13024]" />

                {/* ROTATING CIRCLE */}
                <motion.div
                  onClick={() => {
                    setActiveProject(item);
                    setImgIndex(0);
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                  className={`${left ? "ml-auto pr-20 text-right" : "mr-auto pl-20 text-left"} cursor-pointer`}
                >
                  <div className="w-56 h-56 rounded-full flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_55px_rgba(241,48,36,0.55)] transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                    <p className="text-accent text-sm mt-1">{item.date}</p>
                    <p className="text-white/70 text-sm mt-2">Click to inspect →</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-primary rounded-xl max-w-6xl w-full p-6 relative grid md:grid-cols-2 gap-8"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              <button
                className="absolute top-4 right-4 text-accent text-2xl"
                onClick={() => setActiveProject(null)}
              >
                ✕
              </button>

              {/* MEDIA */}
              <div>
                {/* PDF */}
                {activeProject.pdfFile && (
                  <iframe
                    src={activeProject.pdfFile}
                    className="rounded-lg w-full h-80 mt-4"
                    title={activeProject.title}
                  />
                )}

                {/* VIDEO */}
                {activeProject.videoFile && (
                  <video
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="rounded-lg w-full h-80 object-cover bg-black mt-4"
                  >
                    <source src={activeProject.videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* IMAGES */}
                {activeProject.images && activeProject.images.length > 0 && (
                  <>
                    <img
  src={activeProject.images[imgIndex] || activeProject.images[0]} // ✅ fixed
  className="rounded-lg w-full h-80 object-cover mt-4"
/>

                    {activeProject.images.length > 1 && (
                      <div className="flex gap-3 mt-4 justify-center">
                        {activeProject.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setImgIndex(i)}
                            className={`w-3 h-3 rounded-full ${
                              imgIndex === i ? "bg-accent" : "bg-white/30"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-3xl font-bold">{activeProject.title}</h3>
                <p className="text-accent mt-1">{activeProject.date}</p>
                <p className="text-white/70 mt-4">{activeProject.description}</p>
                <ul className="mt-4 list-disc ml-5 text-sm text-white/80">
                  {activeProject.points?.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Bulb />
    </div>
  );
};

export default Services;
