import logo from "../assets/logo.png";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);
  const scrollUpAccumulated = useRef(0);

  function toggleMenu() {
    setMenuAberto(!menuAberto);
  }

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      // se o menu mobile estiver aberto, não esconde o header
      if (menuAberto) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // no topo da página, sempre mostra
      if (currentScrollY <= 10) {
        setShowHeader(true);
        scrollUpAccumulated.current = 0;
        lastScrollY.current = currentScrollY;
        return;
      }

      // rolando para baixo
      if (diff > 0) {
        setShowHeader(false);
        scrollUpAccumulated.current = 0;
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuAberto]);

  return (
    <header className={`header ${showHeader ? "header-show" : "header-hide"}`}>
      <div className="container header-content">
        <div className="logo-btn">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuAberto(false);
            }}
          >
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuAberto ? "✕" : "☰"}
        </button>

        <nav className={`nav ${menuAberto ? "open" : ""}`}>
          <a id="home-btn" href="#home" onClick={() => setMenuAberto(false)}>
            HOME
          </a>
          <a id="plan-btn" href="#planos" onClick={() => setMenuAberto(false)}>
            PLANOS
          </a>
          <a
            id="solution-btn"
            href="#solucoes"
            onClick={() => setMenuAberto(false)}
          >
            SOLUÇÕES
          </a>
          <a id="cont-btn" href="#contato" className="contact-btn mobile">
            CONTATO
          </a>
        </nav>

        <div className="btn-right">
          <a href="#" className="contact-btn">
            CONTATO
          </a>
        </div>
      </div>
    </header>
  );
}
