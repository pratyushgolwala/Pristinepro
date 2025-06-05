import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutImages = [
  "/pictures/aboutIMG.png",
  "/pictures/aboutIMG2.png",
  "/pictures/aboutIMG3.png"
];

const mainFeatures = [
  {
    icon: "💧",
    title: "Gentle Hydration",
    description: "Infused with soothing aloe vera, our tissues provide a gentle and hydrating cleanse."
  },
  {
    icon: "🌿",
    title: "Natural Ingredients",
    description: "Crafted with natural ingredients, free from harsh chemicals and artificial additives."
  },
  {
    icon: "🌎",
    title: "Eco-Friendly",
    description: "Made from biodegradable materials, reducing environmental impact."
  },
  {
    icon: "💪",
    title: "Durable & Reliable",
    description: "Strong and durable for everyday use, ensuring premium cleaning anywhere."
  },
];

const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  })
};

export default function About() {
  const [imgIdx, setImgIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setImgIdx((prev) => (prev + 1) % aboutImages.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setImgIdx((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #f8f8ff 0%, #f0f4ff 100%)",
      minHeight: "100vh",
      padding: "2rem 0 4rem"
    }}>
      {/* Hero Section */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center"
      }}>
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "2.8rem",
            fontWeight: 700,
            color: "#5a67d8",
            marginBottom: "1rem",
            background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          The Ultimate Clean
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontSize: "1.2rem",
            color: "#4a5568",
            maxWidth: "800px",
            margin: "0 auto 2rem",
            lineHeight: 1.6
          }}
        >
          Experience the difference with our premium wet tissues, crafted for superior cleanliness and comfort. 
          Perfect for any situation, our tissues are gentle on your skin and tough on messes.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "50px",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(102, 126, 234, 0.3)"
          }}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Image Gallery Section */}
      <div style={{
        maxWidth: "1200px",
        margin: "3rem auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "row",
        gap: "3rem",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {/* Image Carousel */}
        <div style={{
          flex: "1 1 500px",
          minWidth: "300px",
          maxWidth: "600px",
          height: "400px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 10px 30px rgba(102, 126, 234, 0.15)"
        }}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={imgIdx}
              src={aboutImages[imgIdx]}
              alt="Product showcase"
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute"
              }}
            />
          </AnimatePresence>
          
          <button 
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.8)",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease"
            }}
            whileHover={{ background: "rgba(255,255,255,1)" }}
          >
            &lt;
          </button>
          
          <button 
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.8)",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease"
            }}
            whileHover={{ background: "rgba(255,255,255,1)" }}
          >
            &gt;
          </button>
        </div>

        {/* Info Card */}
        <div style={{
          flex: "1 1 400px",
          minWidth: "300px",
          maxWidth: "500px",
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "2.5rem",
          boxShadow: "0 10px 30px rgba(102, 126, 234, 0.1)",
          border: "1px solid rgba(255,255,255,0.3)"
        }}>
          <h2 style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#5a67d8",
            marginBottom: "1.5rem",
            textAlign: "center"
          }}>
            Why Choose Us?
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem"
          }}>
            {[
              { icon: "🧴", text: "Premium aloe vera formula" },
              { icon: "♻️", text: "Eco-friendly materials" },
              { icon: "🛡️", text: "Safe for sensitive skin" },
              { icon: "✈️", text: "Travel-friendly packaging" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.6)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease"
                }}
              >
                <span style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{item.icon}</span>
                <span style={{ 
                  fontSize: "0.9rem", 
                  fontWeight: 500, 
                  color: "#4a5568",
                  textAlign: "center"
                }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        maxWidth: "1200px",
        margin: "4rem auto",
        padding: "0 2rem"
      }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#5a67d8",
          marginBottom: "2rem",
          textAlign: "center"
        }}>
          Our Premium Features
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem"
        }}>
          {mainFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(102, 126, 234, 0.2)"
              }}
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 5px 15px rgba(102, 126, 234, 0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                textAlign: "center"
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "#5a67d8",
                marginBottom: "0.8rem",
                textAlign: "center"
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: "#4a5568",
                lineHeight: 1.6,
                textAlign: "center"
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .about-page {
            padding: 1rem !important;
          }
          
          .about-top-section {
            flex-direction: column !important;
          }
          
          .about-image, .about-info-card {
            max-width: 100% !important;
            min-width: unset !important;
          }
          
          .features-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}