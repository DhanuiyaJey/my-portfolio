import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "motion/react";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0a0a0a",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "none",
        borderRadius: "0px",
        padding: "2rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.1)" }}
      date={experience.date}
      iconStyle={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
        boxShadow: "0 0 0 2px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.05)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <span className="text-white text-[11px] font-bold tracking-wider uppercase leading-none text-center">
            {experience.iconLabel}
          </span>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold tracking-tight">{experience.title}</h3>
        <p
          className="text-secondary text-lg font-light uppercase tracking-widest mt-1"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-none space-y-3">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary text-sm font-light leading-relaxed border-l border-white/20 pl-4"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-light mb-2">02 / Journey</p>
        <h2 className="text-white text-5xl md:text-7xl font-light tracking-tight">
          <span className="font-bold">Experience</span>.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#222">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
