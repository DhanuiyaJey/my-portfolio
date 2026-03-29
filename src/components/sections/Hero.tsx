import { motion } from "motion/react";

const Hero = () => {
  // Using the client's profile image.
  const userImageUrl = `${import.meta.env.BASE_URL}profile.webp`;

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-black">
      {/* Top Right Triangle */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#D1D1D1] z-0"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
      />

      {/* Bottom Left Triangle */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#D1D1D1] z-0"
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
      />

      {/* Main Profile Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          src={userImageUrl}
          alt="Profile"
          className="h-[85%] object-contain"
          style={{
            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
          }}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Bottom Left Name (Reference Style) */}
      <div className="absolute bottom-12 left-12 z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-black text-4xl font-light tracking-tight"
        >
          <span className="font-bold">Jeyaraj</span> Dhanushiya
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="text-sm uppercase tracking-[0.3em] text-black/60 font-light mt-2"
        >
          BICT Undergraduate | Web Developer
        </motion.p>
      </div>

      {/* Scroll Indicator — geometric cascading triangles */}
      <a href="#about" className="absolute bottom-8 right-12 z-20 group flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors duration-500 mb-2"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="flex flex-col items-center gap-[2px]">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.15, 0.8, 0.15],
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
              className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white/50 group-hover:border-t-white/80 transition-colors duration-500"
            />
          ))}
        </div>
        {/* Thin trailing line */}
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-gradient-to-b from-white/30 to-transparent origin-top mt-1"
        />
      </a>
    </section>
  );
};

export default Hero;
