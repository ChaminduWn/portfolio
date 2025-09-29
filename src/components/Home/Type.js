import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Tech Enthusiast / Explorer",
          "Software Developer",
          "Mobile App Developer - Flutter / React Native / Kotlin",
          "Full Stack Developer - MERN Stack",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
