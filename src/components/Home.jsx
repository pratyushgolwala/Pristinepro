import React from "react";
import InfiniteMenu from "./InfiniteMenu";
import ScrollVelocity from "./ScrollVelocity";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const items = [
    {
      image: "/pictures/feminine.png",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/pictures/orange2.png",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "/pictures/jasmine2.png",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "/pctures/ice2.png",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];
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
