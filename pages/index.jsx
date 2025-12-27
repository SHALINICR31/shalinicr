import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";
import { FaGift, FaHeart, FaRegHeart, FaComment } from "react-icons/fa";

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => (liked ? prev - 1 : prev + 1));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 100 }}>
      {/* Gift Box Icon */}
      <motion.div
        onClick={toggleOpen}
        whileHover={{ scale: 1.2 }}
        style={{ cursor: "pointer", fontSize: "30px" }}
      >
        <FaGift color="#ff66cc" />
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop: "10px",
              width: "250px",
              background: "#1a1a2e",
              color: "#fff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 0 10px #ff66cc"
            }}
          >
            {/* Like Section */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <button
                onClick={handleLike}
                style={{ cursor: "pointer", background: "none", border: "none", color: liked ? "red" : "#fff", fontSize: "20px" }}
              >
                {liked ? <FaHeart /> : <FaRegHeart />}
              </button>
              <CountUp end={likesCount} duration={0.5} />
              <span> Likes</span>
            </div>

            {/* Comments */}
            <div>
              <form onSubmit={handleCommentSubmit} style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add comment"
                  style={{ flex: 1, padding: "5px", borderRadius: "5px", border: "none" }}
                />
                <button type="submit" style={{ padding: "5px 10px", borderRadius: "5px", background: "#ff66cc", border: "none", color: "#fff" }}>
                  Post
                </button>
              </form>
              <div style={{ maxHeight: "100px", overflowY: "auto" }}>
                {comments.map((c, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ margin: "5px 0", fontSize: "14px" }}
                  >
                    <FaComment /> {c}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-glow-toggle"
          >
            <TypeAnimation sequence={["Hi, I’m Shalini"]} speed={5} cursor={true} />
          </motion.h1>

          {/* subtitle */}
          <motion.p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            {[
              "Currently pursuing Computer Science Engineering at MEPCO Schlenk Engineering College (2023–2027),",
              "I am passionate about building scalable software solutions.",
              "My interests span full-stack development, cloud technologies, cybersecurity, and AI/ML,",
              "with a focus on creating impactful applications for real-world use cases."
            ].map((line, index) => (
              <motion.span
                key={index}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.5, duration: 0.8 }}
              >
                {line}
              </motion.span>
            ))}
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-big xl:bg-[position:98%_90%] xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>

      {/* Gift Box */}
      <GiftBox />
    </div>
  );
};

export default Home;
