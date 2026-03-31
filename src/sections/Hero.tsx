import { useEffect, useState } from "react";
import phone1 from "../assets/Iphone-1.png";
import phone2 from "../assets/Iphone-2.png";
import bubble from "../assets/bubble.png";
import { motion } from "framer-motion";

const titulo = [
  "SEU ",
  "ATENDIMENTO ",
  "NO ",
  <br></br>,
  "PILOTO ",
  "AUTOMÁTICO",
];

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
    <section id="home" className={`hero ${hasScrolled ? "hero-scrolled" : ""}`}>
      <div className="section-content">
        <motion.div
          className="main-text"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="hero-titulo">
            {titulo.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="hero-word"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.25,
                  duration: 0.9,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            A IA que responde, tira dúvidas e agenda horários <br></br> sem você
            ficar preso no celular.
          </motion.p>
          <motion.div
            className="div-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <a href="#demonstracao" className="demo-btn">
              <span className="btn-hero">VER DEMONSTRAÇÃO</span>
            </a>
          </motion.div>
        </motion.div>
        <div className="phone-anim">
          <div className="phone1-wrapper">
            <motion.div
              className="reveal"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              <img src={phone1} className="phone1" />
            </motion.div>
          </div>
          <div className="phone2-wrapper">
            <motion.div
              className="reveal delay-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.5 }}
            >
              <img src={phone2} className="phone2" />
            </motion.div>
          </div>
          <div className="bubble-wrapper">
            <motion.div
              className="reveal delay-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
            >
              <img src={bubble} className="bubble" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
