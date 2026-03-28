import { navLinks } from "../../constants";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 px-6 sm:px-16 border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col leading-tight">
            <span className="text-white text-[24px] font-black tracking-tighter uppercase">JEYARAJ</span>
            <span className="text-white text-[24px] font-black tracking-tighter uppercase">DHANUSHIYA</span>
          </div>
          <p className="text-secondary text-[14px] max-w-[300px] font-medium">
            BICT undergraduate at University of Ruhuna with a strong interest in technology and problem-solving.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com" target="_blank" className="p-3 bg-tertiary rounded-full text-white hover:text-primary hover:bg-white transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jeyaraj-dhanushiya-408969297" target="_blank" className="p-3 bg-tertiary rounded-full text-white hover:text-primary hover:bg-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-black text-[14px] uppercase tracking-widest">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-secondary hover:text-white transition-colors text-[14px] font-bold uppercase tracking-widest">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-black text-[14px] uppercase tracking-widest">Contact</h3>
            <p className="text-secondary text-[14px] font-bold uppercase tracking-widest">premalathadhanushiya@gmail.com</p>
            <p className="text-secondary text-[14px] font-bold uppercase tracking-widest">Colombo, Sri Lanka</p>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-4 bg-tertiary rounded-full shadow-lg hover:bg-white group transition-all"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:text-primary" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-secondary text-[12px] font-bold uppercase tracking-widest">
          &copy; {currentYear} Jeyaraj Dhanushiya. All rights reserved.
        </p>
        <p className="text-secondary text-[12px] font-bold uppercase tracking-widest">
          Built with React, Three.js & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
