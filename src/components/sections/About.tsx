import { motion } from "motion/react";

import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from "../../hoc/SectionWrapper";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 items-start">
      <motion.div variants={textVariant()} className="flex-1">
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-light mb-2">01 / Introduction</p>
        <h2 className="text-white text-5xl md:text-7xl font-light tracking-tight">
          <span className="font-bold">Overview</span>.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "", 0.1, 1)}
        className="flex-[1.5] mt-4"
      >
        <p className="text-secondary text-xl md:text-2xl font-light leading-relaxed">
          I'm a dedicated BICT undergraduate at the University of Ruhuna with a
          strong interest in technology and problem-solving. I am seeking a
          challenging opportunity to enhance my technical and professional skills
          while contributing effectively to an organization. I have experience in
          Java, C, and Web Development, and I'm always eager to learn and adapt
          to new technologies.
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
