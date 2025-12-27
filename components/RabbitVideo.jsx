import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RabbitVideo = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [voices, setVoices] = useState([]);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleClick = () => {
    setClicked(!clicked);

    // stop previous speech
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(
      "Welcome to my portfolio!"
    );

    // 🎀 FEMALE / GIRL VOICE PICK
    const femaleVoice =
      voices.find(v =>
        v.name.toLowerCase().includes("female") ||
        v.name.toLowerCase().includes("woman") ||
        v.name.toLowerCase().includes("zira") ||
        v.name.toLowerCase().includes("siri") ||
        v.name.toLowerCase().includes("google")
      ) || voices[0];

    if (femaleVoice) {
      msg.voice = femaleVoice;
    }

    msg.lang = "en-US";
    msg.rate = 0.95;
    msg.pitch = 1.4; // 👧 girl tone

    msg.onstart = () => setIsSpeaking(true);
    msg.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="fixed left-4 bottom-4 z-50">
      {/* 🐰 RABBIT IMAGE */}
      <motion.img
        src="/rab.png"   // 👉 public/rab.png
        alt="Rabbit"
        className="w-24 cursor-pointer rounded-xl shadow-lg select-none"
        animate={{
          y: clicked ? [0, -12, 0] : 0,
          rotate: clicked ? [0, 6, -6, 0] : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />

      {/* 💬 SPEECH BUBBLE */}
      {isSpeaking && (
        <motion.div
          className="absolute -top-16 left-1/2 -translate-x-1/2
                     bg-white text-black px-3 py-1 rounded-lg shadow-lg text-sm whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          🐰 Hi! 👋
        </motion.div>
      )}
    </div>
  );
};

export default RabbitVideo;
