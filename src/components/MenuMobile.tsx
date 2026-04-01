import { useState } from "react";
import "./menu.css";
import { Menu, X } from "lucide-react";
import logo from "./../assets/logo.png";

const menuItems = [
  { label: "HOME", href: "#hero" },
  { label: "PLANOS", href: "#planos" },
  { label: "SOLUÇÕES", href: "#solucoes" },
  { label: "CONTATO", href: "#contato" },
];

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function handleToggle() {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  }

  function handleLinkClick() {
    handleToggle();
  }

  return (
    <div className="mobile-nav">
      <button
        className={`hamburger ${isOpen ? "open" : ""} `}
        onClick={handleToggle}
      >
        <Menu
          color="white"
          size={40}
          className={`icon ${isOpen && !isClosing ? "icon-hidden" : "icon-visible"}`}
        />
        <X
          color="white"
          size={40}
          className={`icon ${isOpen && !isClosing ? "icon-visible" : "icon-hidden"}`}
        />
      </button>

      <a href="#hero" className="mobile-logo">
        <img src={logo} alt="Logo" />
      </a>

      <nav
        className={`mobile-menu ${isOpen ? "visible" : ""} ${isClosing ? "closing" : ""}`}
      >
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="menu-item"
            onClick={handleLinkClick}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
