import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import GiftBox from "../components/GiftBox"; // ✅ import GiftBox

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Shalini | Portfolio</title>
        <meta
          name="description"
          content="Shalini is a Full-stack web developer "
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Shalini CR" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      {/* top-left decorations */}
      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}

      {/* ✅ Gift Box persistent on all pages */}
      <GiftBox />
    </main>
  );
};

export default Layout;
