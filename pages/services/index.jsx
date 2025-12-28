import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

/* =======================
   TYPING ANIMATION VARIANTS
======================= */
const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const typingText = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" },
  },
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
    title: "Selenium Testing",
    date: "September 2025",
    description: "Hands-on experience with Selenium for basic web automation and test case execution.",
    points: [
      "Automated basic browser interactions using Selenium WebDriver",
      "Performed form submission and UI validation",
      "Executed simple test cases on web applications",
    ],
  },
  {
    title: "AWS",
    date: "October 2025",
    images: ["/recent/aws.png"],
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
  {
    title: "Azure",
    date: "December 2025",
    images: ["/recent/z1.png", "/recent/z2.png", "/recent/z3.png", "/recent/z4.png"],
    description: "Azure fundamentals and hands-on cloud labs.",
    points: ["Azure services", "Cloud concepts", "Hands-on labs"],
  },
  {
    title: "NS3 Simulation",
    date: "November 2025",
    images: ["/recent/ns3.png"],
    description: "Network simulation using NS3.",
    points: ["Network simulation", "Packet analysis", "Routing"],
  },
  {
    title: "OSSEC-HIDS",
    date: "October 2025",
    images: ["/recent/r1.png","/recent/r2.png","/recent/r3.png","/recent/r4.png","/recent/r5.png","/recent/r6.png","/recent/r7.png"],
    description: "Host-based intrusion detection system configuration and analysis.",
    points: ["Log monitoring", "Threat detection", "Security alerts"],
  },
  {
    title: "Cisco Packet Tracer",
    date: "October 2025",
    images: ["/recent/cc1.png", "/recent/cc2.png"],
    description: "Network design and simulation.",
    points: ["Routing", "Switching", "Network topology"],
  },
  {
    title: "MetaMask",
    date: "November 2025",
    images: ["/recent/b1.png","/recent/b2.png","/recent/b3.png","/recent/b4.png","/recent/b5.png","/recent/b6.png","/recent/b7.png","/recent/b8.png","/recent/b9.png","/recent/b10.png","/recent/b11.png","/recent/b12.png","/recent/b13.png"],
    description: "MetaMask wallet setup and blockchain interaction.",
    points: ["Wallet creation", "Blockchain basics", "Web3 interaction"],
  },
];

/* =======================
   SERVICES COMPONENT
======================= */
const Services = () => {
  const [imgIndex, setImgIndex] = useState({}); // Track image index per project

  return (
    <div
      className="relative min-h-screen py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/o1.jpg')" }}
    >
      {/* DARK OVERLAY */}
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
              <motion.span
                key={index}
                variants={typingText}
                className={char === " " ? "mx-1" : ""}
              >
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
                className="relative mb-28 flex items-start"
              >
                {/* DOT */}
                <span className="absolute left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 shadow-[0_0_25px_#f13024]" />

                {/* ROTATING CIRCLE */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                  className={`${
                    left ? "ml-auto pr-20 text-right" : "mr-auto pl-20 text-left"
                  }`}
                >
                  <div
                    className="w-56 rounded-xl flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_55px_rgba(241,48,36,0.55)] transition-all duration-300 p-6"
                  >
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                    <p className="text-accent text-sm mt-1">{item.date}</p>
                    <p className="text-white/70 text-sm mt-2">{item.description}</p>

                    {/* VIDEO */}
                    {item.videoFile && (
                      <video
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        className="rounded-lg w-full h-56 object-cover bg-black mt-4"
                      >
                        <source src={item.videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {/* IMAGES */}
                    {item.images && item.images.length > 0 && (
                      <>
                        <img
                          src={item.images[imgIndex[item.title] || 0]}
                          className="rounded-lg w-full h-56 object-cover mt-4"
                        />
                        {item.images.length > 1 && (
                          <div className="flex gap-2 mt-2 justify-center">
                            {item.images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setImgIndex(prev => ({ ...prev, [item.title]: i }))}
                                className={`w-3 h-3 rounded-full ${
                                  (imgIndex[item.title] || 0) === i ? "bg-accent" : "bg-white/30"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </>
                    )}

                    {/* POINTS */}
                    <ul className="mt-4 list-disc ml-5 text-sm text-white/80">
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;
