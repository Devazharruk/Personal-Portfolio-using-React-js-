import { motion } from "framer-motion";
import "./hero.scss";

// Variants for text animations
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Variants for sliding text animations
const slidingTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      duration: 80,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AZHAR ALI</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the latest work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down"
          />
        </motion.div>
      </div>
      <motion.div
        variants={slidingTextVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Writer Web Developer Designer Photographer
      </motion.div>
      <div className="imageContainer">
        <img src="hero.png" alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
