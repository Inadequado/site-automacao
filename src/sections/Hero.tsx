import React from "react";
import { useEffect, useState } from "react";
import phone1 from "../assets/Iphone-1.png";
import phone2 from "../assets/Iphone-2.png";
import bubble from "../assets/bubble.png";
import { motion } from "framer-motion";

type Word = string | { break: boolean };

const titulo: Word[] = [
  "SEU ",
  "ATENDIMENTO ",
  "NO ",
  { break: true },
  "PILOTO ",
  "AUTOMÁTICO",
];

const GlassButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="glass-btn">
      <a href="#demonstracao">
        <div className="glow-ring" />
        <div className="glass-fill" />
        <div className="border-ring" />
        <div className="border-gloss" />
        <span>{children}</span>
      </a>
    </button>
  );
};

export function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="subHero">
      <div className={`hero ${hasScrolled ? "hero-scrolled" : ""}`}>
        <div className="section-content">
          <motion.div
            className="main-text"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="hero-titulo">
              {titulo.map((word, index) =>
                typeof word === "object" && word.break ? (
                  <br key={index} className="desktop-break" />
                ) : (
                  <motion.span
                    key={`${word}-${index}`}
                    className="hero-word"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.3,
                    }}
                  >
                    {word as string}
                  </motion.span>
                ),
              )}
            </h1>
            <motion.h2
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              A IA que responde, tira dúvidas e agenda horários <br></br> sem
              você ficar preso no celular.
            </motion.h2>
            <motion.div
              className="div-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <GlassButton>VER DEMONSTRAÇÃO</GlassButton>
            </motion.div>
          </motion.div>
          <div className="phone-anim">
            <div className="phone1-wrapper">
              <motion.div
                className="reveal"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <img src={phone1} className="phone1" />
              </motion.div>
            </div>
            <div className="phone2-wrapper">
              <motion.div
                className="reveal delay-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                <img src={phone2} className="phone2" />
              </motion.div>
            </div>
            <div className="bubble-wrapper">
              <motion.div
                className="reveal delay-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.5 }}
              >
                <img src={bubble} className="bubble" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
