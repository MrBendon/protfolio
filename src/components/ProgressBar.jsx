import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.0001 });
  return (
    <motion.div
      className="fixed  top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-blue-400 z-50 origin-left "
      style={{ scaleX: scaleX }}
    ></motion.div>
  );
};

export default ProgressBar;
