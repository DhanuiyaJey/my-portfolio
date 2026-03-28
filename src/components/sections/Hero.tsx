import { motion } from "motion/react";

const Hero = () => {
  // Using the client's profile image.
  const userImageUrl = "/profile.png";

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-black">
      {/* Top Right Triangle */}
      <div 
        className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#D1D1D1] z-0"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
      />

      {/* Bottom Left Triangle */}
      <div 
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#D1D1D1] z-0"
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
      />

      {/* Main Profile Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img 
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
        <h2 className="text-black text-4xl font-light tracking-tight">
          <span className="font-bold">Jeyaraj</span> Dhanushiya
        </h2>
      </div>

      {/* Scroll Indicator (Optional, but keeping for UX) */}
      <div className="absolute bottom-10 right-12 z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-white/20 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white/40 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
