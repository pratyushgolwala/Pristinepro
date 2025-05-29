import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf, FaStar, FaSmile, FaBolt, FaHeart } from "react-icons/fa";
import ScrollVelocity from "./ScrollVelocity";

const features = [
    { icon: <FaLeaf />, text: "Eco Friendly" },
    { icon: <FaStar />, text: "Premium Quality" },
    { icon: <FaSmile />, text: "Customer Satisfaction" },
    { icon: <FaBolt />, text: "Fast Delivery" },
    { icon: <FaHeart />, text: "Loved by All" },
];

const mainFeatures = [
    {
        title: "100% Natural Ingredients",
        description: "Our tissues are made with carefully selected plant-based ingredients that are gentle on your skin and the environment.",
        icon: "🌿"
    },
    {
        title: "Superior Moisture Lock",
        description: "Our proprietary formula ensures that our tissues remain perfectly moist until the very last wipe, sealing in freshness.",
        icon: "💧"
    },
    {
        title: "Eco-Friendly & Biodegradable",
        description: "Our tissues break down naturally without harming the environment, making them a sustainable choice for conscious consumers.",
        icon: "♻️"
    }
];

const velocity = 80; // Adjust this value to control the scroll speed

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

export default function About() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            {/* Top Section: Bubbles + Info Card */}
            <div
                className="about-top-section"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "48px",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 180,
                    marginBottom: 40,
                    marginTop: 70,
                    position: "relative",
                    zIndex: 2,
                    flexWrap: "wrap",
                }}
            >
                {/* Left: Feature Bubbles */}
                <div className="about-bubbles" style={{ display: "flex", gap: "2.5rem", marginTop: 30, flexWrap: "wrap", justifyContent: "center" }}>
                    {features.map((feature, i) => {
                        const expandedWidth = (hovered === i && (i === 1 || i === 2)) ? 290 : (hovered === i ? 220 : 70);
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
                                    transition: "width 0.5s cubic-bezier(.4,1.4,.6,1),background 0.3s,padding 0.5s cubic-bezier(.4,1.4,.6,1)",
                                    padding: hovered === i ? "0 24px" : 0,
                                    fontSize: 32,
                                    color: "#a259f7",
                                    position: "relative",
                                    overflow: "visible",
                                    zIndex: hovered === i ? 2 : 1,
                                    marginBottom: "16px",
                                }}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {hovered === i ? (
                                        <>
                                            <motion.span
                                                key="icon-left"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ fontSize: 32, color: "#a259f7", minWidth: 32 }}
                                            >
                                                {feature.icon}
                                            </motion.span>
                                            <motion.span
                                                key="text"
                                                initial={{ opacity: 0, x: 16 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 16 }}
                                                transition={{ duration: 0.3 }}
                                                style={{
                                                    fontSize: 18,
                                                    color: "#fff",
                                                    fontWeight: 600,
                                                    marginLeft: 12,
                                                    whiteSpace: "nowrap",
                                                    letterSpacing: 0.5,
                                                    pointerEvents: "none",
                                                }}
                                            >
                                                {feature.text}
                                            </motion.span>
                                        </>
                                    ) : (
                                        <motion.span
                                            key="icon-center"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                fontSize: 32,
                                                color: "#a259f7",
                                                margin: "0 auto",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                minWidth: 32,
                                            }}
                                        >
                                            {feature.icon}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Right: Info Card */}
                <div
                    className="about-info-card"
                    style={{
                        minWidth: 270,
                        maxWidth: 420,
                        background: 'rgba(255,255,255,0.18)',
                        borderRadius: '18px',
                        padding: '22px 18px',
                        boxShadow: '0 8px 32px 0 rgba(162,89,247,0.18)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1.5px solid rgba(162,89,247,0.18)',
                        marginTop: 30,
                        width: "100%",

                    }}
                >
                    <h2
                        style={{
                            fontSize: '1.2rem',
                            marginBottom: 8,
                            color: '#a259f7',
                            fontWeight: 800,
                            letterSpacing: 1,
                            textShadow: '0 2px 12px rgba(162,89,247,0.10)',
                            textAlign: 'center',
                        }}
                    >
                        Why PrestinePro?
                    </h2>
                    <div
                        style={{
                            color: '#fff',
                            fontSize: '0.95rem',
                            fontStyle: 'italic',
                            marginBottom: 14,
                            textAlign: 'center',
                            fontWeight: 500,
                            letterSpacing: 0.5,
                            textShadow: '0 2px 12px rgba(162,89,247,0.10)',
                        }}
                    >
                        Experience freshness, comfort, and care—anytime, anywhere.
                    </div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '14px 8px',
                            width: '100%',
                            marginTop: 2,
                            marginBottom: 2,
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{
                                fontSize: 22,
                                color: '#a259f7',
                                marginBottom: 4,
                                filter: 'drop-shadow(0 2px 8px rgba(162,89,247,0.15))',
                            }}>🧴</span>
                            <span style={{ color: '#fff', fontWeight: 600, textAlign: 'center', fontSize: 12 }}>
                                Premium tissues with aloe vera
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{
                                fontSize: 22,
                                color: '#a259f7',
                                marginBottom: 4,
                                filter: 'drop-shadow(0 2px 8px rgba(162,89,247,0.15))',
                            }}>♻️</span>
                            <span style={{ color: '#fff', fontWeight: 600, textAlign: 'center', fontSize: 12 }}>
                                Eco-friendly & biodegradable
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{
                                fontSize: 22,
                                color: '#a259f7',
                                marginBottom: 4,
                                filter: 'drop-shadow(0 2px 8px rgba(162,89,247,0.15))',
                            }}>🛡️</span>
                            <span style={{ color: '#fff', fontWeight: 600, textAlign: 'center', fontSize: 12 }}>
                                Safe for sensitive skin
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{
                                fontSize: 22,
                                color: '#a259f7',
                                marginBottom: 4,
                                filter: 'drop-shadow(0 2px 8px rgba(162,89,247,0.15))',
                            }}>🚀</span>
                            <span style={{ color: '#fff', fontWeight: 600, textAlign: 'center', fontSize: 12 }}>
                                Perfect for travel & daily use
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Main Features */}
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", zIndex: 1 }}>
                <div style={{ textAlign: "center", marginBottom: "28px" }}>
                    <h1 style={{
                        fontSize: "2.5rem",
                        background: "linear-gradient(135deg, #a259f7 0%, #7c3aed 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 800,
                        marginBottom: "24px"
                    }}>
                        Revolutionizing Personal Care
                    </h1>
                    <p style={{
                        color: "rgba(254, 255, 252, 0.8)",
                        fontSize: "1.125rem",
                        maxWidth: "800px",
                        margin: "0 auto",
                        lineHeight: 1.6
                    }}>
                        At Pristine Pro, we're dedicated to creating premium wet tissues that combine luxury,
                        convenience and sustainability. Our mission is to provide you with the highest quality
                        cleaning experience while minimizing environmental impact.
                    </p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "32px",
                    margin: "48px 0"
                }}>
                    {mainFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{
                                background: 'rgba(255,255,255,0.18)',
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                                borderRadius: "16px",
                                padding: "24px",
                                border: "1px solid rgba(162,89,247,0.1)",
                                cursor: "pointer",
                                boxShadow: '0 8px 32px 0 rgba(162,89,247,0.18)',
                            }}
                              whileHover={{ 
                                y: -8,
                                background: 'rgba(255,255,255,0.22)',
                                transition: { duration: 0.2 }
                              }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                                <div style={{
                                    background: "rgba(162,89,247,0.1)",
                                    borderRadius: "50%",
                                    width: "48px",
                                    height: "48px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <span style={{ fontSize: "24px" }}>{feature.icon}</span>
                                </div>
                                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "1.25rem" }}>
                                    {feature.title}
                                </h3>
                            </div>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.6 }}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <ScrollVelocity
                style={{ position: "absolute", top: 0, left: 0, width: "20px", height: "20vh", color: "#fff" }}
                texts={["PrestinePro", "Best Quality Wet Tissues!"]}
                velocity={velocity}
                className="custom-scroll-text"
            />
            <style>{`
                @media (max-width: 900px) {
                    .about-top-section {
                        flex-direction: column !important;
                        gap: 24px !important;
                        align-items: stretch !important;
                    }
                    .about-bubbles {
                        justify-content: center !important;
                        flex-wrap: wrap !important;
                        gap: 1.5rem !important;
                        margin-top: 0 !important;
                    }
                    .about-info-card {
                        margin-top: 0 !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                }
            `}</style>
        </div>
    );
}