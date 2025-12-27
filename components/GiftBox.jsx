import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaGift, FaHeart, FaRegHeart } from "react-icons/fa";

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // Optional: load likes from localStorage / backend
  useEffect(() => {
    const savedLikes = localStorage.getItem("globalLikes");
    if (savedLikes) setLikesCount(Number(savedLikes));
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => {
      const newCount = liked ? prev - 1 : prev + 1;
      localStorage.setItem("globalLikes", newCount); // save globally
      return newCount;
    });
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 100 }}>
      {/* Blinking Gift Box Icon */}
      <motion.div
        onClick={toggleOpen}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        whileHover={{ scale: 1.3 }}
        style={{ cursor: "pointer", fontSize: "30px", color: "#ff66cc" }}
      >
        <FaGift />
      </motion.div>

      {/* Like popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: "10px",
            width: "200px",
            background: "#1a1a2e",
            color: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 0 10px #ff66cc",
            textAlign: "center"
          }}
        >
          <button
            onClick={handleLike}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: liked ? "red" : "#fff",
              fontSize: "24px",
              marginBottom: "10px"
            }}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <div style={{ color: "#ff66cc", fontWeight: "bold", fontSize: "16px" }}>
            <CountUp end={likesCount} duration={0.5} /> Likes
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GiftBox;
