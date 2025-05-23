import React from "react";
import InfiniteMenu from "./InfiniteMenu";
import ScrollVelocity from "./ScrollVelocity";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];
  const velocity = 80; // Adjust this value to control the scroll speed
  return (
    <>
      <div className="home-container">
        <div className="home-left">
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
          <div style={{ height: "600px", position: "relative", overflow: "hidden" }}>
            <InfiniteMenu items={items} />
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
