import React from "react";
import { motion } from "framer-motion";
import FlowingMenu from "./FlowingMenu";

export default function Flavors() {
  const demoItems = [
    { text: "Orange", image: "/pictures/orange.jpg" },
    { text: "Jasmine", image: "/pictures/jasmine.jpg" },
    { text: "Ice Fresh", image: "/pictures/ice.jpg" },
    { text: "Coffee", image: "/pictures/coffee.jpg" },
    { text: "Makeup Remover", image: "/pictures/makeup.jpg" },
    { text: "Baby Wipes", image: "/pictures/baby.png" },
  ];

  return (
    <div style={{
      background: "linear-gradient(135deg, #f8f8ff 0%, #f0f4ff 100%)",
      padding: "4rem 2rem",
      position: "relative",
      overflow: "hidden",
      color: "#2d3748"
    }}>
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          padding: "2rem",
          marginBottom: "3rem",
          maxWidth: "1200px",
          margin: "0 auto 3rem"
        }}
      >
        <motion.h1
          style={{
            fontSize: "2.8rem",
            fontWeight: 800,
            marginBottom: "1.5rem",
            background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2
          }}
        >
          Explore Our Unique Flavors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            color: "#4a5568",
            fontSize: "1.2rem",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.6
          }}
        >
          Discover a variety of flavors crafted to perfection. Each flavor is
          designed to bring a unique experience to your daily routine.
        </motion.p>
      </motion.div>

      {/* Flowing Menu Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          maxWidth: "600px",
          height: "600px",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: "20px",
          boxShadow: "0 15px 30px rgba(102, 126, 234, 0.2)",
          border: "1px solid rgba(255,255,255,0.4)",
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)"
        }}
      >
        <FlowingMenu items={demoItems} />
      </motion.div>

      {/* Feature Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          maxWidth: "1000px",
          margin: "4rem auto",
          padding: "2rem",
          textAlign: "center"
        }}
      >
        <h2 style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#5a67d8",
          marginBottom: "2rem"
        }}>
          Why Our Flavors Stand Out
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem"
        }}>
          {[
            {
              icon: "🌿",
              title: "Natural Essences",
              text: "Infused with real plant extracts for authentic aromas"
            },
            {
              icon: "🧴",
              title: "Skin-Friendly",
              text: "Gentle formulas suitable for all skin types"
            },
            {
              icon: "✨",
              title: "Mood Enhancing",
              text: "Scents designed to uplift and refresh"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 5px 15px rgba(102, 126, 234, 0.1)",
                border: "1px solid rgba(255,255,255,0.3)"
              }}
            >
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "1rem"
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "#5a67d8",
                marginBottom: "0.8rem"
              }}>
                {item.title}
              </h3>
              <p style={{
                color: "#4a5568",
                lineHeight: 1.6
              }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .flavor-page {
            padding: 1rem !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
          
          .flowing-menu-container {
            width: 90% !important;
            height: 500px !important;
          }
        }
      `}</style>
    </div>
  );
}