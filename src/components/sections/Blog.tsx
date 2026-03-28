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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-[#0a0a0a] border border-white/10 p-0 sm:w-[360px] w-full group cursor-pointer hover:border-white/40 transition-all duration-300"
  >
    <div className="relative w-full h-[230px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 bg-black/80 text-[10px] uppercase tracking-widest text-white px-3 py-1 border border-white/10">
        {readTime}
      </div>
    </div>

    <div className="p-6">
      <p className="text-secondary text-[10px] uppercase tracking-[0.2em] font-light">{date}</p>
      <h3 className="text-white font-bold text-xl mt-3 tracking-tight group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="mt-4 text-secondary text-sm font-light leading-relaxed line-clamp-3">
        {excerpt}
      </p>

      <div className="mt-6 flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold">
        Read More
        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
      </div>
    </div>
  </motion.div>
);

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-light mb-2">07 / Insights</p>
        <h2 className="text-white text-5xl md:text-7xl font-light tracking-tight">
          <span className="font-bold">Blog</span>.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...post} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-transparent border border-white/20 py-4 px-10 outline-none w-fit text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all">
          View All Posts
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
