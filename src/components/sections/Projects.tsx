import { motion } from "motion/react";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";

import { projects } from "../../constants";
import type { Collaborator } from "../../types";
import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from "../../hoc/SectionWrapper";

function useContributors(repoUrl: string) {
  const [contributors, setContributors] = useState<Collaborator[]>([]);

  useEffect(() => {
    // Extract owner/repo from "https://github.com/owner/repo"
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return;

    const [, owner, repo] = match;
    const cacheKey = `contributors-${owner}/${repo}`;
    const ONE_HOUR = 60 * 60 * 1000;

    // Check localStorage cache first
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < ONE_HOUR) {
          setContributors(data);
          return;
        }
      }
    } catch {
      // Ignore parse errors, proceed to fetch
    }

    fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`)
      .then((res) => {
        if (!res.ok) return [];
        return res.json();
      })
      .then((data: any[]) => {
        if (!Array.isArray(data)) return;
        const mapped = data.map((c) => ({
          login: c.login,
          avatar_url: c.avatar_url,
          html_url: c.html_url,
        }));
        setContributors(mapped);
        try {
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ data: mapped, timestamp: Date.now() })
          );
        } catch {
          // Ignore storage errors
        }
      })
      .catch(() => {});
  }, [repoUrl]);

  return contributors;
}

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
  const collaborators = useContributors(source_code_link);

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
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 flex justify-end m-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            role="button"
            tabIndex={0}
            aria-label="View source code"
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

        {collaborators.length > 0 && (
          <div className="mt-5 flex items-center gap-3">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Team</span>
            <div className="flex -space-x-2">
              {collaborators.map((c) => (
                <a
                  key={c.login}
                  href={c.html_url}
                  target="_blank"
                  rel="noreferrer"
                  title={c.login}
                  className="relative block w-8 h-8 rounded-full border-2 border-[#0a0a0a] overflow-hidden hover:z-10 hover:scale-110 transition-transform"
                >
                  <img
                    src={c.avatar_url}
                    alt={c.login}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
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
