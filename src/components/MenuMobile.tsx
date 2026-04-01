import { useState } from "react";
import "./menu.css";
import { Menu, X, Home, Layers, Lightbulb, Mail } from "lucide-react";
import logo from "./../assets/logo.png";

const menuItems = [
  { icon: <Home />, label: "Home", href: "#hero" },
  { icon: <Layers />, label: "Planos", href: "#planos" },
  { icon: <Lightbulb />, label: "Soluções", href: "#solucoes" },
  { icon: <Mail />, label: "Contato", href: "#contato" },
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
        {menuItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className="menu-item"
            style={{ animationDelay: `${index * 80}ms` }}
            onClick={handleLinkClick}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
