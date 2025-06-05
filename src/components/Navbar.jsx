import React, { useState, useEffect } from "react";
import {
  FiHome,
  FiInfo,
  FiCoffee,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const threshold = 50; // Minimum scroll before hiding

      setVisible(!isScrollingDown || currentScrollPos < threshold);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const items = [
    { icon: <FiHome />, color: "blue", label: "Home" },
    { icon: <FiInfo />, color: "purple", label: "About" },
    { icon: <FiCoffee />, color: "red", label: "Flavours" },
    { icon: <FiMail />, color: "orange", label: "Contact" },
  ];

  return (
    <nav 
      className="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transform: `translateY(${visible ? '0' : '-100%'})`,
        transition: 'transform 0.3s ease',
        backgroundColor: '#fff',
        zIndex: 1000,
        boxShadow: visible ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
      }}
    >
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
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 998
              }}
            />
          )}

          {/* Navigation Menu */}
          <ul 
            className={`icon-list nav-menu${open ? " open" : ""}`}
            style={{
              transform: open ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease'
            }}
          >
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