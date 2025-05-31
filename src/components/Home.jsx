import React from "react";
import CircularGallery from "./CircularGallery";
import ScrollVelocity from "./ScrollVelocity";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  
  const velocity = 80; // Adjust this value to control the scroll speed
  return (
    <>
      <div className="home-container">
        <div className="home-left my-3">
          <h1>
          Welcome to PrestinePro!
          </h1>
          <h3>
            <Typewriter
              words={["Premium Quality", "Affordable Prices", "Eco Friendly","Available in different flavours"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={110}
              deleteSpeed={70}
              delaySpeed={100}
            />
          </h3>
          <p style={{ marginTop: "2rem", color: "#ccc" }}>
              Discover the next generation of productivity tools.<br />
              <span style={{ color: "#a259f7" }}>Get started today!</span>
            </p>
        </div>
        <div className="home-right">
          <div style={{ height: "450px", width: "450px", position: "relative", overflow: "hidden" }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </div>
      </div>
      <ScrollVelocity
      style={{ position: "absolute", top: 0, left: 0, width: "20px", height: "20vh", color: "#fff" }}
        texts={["PrestinePro", "Best Quality Wet Tissues"]}
        velocity={velocity}
        className="custom-scroll-text"

      />
    </>
  );
}
