import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf, FaStar, FaSmile, FaBolt, FaHeart } from "react-icons/fa";

const features = [
  { icon: <FaLeaf />, text: "Eco Friendly" },
  { icon: <FaStar />, text: "Premium Quality" },
  { icon: <FaSmile />, text: "Customer Satisfaction" },
  { icon: <FaBolt />, text: "Fast Delivery" },
  { icon: <FaHeart />, text: "Loved by All" },
];

const floatVariants = {
  animate: (i) => ({
    y: [0, -30, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 3 + i,
        ease: "easeInOut",
      },
    },
  }),
  paused: { y: 0, transition: { duration: 0.3 } },
};

export default function FeatureBubbles() {
  const [hovered, setHovered] = useState(null);
  const [paused, setPaused] = useState(false);

  const handleHover = (idx) => {
    setHovered(idx);
    setPaused(true);
  };
  const handleLeave = () => {
    setHovered(null);
    setPaused(false);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "2.5rem",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 180,
        marginBottom: 40,
        marginTop: 10,
        position: "relative",
        zIndex: 2,
      }}
    >
      {features.map((feature, i) => {
        // Set width to 290 for star (i==1) and smile (i==2) when hovered, else 220 for others
        const expandedWidth = (hovered === i && (i === 1 || i === 2)) ? 295 : (hovered === i ? 220 : 70);
        return (
          <motion.div
            key={i}
            custom={i}
            variants={floatVariants}
            animate={paused ? "paused" : "animate"}
            whileHover="paused"
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={handleLeave}
            style={{
              width: expandedWidth,
              minWidth: 70,
              maxWidth: 320,
              height: 70,
              borderRadius: 40,
              background: "rgba(162,89,247,0.18)",
              boxShadow: "0 4px 24px 0 rgba(162,89,247,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: hovered === i ? "flex-start" : "center",
              gap: 16,
              cursor: "pointer",
              transition: "width 0.35s cubic-bezier(.4,2,.6,1),background 0.3s",
              padding: hovered === i ? "0 24px" : 0,
              fontSize: 32,
              color: "#a259f7",
              position: "relative",
              overflow: "visible",
              zIndex: hovered === i ? 2 : 1,
            }}
          >
            <span>{feature.icon}</span>
            <AnimatePresence>
              {hovered === i && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontSize: 18,
                    color: "#fff",
                    fontWeight: 600,
                    marginLeft: 12,
                    whiteSpace: "nowrap",
                    letterSpacing: 0.5,
                  }}
                >
                  {feature.text}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}