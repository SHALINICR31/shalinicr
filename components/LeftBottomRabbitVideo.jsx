import { motion } from "framer-motion";
import { useState } from "react";

const LeftBottomRabbitVideo = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);

    // Stop previous speech
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(
      "Vanakkam! Naan unga personal highlights rabbit. Click pannuna naan pesuven!"
    );
    msg.lang = "ta-IN";
    msg.rate = 0.95;
    msg.pitch = 1.1;

    msg.onstart = () => setIsSpeaking(true);
    msg.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <motion.video
        src="/videos/rabbit.mp4"
        className="w-24 cursor-pointer rounded-xl shadow-lg"
        autoPlay
        loop
        muted
        animate={{
          y: clicked ? [0, -10, 0] : 0,
          rotate: clicked ? [0, 5, -5, 0] : 0,
        }}
        transition={{ duration: 0.8 }}
        onClick={handleClick}
      />

      {isSpeaking && (
        <motion.div
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-lg shadow-lg text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          🐰 Naan pesuthu irukken!
        </motion.div>
      )}
    </div>
  );
};

export default LeftBottomRabbitVideo;
