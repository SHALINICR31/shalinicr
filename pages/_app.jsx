import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import RabbitVideo from "../components/RabbitVideo"; // ✅ Global rabbit video

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      {/* AnimatePresence handles page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route} // re-render motion div on route change
          className="h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Transition /> {/* optional transition overlay if you have */}
          <Component {...pageProps} /> {/* page content */}
        </motion.div>
      </AnimatePresence>

      {/* ✅ Global Left-Bottom Rabbit Video (appears on all pages) */}
      <RabbitVideo />
    </Layout>
  );
}

export default MyApp;
