import { useEffect, useState } from "react";
import { navLinks } from "../../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting("Good morning!");
      else if (hour < 18) setGreeting("Good afternoon!");
      else setGreeting("Good evening!");
    };

    updateGreeting();
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-8 w-full flex items-center py-8 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-[1800px] mx-auto text-white text-sm font-light">
        {/* Left: Greeting/Name */}
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="opacity-60 hover:opacity-100 transition-opacity">
            {scrolled ? "Dhanushiya" : greeting}
          </p>
        </a>

        {/* Center: Socials (Reference Style) */}
        <div className="hidden md:flex gap-4 items-center">
          <span className="font-bold">Socials</span>
          <span className="opacity-40">/</span>
          <a href="https://www.linkedin.com/in/jeyaraj-dhanushiya-408969297" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">LinkedIn</a>
          <span className="opacity-40">/</span>
          <a href="https://github.com/DhanuiyaJey" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">GitHub</a>
          <span className="opacity-40">/</span>
          <a href="mailto:premalathadhanushiya@gmail.com" className="opacity-60 hover:opacity-100 transition-opacity">Email</a>
        </div>

        {/* Right: Navigation (Reference Style) */}
        <div className="hidden md:flex gap-4 items-center">
          <span className="font-bold">Index</span>
          <span className="opacity-40">/</span>
          <ul className="list-none flex flex-row gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "opacity-100 font-medium" : "opacity-60"
                } hover:opacity-100 transition-opacity cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <X className="w-[24px] h-[24px] text-white" />
            ) : (
              <Menu className="w-[24px] h-[24px] text-white" />
            )}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black/95 border border-white/10 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl backdrop-blur-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-white/60"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/10 mt-4 pt-4 flex gap-4">
              <a href="https://www.linkedin.com/in/jeyaraj-dhanushiya-408969297" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">LinkedIn</a>
              <a href="https://github.com/DhanuiyaJey" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">GitHub</a>
              <a href="mailto:premalathadhanushiya@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors">Email</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
