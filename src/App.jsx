import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import SectionOne from "./sections/SectionOne";
import Gallery from "./sections/Gallery";
import BackToTopButton from "./components/BackToTopButton";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "./components/ProgressBar";
// import { motion, useScroll } from "framer-motion";

function App() {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(true);
  // const { scrollYProgress } = useScroll();
  // console.log(scrollYProgress);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-200px 0px 0px 0px",
      threshold: 0.0,
    };
    const callback = ([info]) => {
      // console.log(info);
      if (!info.isIntersecting) {
        setIsIntersecting(false);
      } else {
        setIsIntersecting(true);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {isIntersecting || <BackToTopButton></BackToTopButton>}
      <ProgressBar></ProgressBar>
      <Navbar></Navbar>
      <div className="absolute top-0 left-0 w-full h-screen opacity-0 -z-10" ref={ref}></div>
      <SectionOne></SectionOne>
      <Gallery></Gallery>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
