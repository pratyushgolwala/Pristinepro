import React, { useState } from "react";
import {
  FiHome,
  FiInfo,
  FiCoffee,
  FiStar,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { icon: <FiHome />, color: "blue", label: "Home" },
    { icon: <FiInfo />, color: "purple", label: "About" },
    { icon: <FiCoffee />, color: "red", label: "Flavours" },
    { icon: <FiStar />, color: "indigo", label: "Reviews" },
    { icon: <FiMail />, color: "orange", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="header">
          <img
            src="pictures/logo.png"
            alt="Pristine Pro Logo"
            className="logo-img"
          />
        </div>

        <div className="lists">
          {/* Hamburger for mobile */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
          {/* Overlay for mobile menu */}
          {open && (
            <div
              className="mobile-nav-overlay"
              onClick={() => setOpen(false)}
            />
          )}
          <ul className={`icon-list nav-menu${open ? " open" : ""}`}>
            {items.map((item, index) => (
              <li
                key={index}
                className="icon-item"
                onClick={() => setOpen(false)}
              >
                <span className={`icon-${item.color}`}>{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
