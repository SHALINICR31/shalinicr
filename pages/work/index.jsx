import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

/* =======================
   CERTIFICATIONS
======================= */
const certifications = [
  {
    title: "Infosys Springboard – Associate in IT Foundation",
    images: ["/certifi/c1.png","/certifi/c2.png","/certifi/c3.png","/certifi/c4.png","/certifi/c5.png","/certifi/c6.png","/certifi/c7.png","/certifi/c8.png","/certifi/c9.png","/certifi/c10.png"],
    description:
      "In this course I learned how to analyze raw data, clean datasets, apply statistics and convert data into meaningful insights.",
    learnings: ["Data cleaning","EDA","Statistics","Analytics use cases"],
  },
  {
    title: "Cisco – Cyber Threat Management",
    images: ["/certifi/c11.png","/certifi/c12.png","/certifi/c13.png"],
    description:
      "Learned cyber threat detection, mitigation techniques, and security fundamentals.",
    learnings: ["Threat analysis","Security monitoring","Risk mitigation"],
  },
  {
    title: "Coursera – Chatbot Development",
    images: ["/certifi/c14.png"],
    description:
      "Built chatbot logic and understood conversational AI fundamentals.",
    learnings: ["Chatbot logic","AI basics","User interaction"],
  },
  {
    title: "Coursera – Build a Full Website Using WordPress",
    images: ["/certifi/c15.png"],
    description:
      "Designed and deployed a complete website using WordPress.",
    learnings: ["WordPress","Website deployment","UI structuring"],
  },
  {
    title: "IIT Madras – Internship",
    images: ["/certifi/c16.png","/certifi/c17.png","/certifi/c18.png"],
    description:
      "Hands-on internship experience with real-world technical exposure.",
    learnings: ["Practical exposure","Team collaboration","Problem solving"],
  },
  {
    title: "Deloitte – Internship Program",
    images: ["/certifi/c19.png"],
    description:
      "Industry internship experience with professional workflow understanding.",
    learnings: ["Industry exposure","Professional skills"],
  },
  {
    title: "Microsoft Azure – Earned Badges",
    images: ["/certifi/z1.png","/certifi/z2.png","/certifi/z3.png","/certifi/z4.png"],
    link: "https://learn.microsoft.com/",
    description:
      "Azure cloud fundamentals and hands-on badge achievements.",
    learnings: ["Azure services","Cloud basics","Hands-on labs"],
  },
  {
    title: "DevOps Foundations",
    images: ["/certifi/c20.png","/certifi/c21.png","/certifi/c22.png"],
    description:
      "Learned DevOps lifecycle and CI/CD concepts.",
    learnings: ["CI/CD","Automation","DevOps basics"],
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    images: ["/certifi/c24.png","/certifi/c25.png"],
    description:
      "Oracle fundamentals and database concepts.",
    learnings: ["Databases","SQL","Oracle basics"],
  },
  {
    title: "NPTEL – Programming in C++",
    images: ["/certifi/c26.png"],
    description:
      "C++ programming fundamentals and problem solving.",
    learnings: ["C++","OOP","Logic building"],
  },
  {
    title: "NPTEL – Introduction to Large Language Models (LLMs)",
    images: ["/certifi/c23.png"],
    description:
      "Introduction to LLM concepts and AI models.",
    learnings: ["LLMs","AI concepts","Model understanding"],
  },
  {
    title: "ICAT – Career Aptitude Assessment",
    images: ["/certifi/c27.png"],
    description:
      "ICAT certification assessment.",
    learnings: ["Aptitude","Logical reasoning"],
  },
  {
    title: "SRM Certificate",
    images: ["/certifi/c28.png"],
    link: "https://www.deloitte.com/",
    description:
      "Participation and certification from SRM.",
    learnings: ["Technical exposure"],
  },
  {
    title: "Forage – Virtual Internship Experience",
    images: ["/certifi/f1.png"],
    link: "https://www.deloitte.com/",
    description:
      "Virtual internship and task-based learning.",
    learnings: ["Industry simulation","Task execution"],
  },
];

const Work = () => {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeCert ? "hidden" : "auto";
  }, [activeCert]);

  return (
    <section
      className="relative min-h-screen py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/n1.jpg')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10">
        <Circles />

        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 text-center mb-10"
          >
            Certifications  <span className="text-accent"></span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                onClick={() => setActiveCert(cert)}
                className="cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden
                hover:border-accent hover:shadow-[0_0_30px_rgba(241,48,36,0.4)]
                transition-all duration-300"
              >
                <img
                  src={cert.images[0]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">{cert.title}</h4>
                  <p className="text-accent text-sm mt-2">
                    Click to view →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL (UNCHANGED) */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="min-h-screen flex items-start justify-center py-16 px-4">
              <motion.div
                className="bg-primary w-full max-w-3xl rounded-xl p-6 relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                <button
                  onClick={() => setActiveCert(null)}
                  className="absolute top-4 right-4 text-xl text-accent"
                >
                  ✕
                </button>

                <div className="space-y-4 mb-6">
                  {activeCert.images.map((img, i) => (
                    <img key={i} src={img} className="w-full rounded-lg" />
                  ))}
                </div>

                <h3 className="text-2xl font-bold">{activeCert.title}</h3>

                <p className="text-white/70 mt-4">
                  {activeCert.description}
                </p>

                <h4 className="mt-6 text-accent font-semibold">
                  What I Learned
                </h4>

                <ul className="list-disc ml-5 mt-2 text-white/80">
                  {activeCert.learnings.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>

                {activeCert.link && (
                  <a
                    href={activeCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 bg-accent text-primary px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                  >
                    View Certificate 🔗
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Bulb />
    </section>
  );
};

export default Work;
