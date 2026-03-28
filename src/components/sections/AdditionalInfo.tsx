import { motion } from "motion/react";
import SectionWrapper from "../../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motion";

const AdditionalInfo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex-1 bg-[#0a0a0a] border border-white/10 p-10 hover:border-white/40 transition-all duration-300"
      >
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-light mb-2">05 / Achievements</p>
        <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight mb-8">
          <span className="font-bold">Certifications</span>.
        </h2>
        <ul className="list-none text-secondary text-lg font-light space-y-6">
          <li className="border-l border-white/20 pl-6">HP life-online certificate—effective presentation course</li>
          <li className="border-l border-white/20 pl-6">Coursera- effective communication</li>
        </ul>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex-1 bg-[#0a0a0a] border border-white/10 p-10 hover:border-white/40 transition-all duration-300"
      >
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-light mb-2">06 / Communication</p>
        <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight mb-8">
          <span className="font-bold">Languages</span>.
        </h2>
        <div className="flex flex-wrap gap-4">
          {["English", "Tamil", "Sinhala"].map((lang) => (
            <span key={lang} className="text-xs text-secondary uppercase tracking-widest border border-white/10 px-4 py-2 hover:bg-white hover:text-black transition-all cursor-default">
              {lang}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(AdditionalInfo, "additional");
