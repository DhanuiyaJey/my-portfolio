import { useState, useEffect } from "react";
import { motion } from "motion/react";

import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from "../../hoc/SectionWrapper";

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= target) return;
    const step = Math.ceil(target / 10);
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;
        return next >= target ? target : next;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [count, target]);

  return <>{count}</>;
};

const About = () => {
  return (
    <>
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

      <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
        {[
          { value: 4, suffix: "+", label: "Projects" },
          { value: 6, suffix: "+", label: "Technical Skills" },
          { value: 3, suffix: "", label: "Languages" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="border-l border-white/20 pl-6"
          >
            <p className="text-white text-4xl font-bold tracking-tight">
              <AnimatedCounter target={stat.value} />{stat.suffix}
            </p>
            <p className="text-secondary text-xs uppercase tracking-[0.2em] mt-2 font-light">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
