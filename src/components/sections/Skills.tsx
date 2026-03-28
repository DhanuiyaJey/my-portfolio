import { motion } from "motion/react";
import { lazy, Suspense } from "react";

import { technologies } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";
import { textVariant } from "../../utils/motion";
import Loader from "../ui/Loader";

const TechBallCanvas = lazy(() => import("../canvas/TechBallCanvas"));

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-light mb-2">03 / Expertise</p>
        <h2 className="text-white text-5xl md:text-7xl font-light tracking-tight">
          <span className="font-bold">Skills</span>.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-8 mt-20">
        {technologies.map((technology, index) => (
          <motion.div 
            className="w-32 h-32 bg-[#0a0a0a] border border-white/10 flex flex-col justify-center items-center p-6 hover:border-white/40 transition-all duration-300 group relative overflow-hidden" 
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 mb-2"
              referrerPolicy="no-referrer"
            />
            <p className="text-[10px] text-secondary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
