import { motion } from "motion/react";
import { Github } from "lucide-react";

import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from "../../hoc/SectionWrapper";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] border border-white/10 p-0 sm:w-[360px] w-full hover:border-white/40 transition-all duration-300 group"
    >
      <div className="relative w-full h-[230px] overflow-hidden">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 flex justify-end m-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black/80 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition-all"
          >
            <Github className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-white font-bold text-2xl tracking-tight">{name}</h3>
        <p className="mt-3 text-secondary text-sm font-light leading-relaxed line-clamp-3">{description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span key={tag.name} className="text-[10px] text-secondary uppercase tracking-widest border border-white/10 px-2 py-1">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-light mb-2">04 / Selected Works</p>
        <h2 className="text-white text-5xl md:text-7xl font-light tracking-tight">
          <span className="font-bold">Projects</span>.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-secondary text-xl font-light max-w-3xl leading-relaxed"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
