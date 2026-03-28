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
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My technical level</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <Suspense fallback={<Loader />}>
              <TechBallCanvas icon={technology.icon} />
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
