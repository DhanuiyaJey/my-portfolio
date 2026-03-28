import { useState, useRef } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

import { slideIn } from "../../utils/motion";
import SectionWrapper from "../../hoc/SectionWrapper";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_id",
        "template_id",
        {
          from_name: form.name,
          to_name: "Jeyaraj Dhanushiya",
          from_email: form.email,
          to_email: "premalathadhanushiya@gmail.com",
          message: form.message,
        },
        "public_key"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-[#0a0a0a] border border-white/10 p-10"
      >
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-light mb-2">08 / Connection</p>
        <h2 className="text-white text-5xl md:text-7xl font-light tracking-tight mb-12">
          <span className="font-bold">Contact</span>.
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-transparent border-b border-white/20 py-4 placeholder:text-white/20 text-white outline-none focus:border-white transition-colors font-light"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-transparent border-b border-white/20 py-4 placeholder:text-white/20 text-white outline-none focus:border-white transition-colors font-light"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="bg-transparent border-b border-white/20 py-4 placeholder:text-white/20 text-white outline-none focus:border-white transition-colors font-light resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-white text-black py-4 px-10 outline-none w-fit text-xs uppercase tracking-[0.2em] font-bold hover:bg-secondary transition-all mt-4"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="lg:w-[400px] flex flex-col gap-8"
      >
        <div className="bg-[#0a0a0a] border border-white/10 p-10 h-full flex flex-col justify-center">
          <h3 className="text-white font-bold text-2xl tracking-tight mb-10">Contact Details</h3>
          <div className="flex flex-col gap-8 text-secondary text-sm font-light">
            <div className="border-l border-white/20 pl-6">
              <p className="text-[10px] uppercase tracking-widest font-bold text-white mb-2">Address</p>
              <p>no 45, Mayfield, kotehena, colombo 13</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="text-[10px] uppercase tracking-widest font-bold text-white mb-2">Phone</p>
              <p>0761552343</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="text-[10px] uppercase tracking-widest font-bold text-white mb-2">Email</p>
              <p>premalathadhanushiya@gmail.com</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="text-[10px] uppercase tracking-widest font-bold text-white mb-2">LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/jeyaraj-dhanushiya-408969297" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                jeyaraj-dhanushiya
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
