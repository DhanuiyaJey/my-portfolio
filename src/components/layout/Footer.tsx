import { navLinks } from "../../constants";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 px-6 sm:px-16 border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col leading-tight">
            <span className="text-black text-[24px] font-black tracking-tighter uppercase">LANDO</span>
            <span className="text-black text-[24px] font-black tracking-tighter uppercase">NORRIS</span>
          </div>
          <p className="text-text-secondary text-[14px] max-w-[300px] font-medium">
            Official portfolio of McLaren Formula 1 driver Lando Norris. 
            Pushing boundaries on and off the track.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com" target="_blank" className="p-3 bg-black rounded-full text-white hover:bg-neon-green hover:text-black transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-3 bg-black rounded-full text-white hover:bg-neon-green hover:text-black transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" className="p-3 bg-black rounded-full text-white hover:bg-neon-green hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-black font-black text-[14px] uppercase tracking-widest">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-text-secondary hover:text-black transition-colors text-[14px] font-bold uppercase tracking-widest">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-black font-black text-[14px] uppercase tracking-widest">Contact</h3>
            <p className="text-text-secondary text-[14px] font-bold uppercase tracking-widest">contact@landonorris.com</p>
            <p className="text-text-secondary text-[14px] font-bold uppercase tracking-widest">Woking, UK</p>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-4 bg-black rounded-full shadow-lg hover:bg-neon-green transition-all group"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:text-black" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary text-[12px] font-bold uppercase tracking-widest">
          &copy; {currentYear} Lando Norris. All rights reserved.
        </p>
        <p className="text-text-secondary text-[12px] font-bold uppercase tracking-widest">
          Built for the pinnacle of motorsport
        </p>
      </div>
    </footer>
  );
};

export default Footer;
