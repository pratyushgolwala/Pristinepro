import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container-fluid px-0"
      >
        <div className="row justify-content-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="col-12 col-md-10 d-flex flex-column align-items-center justify-content-center text-center rounded-4 p-4 my-4"
            style={{
              minHeight: "50vh",
              background: `linear-gradient(135deg, rgba(162,89,247,0.15) 0%, rgba(124,58,237,0.2) 100%), 
                          url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz5T0Fdo_jxbPEASTRGYCThXtRhLU2BMelFEr-q1st5AMBxC-Qi2aaYzqxzyymuC0W57E9yliCJxjaogzf2BG2QIIFYA3gaMZKnlc49Ro20Q1dLxIajWaq-RNcfOkeWzNadpgxY_eEIPifZ8eB_Vo6_OvRCAb-VlmtTgD3ijs3siAdfPWkicWvjXam23ISwevyZRGKQQjxDJtDbyWEfHZMTVlVkCfOfVxA7kYn7ez0S6GF8OrKXH5D50Km9VyRD3qoEgtAnHuCK68")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "24px",
              boxShadow: "0 15px 30px rgba(102, 126, 234, 0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              margin: "2rem auto",
              maxWidth: "1400px"
            }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white fw-bold display-4 mb-3"
              style={{ 
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.55)",
                fontSize: "4rem",
                background: "linear-gradient(90deg, #ffffff 0%, #f0f0f0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Pristine Pro
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-white fs-5 mb-4"
              style={{ 
                textShadow: "0 1px 4px rgba(0,0,0,0.2)",
                maxWidth: "800px",
                fontSize: "1.4rem",
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              Experience the difference with our premium wet tissues, crafted for superior cleanliness and comfort. Perfect for any situation, our tissues are gentle on your skin and tough on messes.
            </motion.h2>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(162,89,247,0.4)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(90deg, #a259f7 0%, #7c3aed 100%)",
                color: "white",
                border: "none",
                padding: "14px 32px",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(162,89,247,0.3)",
                marginTop: "1rem"
              }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Feature Highlights */}
      

      {/* Mobile Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-container {
            min-height: 60vh !important;
            padding: 2rem 1rem !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          h2 {
            font-size: 1.1rem !important;
            padding: 0 1rem !important;
          }
          
          .feature-col {
            margin-bottom: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}