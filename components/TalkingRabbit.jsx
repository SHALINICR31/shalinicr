import { useState } from "react";

const TalkingRabbit = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    // Already pesitu irundha stop
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(
      "Vanakkam! Naan unga portfolio rabbit. En mela click pannina naan pesuven!"
    );

    msg.lang = "ta-IN"; // Tamil voice
    msg.rate = 0.95;    // Speed
    msg.pitch = 1.1;   // Cute sound 😄

    msg.onstart = () => setIsSpeaking(true);
    msg.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <video
        src="/videos/rabbit.mp4"
        autoPlay
        loop
        muted
        onClick={speak}
        className={`w-[360px] cursor-pointer transition-transform duration-300 ${
          isSpeaking ? "scale-105" : ""
        }`}
      />

      <p className="mt-4 text-white text-sm opacity-70">
        🐰 Click the rabbit
      </p>
    </div>
  );
};

export default TalkingRabbit;
