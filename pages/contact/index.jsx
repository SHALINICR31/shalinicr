import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaEnvelope, FaLinkedin, FaUser, FaPhone } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_0zwqzya",
        "template_fnzp2m9",
        e.target,
        "aOu08-z78-bzixHYH"
      )
      .then(
        () => {
          alert("Message sent successfully! 📩");
          e.target.reset();
        },
        () => {
          alert("Something went wrong ❌ Try again");
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      className="relative h-full bg-[length:65%_85%] bg-[position:bottom] bg-no-repeat"
      style={{ backgroundImage: "url('/g2.png')" }}
    >
      <div className="container mx-auto py-32 flex items-center justify-center h-full">
        <div className="flex flex-col xl:flex-row items-center xl:items-start w-full max-w-[1100px] gap-12">

          {/* LEFT: PHOTO */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="flex-shrink-0"
          >
            <img
              src="/b1.png"
              alt="Profile"
              className="w-40 h-40 xl:w-48 xl:h-48 rounded-full object-cover border-4 border-accent shadow-lg"
            />
          </motion.div>

          {/* CENTER: FORM */}
          <div className="flex flex-col w-full max-w-[600px] text-center xl:text-left">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="h2 mb-12"
            >
              Let’s build something{" "}
              <span className="text-accent">together</span>
            </motion.h2>

            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              autoComplete="off"
            >
              {/* NAME + EMAIL */}
              <div className="flex flex-col xl:flex-row gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isLoading}
                  className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/30 text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:border-accent transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  disabled={isLoading}
                  className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/30 text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:border-accent transition"
                />
              </div>

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                disabled={isLoading}
                className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/30 text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:border-accent transition"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your Message..."
                rows={5}
                required
                disabled={isLoading}
                className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/30 text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:border-accent transition resize-none"
              />

              {/* SEND BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="
                  relative
                  rounded-full
                  max-w-[180px]
                  px-8
                  py-3
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  border
                  border-white/40
                  bg-black/70
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:bg-black/90
                  hover:shadow-[0_0_25px_rgba(255,77,45,0.4)]
                  group
                "
              >
                <span className="transition-all duration-500 group-hover:-translate-y-[120%]">
                  {isLoading ? "Sending..." : "Send Message"}
                </span>

                <BsArrowRight
                  className="
                    absolute
                    text-[22px]
                    opacity-0
                    -translate-y-[120%]
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:-translate-y-0
                    text-accent
                  "
                />
              </button>
            </motion.form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="w-full max-w-[280px] bg-primary/60 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-accent">
              Contact Info
            </h3>

            <div className="flex flex-col gap-5 text-white/80">
              <div className="flex items-center gap-4">
                <FaUser className="text-accent" />
                <span>Shalini CR</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-accent" />
                <a
                  href="mailto:crshalini3101@gmail.com"
                  className="hover:text-accent transition"
                >
                  crshalini3101@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-accent" />
                <a
                  href="tel:+919585803202"
                  className="hover:text-accent transition"
                >
                  +91 9585803202
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-accent" />
                <a
                  href="https://www.linkedin.com/in/shalini-cr-a2021436b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  linkedin
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
