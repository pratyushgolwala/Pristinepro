import React from "react";
import { FiHome, FiInfo, FiCoffee, FiStar, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const items = [
    { icon: <FiHome />, color: "blue", label: "Home" },
    { icon: <FiInfo />, color: "purple", label: "About" },
    { icon: <FiCoffee />, color: "red", label: "Flavours" },
    { icon: <FiStar />, color: "indigo", label: "Reviews" },
    { icon: <FiMail />, color: "orange", label: "Contact" },
  ];
  
  return (
    <nav className="navbar">
        <span className="brand mx-3">PrestinePro</span>
      <div className="nav-content">
        <ul className="icon-list">
          {items.map((item, index) => (
            <li key={index} className="icon-item">
              <span className={`icon-${item.color}`}>
                {item.icon}
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}