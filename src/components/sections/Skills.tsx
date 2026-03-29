import { motion } from "motion/react";

import { skills } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";
import { textVariant } from "../../utils/motion";

const technicalSkills = skills.filter((s) => s.category === "technical");
const interpersonalSkills = skills.filter((s) => s.category === "interpersonal");

const SkillCard = ({
  name,
  index,
  total,
}: {
  name: string;
  index: number;
  total: number;
}) => {
  // Stagger from bottom-left to top-right
  const row = Math.floor(index / 3);
  const col = index % 3;
  const diagonalDelay = (col + (Math.floor(total / 3) - row)) * 0.08;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: -20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.4, delay: diagonalDelay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group relative"
    >
      <div className="bg-[#0a0a0a] border border-white/10 px-6 py-4 hover:border-white/40 transition-all duration-300 cursor-default">
        <div className="absolute top-2 right-3 text-[10px] text-white/10 font-mono group-hover:text-white/30 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </div>
        <p className="text-white/80 text-sm font-light tracking-wide group-hover:text-white transition-colors">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-light mb-2">
          03 / Expertise
        </p>
        <h2 className="text-white text-5xl md:text-7xl font-light tracking-tight">
          <span className="font-bold">Skills</span>.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col lg:flex-row gap-16">
        {/* Technical Skills */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-6 border-b border-white/10 pb-3"
          >
            Technical
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {technicalSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                index={i}
                total={technicalSkills.length}
              />
            ))}
          </div>
        </div>

        {/* Interpersonal Skills */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-6 border-b border-white/10 pb-3"
          >
            Interpersonal
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {interpersonalSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                index={i}
                total={interpersonalSkills.length}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
