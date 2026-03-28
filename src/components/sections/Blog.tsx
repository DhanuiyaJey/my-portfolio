import { motion } from "motion/react";
import { blogPosts } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from "../../hoc/SectionWrapper";

const BlogCard = ({
  index,
  title,
  date,
  readTime,
  excerpt,
  image,
  link,
}: {
  index: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  link: string;
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full group cursor-pointer"
  >
    <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-bold text-white">
        {readTime}
      </div>
    </div>

    <div className="mt-5">
      <p className="text-text-secondary text-[14px] font-medium">{date}</p>
      <h3 className="text-white font-bold text-[22px] mt-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-3 text-text-secondary text-[14px] leading-[24px]">
        {excerpt}
      </p>
    </div>

    <div className="mt-5 flex items-center gap-2 text-primary font-bold text-[14px]">
      Read More
      <span className="group-hover:translate-x-2 transition-transform">→</span>
    </div>
  </motion.div>
);

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-text-secondary uppercase tracking-wider">My thoughts</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Blog.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {blogPosts.map((post, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...post} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary/20 hover:bg-primary/80 transition-all">
          View All Posts
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
